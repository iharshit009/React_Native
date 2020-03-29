// Import BackgroundGeolocation + any optional interfaces
import BackgroundGeolocation from 'react-native-background-geolocation';
import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Text } from 'react-native';
import {Container, Button} from 'native-base';

var firebaseConfig = {
  apiKey: 'AIzaSyAC2xKl-SYu3t6OnHv0hm0O2bYz-9_IHe4',
  authDomain: 'django-project-1552240590382.firebaseapp.com',
  databaseURL: 'https://django-project-1552240590382.firebaseio.com',
  projectId: 'django-project-1552240590382',
  storageBucket: 'django-project-1552240590382.appspot.com',
  messagingSenderId: '121951289629',
  appId: '1:121951289629:web:dfd8a9cfec0cfdef9861f4',
  measurementId: 'G-MYH3KH3YHH',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    var name = this.props.navigation.getParam('user').split('@')[0];
    this.state = {
      currentName: name,
    };
    this.onLocation = this.onLocation.bind(this);
    this.saveLiveLocation = this.saveLiveLocation.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount() {

    // This handler fires whenever bgGeo receives a location update.
    BackgroundGeolocation.onLocation(this.onLocation, this.onError);

    // This handler fires when movement states changes (stationary->moving; moving->stationary)
    BackgroundGeolocation.onMotionChange(this.onMotionChange);

    // This event fires when a change in motion activity is detected
    BackgroundGeolocation.onActivityChange(this.onActivityChange);

    // This event fires when the user toggles location-services authorization
    BackgroundGeolocation.onProviderChange(this.onProviderChange);

    BackgroundGeolocation.ready(
      {
        // Geolocation Config
        desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
        distanceFilter: 10,
        // Activity Recognition
        stopTimeout: 1,
        // Application config
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
        stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
        startOnBoot: true, // <-- Auto start tracking when device is powered-up.
        // HTTP / SQLite config
        url: 'http://yourserver.com/locations',
        batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
        autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
        headers: {
          // <-- Optional HTTP headers
          'X-FOO': 'bar',
        },
        params: {
          // <-- Optional HTTP params
          auth_token: 'maybe_your_server_authenticates_via_token_YES?',
        },
      },
      state => {
        console.log(
          '- BackgroundGeolocation is configured and ready: ',
          state.enabled,
        );

        if (!state.enabled) {
          BackgroundGeolocation.start(function() {
            console.log('- Start success');
          });
        }
      },
    );
  }

  saveLiveLocation(lat, long) {
    firebase
      .database()
      .ref(`${this.state.currentName}/`)
      .set({
        lat,
        long,
      })
      .then(data => {
        console.log('Location saved to firebase');
      })
      .catch(err => console.log(err));
  }

  // You must remove listeners when your component unmounts
  componentWillUnmount() {
    BackgroundGeolocation.removeAllListeners();
  }

  onLocation(location) {
    var latitude = location['coords'].latitude;
    var longitude = location['coords'].longitude;
    this.saveLiveLocation(latitude, longitude);
    console.log('[location] -', location);
  }
  onError(error) {
    console.warn('[location] ERROR -', error);
  }
  onActivityChange(event) {
    console.log('[activitychange] -', event); // eg: 'on_foot', 'still', 'in_vehicle'
  }
  onProviderChange(provider) {
    console.log('[providerchange] -', provider.enabled, provider.status);
  }
  onMotionChange(event) {
    console.log('[motionchange] -', event.isMoving, event.location);
  }

  render() {
    var names = ['ritikjain1272', 'dhananjaypurohit7'];
    return (
      <Container>
        {names.map(name => {
          return(
            <Button 
            block
            style={{backgroundColor : "#f4511e"}}
            onPress={()=>
              this.props.navigation.navigate('MapUser', {user : name})
            }><Text style={{color : '#fff'}}>{name}</Text></Button>
          )
        })}
      </Container>
    );
  }
}


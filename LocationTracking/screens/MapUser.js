import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase';

export default class MapUser extends Component{
    
    constructor(props){
        super(props);
        this.state={
            region:{
                latitude :  22.7183992,
                longitude : 75.8806232,
                latitudeDelta : 0.001,
                longitudeDelta : 0.01
            }
        }
    }
   
    componentDidMount(){
        this.fetchUserLocation();
    }

    fetchUserLocation = () => {
        var name = this.props.navigation.getParam('user');
        console.log(name);
        console.log("the name is fetchUserLocation is", name);
        firebase
          .database()
          .ref(`${name}/`)
          .on('value', snapshot => {
            if (snapshot.val().lat) {
              this.setState({
                region: {
                  latitude: snapshot.val().lat,
                  longitude: snapshot.val().long,
                },
              });
            }
          });
      }

    render(){
        return(
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: 22.7183992,
                longitude: 75.8806232,
                latitudeDelta: 0.001,
                longitudeDelta: 0.01,
            }}
            >
            <Marker 
            coordinate={this.state.region}
            />
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: {
      flex: 1,
      marginTop: 0,
      paddingTop: 0,
      width : 500,
      height: 500
    },
  });
  
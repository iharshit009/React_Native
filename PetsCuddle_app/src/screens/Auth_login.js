import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Dimensions,
  Button,
  TouchableOpacity,
  Vibration,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Images from '../constants/Images';
import {Input, Item} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class Auth_login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error_message : '',
    };
  }

  invalidVibration = () => {
    Vibration.vibrate(1000);
  }

  submitRequest = async () => {
    var token = '';
    await axios.post('http://192.168.43.48:8000/auth/login/', {
      username: this.state.username,
      password: this.state.password,
    })
    .then(response => {
      token = response.data.token;
    })
    .catch(err => console.log(err))
    
    if(token !== ''){
      try{
        await AsyncStorage.setItem('token', token);
        this.props.navigation.navigate('Home')
      }
      catch(error){
        console.log("Error saving token");
      }
    }

    else{
      this.invalidVibration();
      this.setState({error_message : 'INVALID CREDENTIALS!'})
    }
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar hidden />
        <ImageBackground
          style={styles.imageBackground}
          source={Images.LoginBackground}>
          <View style={styles.registerContainer}>
            <Text style={{color: '#696969', margin: 15, fontSize: 18}}>
              SIGN IN
            </Text>
    <Text style={{color : 'red'}}>{this.state.error_message}</Text>
            <Item style={[styles.ItemContainer, {marginTop: 30}]} rounded>
              <Icon style={styles.IconStyle} name="school" />
              <Input
                onChangeText={username => this.setState({username : username})}
                placeholder="Username"
              />
            </Item>

            <Item style={[styles.ItemContainer, {marginTop: 30}]} rounded>
              <Icon style={styles.IconStyle} name="lock" />
              <Input
                secureTextEntry = {true}
                onChangeText={(password) => this.setState({password})}
                placeholder="Password"
              />
            </Item>

            <TouchableOpacity style={styles.button}
            >
              <Button 
              onPress = {this.submitRequest}
              color="#3C40C6" title="SIGN IN" />
            </TouchableOpacity>

            <Text style={{color: '#696969', marginTop: 50, fontSize: 11}}>
              NEW TO PETCARE?
            </Text>
            <TouchableOpacity
            onPress = {() => this.props.navigation.navigate('Auth_register')}
            >
            <Text style={{color: '#696969', marginTop: 5, fontSize: 13}}>
              SIGN UP NOW
            </Text>
            </TouchableOpacity>
           
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: '#F4F5F7',
    alignSelf: 'center',
    elevation: 1,
    alignItems: 'center',
  },

  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  ItemContainer: {
    width: Dimensions.get('window').width * 0.85 - 30,
  },

  IconStyle: {
    fontSize: 20,
    marginLeft: 10,
  },

  button: {
    marginTop: 50,
    shadowColor: 'rgba(0, 0, 0, 10)',
    shadowOpacity: 1,
    elevation: 25,
  },
});

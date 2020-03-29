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
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Images from '../constants/Images';
import {Input, Item} from 'native-base';

export default class Auth_register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }

  submitRequest = () => {
    this.props.navigation.navigate('Profile')
    // await axios.post('http://192.168.43.48:8000/auth/register/', {
    //   username: this.state.username,
    //   password: this.state.password,
    //   email: this.state.email,
    // })
    // .then(res => res.json())
    // .then(this.props.navigation.navigate('Profile'))
    // .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={{flex : 1, justifyContent : 'center', alignItems :'center'}}>
        <StatusBar hidden/>
        <ImageBackground
          style={styles.imageBackground}
          source={Images.RegisterBackground}>
            <View style={styles.registerContainer}>
              <Text style={{color : '#696969', margin : 10}}>Sign up the classic way</Text>
              <Item 
              style={[styles.ItemContainer, {marginTop : 30}]}
              rounded>
                <Icon style={styles.IconStyle} 
                name = 'school'/>
                <Input
                onChangeText = {username => this.setState({username})}
                placeholder = 'Username' />
              </Item>

              <Item 
              style={[styles.ItemContainer, {marginTop : 30}]}
              rounded>
                <Icon style={styles.IconStyle} 
                name = 'email'/>
                <Input
                keyboardType = 'email-address'
                onChangeText = {email => this.setState({email})}
                placeholder = 'Email' />
              </Item>

              <Item 
              style={[styles.ItemContainer, {marginTop : 30}]}
              rounded>
                <Icon style={styles.IconStyle} 
                name = 'lock'/>
                <Input
                secureTextEntry = {true}
                onChangeText = {password => this.setState({password})}
                placeholder = 'Password' />
              </Item>

              <TouchableOpacity style={styles.button}>
                <Button onPress={this.submitRequest} color='#3C40C6' title='Create Account'/>
              </TouchableOpacity>
  
              <Text style={{color : '#696969', marginTop : 50, fontSize : 11}}>ALREADY HAVE AN ACCOUNT?</Text>
              <TouchableOpacity
                onPress = {() => this.props.navigation.navigate('Auth_login')}
              >
              <Text style={{color : '#696969', marginTop : 5, fontSize : 13}}>LOGIN HERE</Text>
                
              </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer : {
    width : Dimensions.get('window').width * 0.85,
    height : Dimensions.get('window').height * 0.75,
    backgroundColor: "#F4F5F7", 
    alignSelf : 'center',
    elevation : 1,
    alignItems : 'center',
  },

  imageBackground : {
    width : '100%',
    height : '100%',
    justifyContent : 'center'
  },

  ItemContainer : {
    width : Dimensions.get('window').width * 0.85 - 30,
  },

  IconStyle : {
   fontSize : 20,
   marginLeft : 10
  },

  button : {
    marginTop : 50,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 10)',
    shadowOpacity: 1,
    elevation: 25,
  }

});

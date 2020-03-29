import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default class Logout extends React.Component {
  async componentDidMount() {
    await AsyncStorage.removeItem('token');
  }
  render() {
    return this.props.navigation.navigate('Auth_login');
  }
}

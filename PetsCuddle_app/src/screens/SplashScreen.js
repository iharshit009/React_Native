import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1800
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      var token = ''
      try{
        token = await AsyncStorage.getItem('token');
        if(token){
          this.props.navigation.navigate('Home');
        }
        else{
          this.props.navigation.navigate('Register')
        }
      }
      catch(error){
        console.log("Error fetching token");
      }
    }
  }

  render() {
    return (
      
        <ImageBackground source={require('../img/splash.jpg')}
        style={{width: '100%', height: '100%'}}>
            <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>
                Pet Care
            </Text>
            <Text style={{color : 'white', marginTop : 10}}>Delivering Pet Happiness At Your Door Step</Text>
            </View>
        </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom : 450
  },    
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
})

export default SplashScreen;
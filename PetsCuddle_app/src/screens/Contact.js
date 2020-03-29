import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Button} from 'native-base';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: '9424115955',
      msg: 'Hi Mom',
    };
  }
  sendOnWhatsApp = () => {
    let msg = this.state.msg;
    let mobile = this.state.mobile_no;
    if (mobile) {
      if (msg) {
        let url =
          'whatsapp://send?text=' +
          this.state.msg +
          '&phone=91' +
          this.state.mobile_no;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure Whatsapp installed on your device');
          });
      } else {
        alert('Please insert message to send');
      }
    } else {
      alert('Please insert mobile no');
    }
  };
  render() {
    return (
      <ImageBackground
        source={require('../img/gradient.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text
            style={{textAlign: 'center', fontSize: 22, paddingVertical: 30}}>
            Communication channel with Dr. Sachin Jain
          </Text>
          <TextInput
            value={this.state.mobile_no}
            onChangeText={mobile_no => this.setState({mobile_no})}
            placeholder={'Enter Mobile'}
            style={styles.input}
            keyboardType={'numeric'}
          />
          <TextInput
            value={this.state.msg}
            onChangeText={msg => this.setState({msg})}
            placeholder={'Enter message'}
            style={styles.input}
          />
          <View style={{marginTop: 30}}>
            <Button full block primary onPress={this.sendOnWhatsApp}>
              <Text style={{color: '#fff', fontFamily: 'serif', margin: 20}}>
                Send WhatsApp Message
              </Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    padding: 30,
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    margin: 20,
    backgroundColor: '#D3D3D3',
  },
});

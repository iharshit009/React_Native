import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form, Input, Button } from "native-base";
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import * as firebase from 'firebase';

export default class AddScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key3",
      amount : "",
    };
  }

  static navigationOptions = {
      title : 'Add Savings'
  }

  handleRequest = (saving_amount) => {
    firebase.database().ref('/notesharing/saving').set({
        saving_amount
    }).then((data) => {
        console.log('data', data)
    }).catch(err => console.log('Error', err));
    Alert.alert('Saving Amount Has been Added !');
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Input 
            keyboardType = 'number-pad'
            placeholder = 'Enter Amount'
            onChangeText = {(amount) => this.setState({amount : amount})}
            value = {this.state.amount}
            style={{marginTop : 35}}
            />
            <TouchableOpacity>
            <Button 
                dark block rounded
                style={{marginTop : 30}}
                onPress = {() => this.handleRequest(this.state.amount)}
            >
                <Text style={{color : 'white'}}>Submit</Text>
            </Button>
            </TouchableOpacity>
          </Form>
        </Content>
      </Container>
    );
  }
}
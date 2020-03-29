import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form, Input, Button, Item} from "native-base";
import {Text, View, ToastAndroid} from 'react-native';
import * as firebase from 'firebase';

export default class RemoveScreen extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
      selected: "Mess",
      Mess : '',
      Snacks : '',
      Coffee : '',
      Other : '',
      Debt : '',
      Lent : '',
      expense_amt : 0,
    };
  }

  static navigationOptions = {
      title : 'Expenses'
  }

  onValueChange1 = (value) => {
    this.setState({
      selected : value
    });
  }

  handleRequest = (amount) => {
      const type = this.state.selected;
      firebase.database().ref(`/notesharing/${type}`).set({
           amount
      })
      ToastAndroid.show(amount + ' added to ' + type + ' !', ToastAndroid.showWithGravity);
      this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item picker>
            <Picker
              mode="dropdown"
              style={{marginTop : 20}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange1}
            >
              <Picker.Item label="Mess" value="Mess" />
              <Picker.Item label="Snacks" value="Snacks" />
              <Picker.Item label="Coffee" value="Coffee" />
              <Picker.Item label="Debt" value="Debt" />
              <Picker.Item label="Lent" value="Lent" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
            </Item>

            <Input
            keyboardType = 'number-pad'
            placeholder = 'Enter your Amount'
            onChangeText = {(amt) => this.setState({expense_amt : amt})}
            style={{marginTop : 5}}
            />

            <Button 
            full block rounded dark
            onPress = {() => this.handleRequest(this.state.expense_amt)}
            style={{marginTop : 30}}
            ><Text style={{color:'white'}}>Submit</Text></Button>

          </Form>
        </Content>
      </Container>
    );
  }
}
import React from 'react';
import {View, Text, Alert, Keyboard, TouchableWithoutFeedback, ScrollView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class AddNewContactScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fname : "",
      lname : "",
      phone : "",
      email : "",
      address : "",
    }
  }

  static navigationOptions = {
    title : "Contact App"
  }

  saveContact = async () => {
    if(
      this.state.fname !== "" &&
      this.state.lname !== "" &&
      this.state.phone !== "" &&
      this.state.email !== "" &&
      this.state.address !== ""
    ){
        var contact = {
          fname : this.state.fname,
          lname : this.state.lname,
          phone : this.state.phone,
          email : this.state.email,
          address : this.state.address,
        }

        await AsyncStorage.setItem(Date.now().toString(),
        JSON.stringify(contact)
        )
        .then(() => {
          this.props.navigation.goBack()
        })
        .catch(error => {
          console.log(error)
        })
    }
    else{
      Alert.alert("All fields are required !");
    }
  }

  render(){
    return(

        <TouchableWithoutFeedback
          onPress = {() => {
            Keyboard.dismiss
          }}
        >
          <ScrollView>
            <Form>
              <Item style={styles.inputItem}>
                <Label>First Name : </Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={ fname => this.setState({fname : fname})}
                />
              </Item>
              <Item style={styles.inputItem}>
                <Label>Last Name : </Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={ lname => this.setState({lname : lname})}
                />
              </Item>

              <Item style={styles.inputItem}>
                <Label>Phone : </Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="number-pad"
                  onChangeText={ phone => this.setState({phone : phone})}
                />
              </Item>

              <Item style={styles.inputItem}>
                <Label>Email : </Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={ email => this.setState({email : email})}
                />
              </Item>

              <Item style={styles.inputItem}>
                <Label>Address : </Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="default"
                  onChangeText={ address => this.setState({address : address})}
                />
              </Item>
            </Form>

            <Button
              style={styles.button}
              full
              onPress = {() => {
                this.saveContact();
              }}
            ><Text style={styles.buttonText}>
              Save
            </Text>
            </Button>
            <View style={styles.empty}></View>
          </ScrollView>
        </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    height: 500
  },
  inputItem: {
    margin: 10
  },
  button: {
    backgroundColor: "#B83227",
    marginTop: 40
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  empty: {
    height: 500,
    backgroundColor: "#FFF"
  }
});

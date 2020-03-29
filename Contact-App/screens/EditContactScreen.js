import React from 'react';
import {View, Text, TouchableWithoutFeedback, Keyboard, AsyncStorage, Alert, StyleSheet} from 'react-native';
import {Form, Item, Input, Label, Button} from 'native-base';

export default class EditContactScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fname : "",
      lname : '',
      phone : '',
      email : '',
      address : '',
      key : ''
    }
  }

  componentDidMount(){
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => {
      var key = this.props.navigation.getParam('key','');
      this.getContact(key);
    })
  } 

  getContact = async key => {
    await AsyncStorage.getItem(key)
    .then(contactJsonString => {
      var contact = JSON.parse(contactJsonString);
      contact['key'] = key;
      this.setState(contact);
    }
  )
    .catch(error => {
      console.log(error);
    })
  }

  updateContact = async key => {
      if(
        this.state.fname !== '' &&
        this.state.lname !== '' &&
        this.state.email !== '' &&
        this.state.address !== '' &&
        this.state.phone !== ''
      ){
        var contact = {
        fname : this.state.fname,
        lname : this.state.lname,
        address : this.state.address,
        email : this.state.email,
        phone: this.state.phone,
        }
        await AsyncStorage.mergeItem(key, JSON.stringify(contact))
        .then(() => {
          this.props.navigation.goBack();
        })
        .catch(error => {
          console.log(error);
        })
      }
  }

  static navigationOptions = {
    title : 'Edit Contact'
  };


  render(){
    return(
      <TouchableWithoutFeedback
      onPress = {() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Form>
            <Item style={styles.InputItem}>
              <Label>First Name : </Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  KeyboardType='default'
                  onChangeText={fname => this.setState({fname})}
                  value={
                    this.state.fname
                  }
              />
            </Item>
            <Item style={styles.InputItem}>
              <Label>Last Name : </Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  KeyboardType='default'
                  onChangeText={lname => this.setState({lname})}
                  value={
                    this.state.lname
                  }
              />
            </Item>
            <Item style={styles.InputItem}>
              <Label>Email : </Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  KeyboardType='email'
                  onChangeText={email => this.setState({email})}
                  value={
                    this.state.email
                  }
              />
            </Item>
            <Item style={styles.InputItem}>
              <Label>Phone : </Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  KeyboardType='number-pad'
                  onChangeText={phone => this.setState({phone})}
                  value={
                    this.state.phone
                  }
              />
            </Item>
            <Item style={styles.InputItem}>
              <Label>Address : </Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  KeyboardType='default'
                  onChangeText={addresss => this.setState({address})}
                  value={
                    this.state.address
                  }
              />
            </Item>
          </Form>
              <Button 
              full 
              rounded
              style={styles.button}
                onPress = {() =>  {
                  this.updateContact(this.state.key)
                }}
              >
                <Text style={styles.buttonText}>Update</Text>
              </Button>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10
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
  }
});

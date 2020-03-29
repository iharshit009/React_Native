import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { Container, Content, Form, Item, Input, Button, Icon} from 'native-base';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA2c5fhaXrjcYhpv4u2TDio-IXB9Pm00Wk",
  authDomain: "notessharing.firebaseapp.com",
  databaseURL: "https://notessharing.firebaseio.com",
  projectId: "notessharing",
  storageBucket: "notessharing.appspot.com",
  messagingSenderId: "445296809870",
  appId: "1:445296809870:web:67cd775ee470af710176df"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
        }
    }

    static navigationOptions = {
        title : "Login",
    }

    loginUser = () => {
      try{
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => 
        this.props.navigation.navigate('Home'));
      }
      catch(error){
          console.log(error.toString());
      }
    }

    signUpUser = () => {
        try{
            if (this.state.password < 6){
                Alert.alert('The password length is less than 6');
                return ;
            }
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.props.navigation.navigate('Home')
        }
        catch(error){
            console.log(error.toString());
        }
    }

    render(){
        return(
            <Container style={styles.container}>
            <Content>
              <Form>
                <Item stackedLabel>
                  <Input 
                  onChangeText = {email => this.setState({email : email})}
                  placeholder="Username"
                  value = {this.state.email} />
                </Item>
                <Item stackedLabel>
                  <Input 
                  secureTextEntry
                  placeholder="Password" 
                  onChangeText = {password => this.setState({password : password})}
                  value = {this.state.password}/>
                </Item>
              </Form>

              <Button 
              block
              dark
              onPress = {() => this.loginUser()}
              style={{marginTop : 30}}
              ><Text style={{color:'white', textAlign : 'center', alignItems : 'center'}}>Log In</Text></Button>

              <Button 
              block
              dark
              onPress = {() => this.signUpUser()}
              style={{marginTop : 20}}
              ><Text style={{color:'white',textAlign : 'center', alignItems : 'center'}}>Sign In</Text></Button>
             </Content>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : '#fff',
    }
})
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking, Platform, Alert, AsyncStorage, StyleSheet} from 'react-native';
import {Card, CardItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ViewContactScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      fname : "DummyText",
      lname : "DummyText",
      phone : "DummyText",
      address : "DummyText",
      key : "DummyText"
    }
  }

  static navigationOptions = {
    title : "View Contact" 
  }

  componentDidMount(){
    const {navigation} = this.props;
    navigation.addListener("willFocus", ()=>{
      var key = this.props.navigation.getParam("key","");
      this.getContact(key);  
    })
  }

  getContact = async key => {
    await AsyncStorage.getItem(key)
    .then(contactjsonString => {
      var contact = JSON.parse(contactjsonString);
      contact['key'] = key;
      this.setState(contact)
    })
    .catch(error => {console.log(error)})
  };

  callAction = phone => {
    let phoneNumber = phone;
        if(Platform.OS !== "android"){
          phoneNumber = `telpromt:${phoneNumber}`;
        }
        else{
          phoneNumber = `tel:${phone}`;
        }
    
    Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if(!supported){
        Alert.alert("Phone Number is not available");
      }else{
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(error => {
      console.log(error);
    })
  };

  smsAction = phone => {
    let phoneNumber = phone;
    phoneNumber = `sms:${phone}`;
    Linking.canOpenURL(phoneNumber).then(
      supported => {
        if(!supported){
            Alert.alert("Phone Number is not available");
        }
        else{
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  editContact = (key) => {
    this.props.navigation.navigate('Edit', {key:key});
  }

  deleteContact = key => {
    Alert.alert(
      "Delete Contact ? ",
      `${this.state.fname} ${this.state.lname}`,
      [
        {
          text : "Cancel", 
          onPress : () =>  console.log("Cancel Tapped !")
        },
        {
          text : 'OK', 
          onPress : async () => {
            await AsyncStorage.removeItem(key)
            .then(() => {
              this.props.navigation.goBack();
            })
            .catch(error => {
              console.log(error);
            });
          }
        }
      ]      
    )
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.contactIconContainer}>
          <Text style={styles.contactIcon}>{this.state.fname[0].toUpperCase()}</Text>
          <View style={styles.nameContainer}>
          <Text style={styles.name}>{this.state.fname} {this.state.lname}</Text>
        </View>
      </View>
       
        <View style={styles.infoContainer}>


          <Card>
            <CardItem bordered>
              <Text style={styles.infoText}>Phone</Text>
            </CardItem>

            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.phone}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Text style={styles.infoText}>Email</Text>
            </CardItem>

            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.email}</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Text style={styles.infoText}>Address</Text>
            </CardItem>

            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.address}</Text>
            </CardItem>
          </Card>
        </View>
        <Card style = {styles.actionContainer}>
          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress = {() => {
                this.smsAction(this.state.phone);
              }}
            >
              <Icon 
                name='envelope-open'
                size={50}
                color="#B83227"
              />
            </TouchableOpacity>
          </CardItem>

          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress = {() => {
                this.callAction(this.state.phone);
              }}
            >
              <Icon 
                name='phone'
                size={50}
                color="#B83227"
              />
            </TouchableOpacity>
          </CardItem>
        </Card>
        <Card style = {styles.actionContainer}>
          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress = {() => {
                this.editContact(this.state.key);
              }}
            >
              <Icon 
                name='edit'
                size={50}
                color="#B83227"
              />
            </TouchableOpacity>
          </CardItem>

          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress = {() => {
                this.deleteContact(this.state.key);
              }}
            >
              <Icon 
                name='trash'
                size={50}
                color="#B83227"
              />
            </TouchableOpacity>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contactIconContainer: {
    height: 200,
    backgroundColor: "#B83227",
    alignItems: "center",
    justifyContent: "center"
  },
  contactIcon: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#fff"
  },
  nameContainer: {
    width: "100%",
    height: 70,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  },
  name: {
    fontSize: 24,
    color: "#000",
    fontWeight: "900"
  },
  infoText: {
    fontSize: 18,
    fontWeight: "300"
  },
  actionContainer: {
    flexDirection: "row"
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#B83227",
    fontWeight: "900"
  },
  infoContainer:{
    flexDirection : "column",
  }
});

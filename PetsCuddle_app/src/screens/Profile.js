import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Form, Item, Input, Label, Card, CardItem, Button} from 'native-base';

export default class Profile extends React.Component {

   constructor(props){
       super(props);
       this.state = {
           pincode : '',
           house : '',
           road : '',
           alter_phone : ''
       }
   }

  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      height: 80,
    },
  };

  render() {
    return (
      <View>
        <Text style={styles.heading}>Complete Your Profile</Text>
        <Form>
          <Item stackedLabel>
            <Label>Pincode*</Label>
            <Input onChangeText = {(text) => this.setState({pincode : text})} keyboardType="number-pad" />
          </Item>
          <Item stackedLabel>
            <Label>House No., Building Name*</Label>
            <Input onChangeText = {(text) => this.setState({house : text})} />
          </Item>
          <Item stackedLabel>
            <Label>Road Name, Area, Colony*</Label>
            <Input onChangeText = {(text) => this.setState({road : text})}/>
          </Item>
          <Item stackedLabel last>
            <Label>Alternate Phone Number(Optional)</Label>
            <Input onChangeText = {(text) => this.setState({alter_phone : text})} keyboardType="number-pad" />
          </Item>
          <Button
            style={{marginTop: 40, marginLeft: 15, marginRight: 15}}
            block
            danger>
            <Text style={{color: '#fff'}}>Save</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 15,
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#a9a9a9',
  },
});

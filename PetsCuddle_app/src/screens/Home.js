import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {Container, Card, CardItem, Text} from 'native-base';
import CustomHeader from '../components/CustomHeader';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      imageHeight : Math.round(Dimensions.get('window').height / 3) - 60
    }
  }

  render() {
    return (
      <ScrollView>
      <Container style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar backgroundColor="#fff" />
        <CustomHeader navigation={this.props.navigation} title="Home" />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Treatment')}
          style={{flex : 1}}>
          <Card>
            <CardItem cardBody>
              <Image
                source={require('../img/treatment_image.jpg')}
                style={{height: this.state.imageHeight, width: null, flex: 1}}
              />
            </CardItem>
            <View style={{alignItems: 'center'}}>
              <Text>TREATMENT</Text>
            </View>
          </Card>
        </TouchableOpacity>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PetFood')}>
              <Card>
                <CardItem cardBody>
                  <Image
                    source={require('../img/petcare.jpg')}
                    style={{flex: 1, height : this.state.imageHeight, width:null}}
                  />
                </CardItem>
                <View style={{alignItems: 'center'}}>
                  <Text>Pet Care</Text>
                </View>
              </Card>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PetAccessories')}>
              <Card>
                <CardItem cardBody>
                  <Image
                    source={require('../img/petaccessories.jpg')}
                    style={{flex: 1, height : this.state.imageHeight, width:null}}
                  />
                </CardItem>
                <View style={{alignItems: 'center'}}>
                  <Text>Pet Accessories</Text>
                </View>
              </Card>
              </TouchableOpacity>
            </View>
          </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Treatment')}
          style={{flex:1}}>
          <Card>
            <CardItem cardBody>
              <Image
                source={require('../img/petparlor.jpg')}
                style={{height: this.state.imageHeight, width: null, flex: 1}}
              />
            </CardItem>
            <View style={{alignItems: 'center'}}>
              <Text>PET PARLOUR</Text>
            </View>
          </Card>
        </TouchableOpacity>
      </Container>
      </ScrollView>
    );
  }
}

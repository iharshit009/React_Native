import React from 'react';
import {Text, View, Image} from 'react-native';
import {
  Card,
  CardItem,
  Button,
  H1,
  Left,
  Right,
  Body,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

export default class DetailProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    var data = this.props.navigation.getParam('data');
    this.setState({
      data: data,
    });
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('data').name,
    };
  };

  render() {
    return (
      <ScrollView>
        <Card>
          <CardItem cardBody>
            <Image
              source={{uri: this.state.data.image}}
              style={{height: 350, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button bordered dark>
                <H1 style={{margin: 5}}>{this.state.data.name}</H1>
              </Button>
            </Left>
            <Right>
              <Button bordered success>
                <H1 style={{margin: 5}}>Rs. {this.state.data.price}</H1>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Button
        onPress = {() => this.props.navigation.navigate('AddSubscription')}
        full warning block style={{margin: 10}}>
          <Text style={{color: 'white', fontSize: 20}}>Buy</Text>
        </Button>
        <Button
          full
          danger
          block
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5,
            marginBottom: 10,
          }}>
          <Icon style={{color: 'white', fontSize: 20}} name="cart-plus">
            <Text style={{color: 'white', fontSize: 20}}> Add to Cart</Text>
          </Icon>
        </Button>
        <Card>
          <CardItem>
            <Body>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontFamily: 'Arial',
                  marginBottom: 15,
                }}>
                About this Item
              </Text>
              <Text style={{fontSize: 16}}>{this.state.data.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

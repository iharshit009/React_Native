import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Left,
  Right,
  H1,
} from 'native-base';
import {Text, Image, ScrollView} from 'react-native';
import axios from 'axios';
import Search from '../components/Search';
import CustomHeader from '../components/CustomHeader';


export default class PetAccessories extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    await axios('http://192.168.43.48:8000/api/products/petaccessories')
      .then(res =>
        this.setState({
          data: res.data,
        }),
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ScrollView>
        <CustomHeader navigation={this.props.navigation} />
      <Search />
    {this.state.data.map(data => (
        <TouchableHighlight
        onPress={()=> this.props.navigation.navigate('DetailProduct', {
          data : data
        })}
        >
       <Content>
       <Card>
         <CardItem cardBody>
           <Image 
           source={{uri: data.image}} style={{height: 350, width: null, flex: 1}}/>
         </CardItem>
         <CardItem>
           <Left>
             <Button bordered dark>
               <H1 style={{margin : 5}}>{data.name}</H1>
             </Button>
           </Left>
           <Right>
               <Button bordered success >
             <H1 style={{margin : 5}}>Rs. {data.price}</H1>
             </Button>
           </Right>
         </CardItem>
       </Card>
     </Content>
     </TouchableHighlight>
    ))}
  </ScrollView> 
    );
  }
}

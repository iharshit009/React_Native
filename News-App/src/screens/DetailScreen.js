import React,{Component} from 'React';
import { Image, View, Alert} from 'react-native';
import { getArticles } from '../services/news';
import { WebView } from 'react-native-webview';
import {Container, Header, Body, Title} from 'native-base';

export default class DetailScreen extends Component{

  static navigationOptions = {
    title : "NEWS DETAIL"
  }

  constructor(props){
    super(props);
  }

  render(){
    const {navigation} = this.props;
    const url = navigation.getParam('url');
    return(
    <Container>
      <Header>
        <Body>
          <Title children="NEWS DETAIL"/>
        </Body>
      </Header>

      <WebView
        source={{uri:url}}
        style={{marginTop : 20}}
      />
    </Container>
    );
  }

}

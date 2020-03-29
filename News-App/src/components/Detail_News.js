import React,{Component} from 'React';
import { Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Detail_News extends Component{

  static navigationOptions = {
    title : "HEY :)"
  }

  constructor(props){
    super(props);
  }

  render(){
    const {navigation} = this.props;
    const description = navigation.getParam('desc','Default Description');
    const img_src = navigation.getParam('img_src');
    return(
      <Container>
        <Header></Header>
        <Content>
          <Card>
            <CardItem>
              <CardItem cardBody>
              //  <Image source = {{uri:img_src}} style = {{height:200, width:null, flex:1}}/>
              </CardItem>
              <CardItem>
                <Body>
              //   <Text>{description}</Text>
                </Body>
              </CardItem>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }

}

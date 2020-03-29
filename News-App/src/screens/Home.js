import React, {Component} from 'react';
import {Text, View, ActivityIndicator, Alert, Share} from 'react-native';
import {Container, Header, Body, Title, Content, List, ListItem, Button,Tab, Tabs, ScrollableTab, Icon} from 'native-base';
import ListDataItem from '../components/list_item';
import { getArticles } from '../services/news';
import DetailScreen from '../screens/DetailScreen';


export default class Home extends Component{

  constructor(props){
    super(props);
    this._shareMessage=this._shareMessage.bind(this);

    this.state = {
      isLoading : true,
      data : null,
      isError : false,
      category:'general',
    }
  }

  componentDidMount() {
      getArticles().then(data => {
          this.setState({
              isLoading: false,
              data: data,

          })
      }, error => {
          Alert.alert("Error", "Something happened, please try again")
      })
  }


  _shareMessage(url){

    Share.share({
      message:url,

    })
  }

  render() {

      const {navigate} = this.props.navigation;
         let view = this.state.isLoading ? (
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
                 <Text style={{ marginTop: 8 }} children="Please wait..." />
             </View>
         ) : (
                 <List
                     dataArray={this.state.data}
                     renderRow={(item) => {
                         return (
                           <View>
                            <ListItem>
                                <ListDataItem data={item} />
                             </ListItem>
                             <View style={{flex:1, flexDirection: 'row'}}>
                            <Button full  style = {{flex:5}}  onPress={() => navigate('DetailScreen', {
                              url:item.url
                            })}
                            >
                              <Text style={{color:'#fff'}}>Read Full News</Text>
                            </Button>
                            <Button bordered style = {{flex:1}}  onPress={()=>this._shareMessage(item.url)}><Icon name='paper-plane'/></Button>
                            </View>
                           </View>
                         )
                     }} />

             )
         return (
             <Container>
                 <Header>
                     <Body>
                         <Title children="RITIK NEWS APP" />
                     </Body>
                 </Header>
                 <Tabs renderTabBar={()=> <ScrollableTab />}>
                   <Tab heading="General">
                   <Content
                       contentContainerStyle={{ flex: 1, backgroundColor: '#fff' }}
                       padder={false}>
                           {view}
                   </Content>
                 </Tab>
                 </Tabs>

             </Container>
         )
     }
 }

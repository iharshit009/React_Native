import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon, Button} from 'native-base';
import PieScreen from './PieScreen';
import { Container } from 'native-base';

export default class Home extends React.Component{

   constructor(props){
       super(props);
   }    

    static navigationOptions = {
        title : 'Home',
    }

    render(){
        return(
            <ScrollView>
           <Container>
             <View style={{flexDirection : 'row', justifyContent : 'center', marginTop : 40}}>
                 <Button dark bordered
                    onPress = {() => this.props.navigation.navigate('AddScreen')}
                 ><Text style={{minWidth : 70, textAlign : 'center', fontSize : 30}}>+</Text></Button>
                 <Button dark bordered
                 onPress = {() => this.props.navigation.navigate('RemoveScreen')}>
                     <Text style={{minWidth : 70,marginLeft : 5, marginRight : 5, textAlign : 'center', fontSize : 50, marginBottom : 5}}>-</Text>
                </Button>
             </View>
            <View style={{flexDirection : 'row', justifyContent : "center", marginBottom : 20}}>            
                    <Button 
                        bordered dark block
                        style={{marginTop : 30,width : 150}}
                        onPress = {() => this.props.navigation.navigate('ChatScr')}
                    >
                        <Text style={{fontSize : 22, fontFamily : 'serif'}}>Chat</Text>
                    </Button>
            </View>
            <PieScreen />
            
     </Container>
     <View style={{height : 115}}></View>
     </ScrollView>
        
        )
    }
}

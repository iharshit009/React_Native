import React from 'react'
import * as firebase from 'firebase';
import {ActivityIndicator, Alert, ToastAndroid, Dimensions, ScrollView} from 'react-native';
import { PieChart, LineChart } from 'react-native-chart-kit'
import { Container } from 'native-base';


export default class PieScreen extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {
            saving_amount : 0,
            Mess : 0,
            Coffee : 0,
            Other : 0,
            Snacks : 0,
            Lent : 0,
            Debt : 0,
            loading : true,
        }
    }

     async componentDidMount(){
        await firebase.database().ref('notesharing').on('value', snapshot => {
            this.setState({
                saving_amount : snapshot.val().saving.saving_amount,
                Mess : snapshot.val().Mess.amount,
                Coffee : snapshot.val().Coffee.amount,
                Snacks : snapshot.val().Snacks.amount,
                Other : snapshot.val().Other.amount,
                Lent : snapshot.val().Lent.amount,
                Debt : snapshot.val().Debt.amount,
                loading : false,
            })
        });
    }
 
    render() {

        var amount = parseInt(this.state.saving_amount);
        var Snacks = parseInt(this.state.Snacks);
        var Coffee = parseInt(this.state.Coffee);
        var Other = parseInt(this.state.Other);
        var Mess = parseInt(this.state.Mess);
        var Lent = parseInt(this.state.Lent);
        var Debt = parseInt(this.state.Debt);
        var total = amount + Snacks + Coffee + Mess + Other + Lent + Debt;

        
        const data = [
            { name: 'Savings', population: amount, color: '#4cd137', legendFontColor: '#7F7F7F', legendFontSize: 15.5 },
            { name: 'Coffee', population: Coffee, color: '#00a8ff', legendFontColor: '#7F7F7F', legendFontSize: 15.5 },
            { name: 'Mess', population: Mess, color: '#f6b93b', legendFontColor: '#7F7F7F', legendFontSize: 15.5 },
            { name: 'Snacks', population: Snacks, color: '#e84118', legendFontColor: '#7F7F7F', legendFontSize: 15.5 },
            { name: 'Other', population: Other, color: '#353b48', legendFontColor: '#7F7F7F', legendFontSize: 15.5 },
            { name: 'Lent', population: Lent, color: '#9b59b6', legendFontColor: '#7F7F7F', legendFontSize: 15.5 },
            { name: 'Debt', population: Debt, color: '#F62459', legendFontColor: '#7F7F7F', legendFontSize: 15.5 },


        ]

        if(this.state.loading){
            return(
            <ActivityIndicator  
            color = '#bc2b78'
            size = 'large'/>
            )
        }
        else{
        return (
            <Container>
            <PieChart
                data={data}
                width={Dimensions.get('window').width}
                height={260}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255,255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16
                    }
                  }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="20"
                absolute
            />
          
            <LineChart 
            style={{marginTop : 40}}
             data={{
                labels: ['Savings', 'Coffee', 'Mess', 'Snacks', 'Other', 'Lent', 'Debt'],
                datasets: [{
                  data: [
                    (this.state.saving_amount / total) * 100,
                    (this.state.Coffee / total) * 100,
                    (this.state.Mess / total) * 100,
                    (this.state.Snacks / total) * 100,
                    (this.state.Other / total) * 100,
                    (this.state.Lent / total) * 100,
                    (this.state.Debt / total) * 100,
                  ]
                }]
              }}
            width={Dimensions.get('window').width}
            height={275}
            verticalLabelRotation={30}
            chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: 'black',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 50,
                }
              }}
              bezier
            />

            </Container>
        )}
    }
 
}
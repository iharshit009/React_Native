import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Filter = ({navigation}) => (
  <View style={{flexDirection: 'row', marginTop: 10, borderBottomWidth : 0.5, borderBottomColor : '#d3d3d3', paddingBottom : 10}}>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#d3d3d3',
      }}>
          <TouchableOpacity onPress={() => navigation.navigate('Pet Care')}>
      <Text style={{fontSize: 20}}>
        <Icon name="cookie" size={19} />  Food
      </Text>
      </TouchableOpacity>
    </View>
    <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Pet Medicine')}>
      <Text style={{fontSize: 20}}>
        <Icon name="basket" size={19} />  Medicine
      </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Filter;

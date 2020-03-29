import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomHeader = ({navigation}) => (
  <View style={styles.container}>
      <Icon
        style={{padding: 15, marginTop: 20}}
        name="menufold"
        size={28}
        color="#000"
        onPress={() => navigation.openDrawer()}
      />
    <Text
      style={{marginTop: 33, fontSize: 23, marginLeft: 10, fontWeight: 'bold'}}>
      {navigation.state.routeName}
    </Text>
  </View>
);

const styles = StyleSheet.create({
    container : {
    height : 80,
    flexDirection: 'row',
    },
})

export default CustomHeader;

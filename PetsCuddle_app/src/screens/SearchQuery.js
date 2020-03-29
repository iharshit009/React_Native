import React from 'react';
import {Text, StyleSheet, View,
   Dimensions, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SearchQuery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fulldata: [],
    };
  }

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({fulldata: newData});
  };

   componentDidMount() {
    const data = this.props.navigation.getParam('fulldata');
    this.setState({
      fulldata: data,
    });
    this.arrayholder = data;
  }

  render() {
    return (
      <ScrollView>
        <TextInput
          style={styles.inputbox}
          placeholder="Search"
          underlineColorAndroid="transparent"
          onChangeText = {(text) => this.searchFilterFunction(text)}
        />
         <View style={{marginTop: 10}}>
          {this.state.fulldata.map(data => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailProduct', {
                  data: data,
                })}
              >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingTop: 5,
                  paddingBottom: 8,
                  borderBottomColor: '#d3d3d3',
                  borderBottomWidth: 1,
                }}>
                <View style={{flex: 0.3, marginLeft: 10}}>
                  <Image
                    source={{uri: data.image}}
                    style={{height: 150, width: null}}
                  />
                </View>
                <View style={{flex: 0.7, margin: 20}}>
                  <Text style={{fontSize: 22, marginBottom: 7}}>
                    {data.name}
                  </Text>
                  <Text numberOfLines={2} style={{marginBottom: 15}}>
                    {data.description}
                  </Text>
                  <Icon name="rupee" size={18}>
                    <Text style={{fontWeight: 'bold'}}>{data.price}</Text>
                  </Icon>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

  </ScrollView>

    )}
}

const styles = StyleSheet.create({
  inputbox: {
    borderWidth: 2,
    borderColor: '#ee7600',
    height: 55,
    padding: 10,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
  },
});

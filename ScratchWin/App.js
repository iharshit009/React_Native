import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Button } from "native-base";

import { FontAwesome } from "@expo/vector-icons";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    randomNumber         = ""
    };
  }
  componentDidMount() {
    //TODO generate random number
  }
  generateRandomNumber = () => {
    // TODO
    let randomNumber = Math.floor(Math.random() * 25);
  };
  scratchItem = itemNumber => {
    //decide lucky or unlucky
    if (this.state.randomNumber === itemNumber) {
      itemArray[itemNumber] = "lucky";
    } else {
      itemArray[itemNumber] = "unlucky";
    }
    this.forceUpdate();
  };

  scratchItemIcon = itemNumber => {
    //find right icon
    if (item[itemNumber] === "lucky") {
      return "dollar";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o";
    }
    return "circle";
  };

  scratchItemColor = () => {
    // find right color
  };

  showAllItem = () => {
    //reveal all icons
  };

  resetGame = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Scratch and Win</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});



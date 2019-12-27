import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: ""
    };
  }

  drawItem = itemNumber => {
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross;
      this.setState(
        {
          isCross: !itemArray[itemNumber]
        },
        () => {}
      );
    }
    // TODO: deicde what to draw circle or crosss or default
  };

  chosseItemIcon = () => {
    //TODO:  chose apporopriate Icon
    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemArray] ? "cross" :"circle";

    }
    return "pencil"
  };

  chooseItemColor = () => {
    //choose color for icon

    if (itemArray[itemNumber] !== "empty") {
      return itemArray[itemArray] ? "red" :"green";

    }
    return "pencil"
  };

  resetGame = () => {
    // reset all values and states
    itemArray.fill("empty")
    this.setState({
      winMessage : ""
    })
    this.forceUpdate()
  };

  winGame = () => {
    //decide /check the winner
  };
  render() {
    return <View style={StyleSheet.container} />;
  }
}

const styles = StylesSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center"
  }
});

import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class NameText extends Component {
  render() {
    return <Text style={styles.textStyle}> This is {this.props.name} ?</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: "black",
    backgroundColor: "yellow",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 50
  }
});

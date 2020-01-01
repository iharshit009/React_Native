import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time_lap: null,
      minutes: "00",
      seconds: "00"
    };
  }

  onPress = () => {
    let timer_lap = setInterval(() => {
      var num = (Number(this.state.seconds) + 1).toString(),
        count = this.state.minutes;

      if (Number(this.state.seconds) == 59) {
        count = (Number(this.state.minutes) + 1).toString();
        num = "00";
      }

      this.setState({
        minutes: count.length == 1 ? "0" + count : count,
        seconds: num.length == 1 ? "0" + num : num
      });
    }, 1000);
    this.setState({ timer_lap });
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            Count : {this.state.count !== 0 ? this.state.count : null}
            {"\n"}
            Time :{this.state.minutes} : {this.state.seconds}
            {"\n"}
            Speed :{" "}
            {(
              this.state.count /
              (this.state.minutes * 60 + this.state.seconds)
            ).toFixed(2)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Touch Here </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text> Touch Here </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.button} onPress={this.onPress}>
              <Text> Touch Here </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    width: "50%"
  },
  countContainer: {
    alignItems: "center"
  },
  countText: {
    backgroundColor: "yellow",
    color: "black",
    fontSize: 30,
    marginTop: 30
  }
});

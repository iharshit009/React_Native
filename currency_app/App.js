import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  BITCOIN: 0.000000041
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === " ") {
      Alert.alert("please enter some value");
    }

    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          <View style={styles.input}>
            <TextInput
              style={styles.input}
              selectionColor="#FFF"
              keyboardType="numeric"
              placeholder="enter any value"
              value={this.state.inputValue}
              onChangeText={inputValue => this.setState({ inputValue })}
            />
          </View>
          <View style={styles.converterbuttoncontainer}>
            <TouchableOpacity
              onPress={() => this.buttonPressed("DOLLAR")}
              style={styles.converterbutton}
            >
              <Text style={styles.converterbuttontext}>$</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  screenview: {
    flex: 1,
    margin: 20
  },
  result: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#0A79DE"
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },
  input: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE"
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DE",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },
  converterbuttontext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});

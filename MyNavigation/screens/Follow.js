import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Follow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You can follow these friends</Text>
        <Button
          title="Go to Home page"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
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

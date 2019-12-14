import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "#2475B0" }} />
      <View style={{ flex: 1, backgroundColor: "#10A881" }} />
      <View style={{ flex: 2, backgroundColor: "#E74292" }} />
    </View>
  );
}

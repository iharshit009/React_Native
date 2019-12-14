import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems:"stretch",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50
      }}
    >
      <View style={{ width: 50, height: 50, backgroundColor: "#2475B0" }} />
      <View style={{ width: 100, height: 100, backgroundColor: "#10A881" }} />
      <View style={{ width: 150, height: 150, backgroundColor: "#E74292" }} />
    </View>
  );
}

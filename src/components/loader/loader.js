import React, { Component } from "react";
import { ActivityIndicator, View } from "react-native";

export default class Loader extends Component {

  render() {
    return (
      <View style={{ position: "absolute", flex: 1, zIndex: 9999, alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "#ffffffb8" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}
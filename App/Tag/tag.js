import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default class Tag extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 40,
          minWidth: 60,
          padding: 10,
          backgroundColor: "white",
          borderColor: "#dddddd",
          borderWidth: 1,
          borderRadius: 5,
          marginRight: 5
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 14 }}>
          {this.props.name}{" "}
        </Text>
      </View>
    );
  }
}

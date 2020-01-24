import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Infant extends Component {
  state = {
    count: 0
  };

  formatCount() {
    const { count } = this.state;
    return count;
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ count: 1 });
    }
  };

  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, marginTop: 50 }}> Infant </Text>
          <View style={{ marginTop: 50, marginLeft: 155 }}>
            <Ionicons
              style={{ display: "flex" }}
              name="md-remove-circle-outline"
              color="red"
              size={30}
              onPress={() => this.handleDecrement()}
            />
          </View>
          <Text style={{ fontSize: 20, marginTop: 50, marginLeft: 20 }}>
            {this.formatCount()}+
          </Text>
          <View style={{ marginTop: 50, marginLeft: 20 }}>
            <Ionicons
              name="md-add-circle-outline"
              color="green"
              size={30}
              onPress={() => this.handleIncrement()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    margin: 20
  },
  titleText: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: "bold",
    paddingTop: 10
  }
});

import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class ChildrenCount extends Component {
  state = {
    value: this.props.counter.value
  };

  formatCount() {
    const { value } = this.state;
    return value;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 });
    } else {
      this.setState({ value: 1 });
    }
  };

  counters() {
    {
      const { countable } = this.props.counter.value;
      return countable;
    }
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, marginTop: 50 }}> Children </Text>
          <View style={{ marginTop: 50, marginLeft: 132 }}>
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
        <Text> {this.formatCount()} hi</Text>
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

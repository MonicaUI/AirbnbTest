import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Adult from "./adult";
import Infant from "./infant";
import AdultCount from "./adultCount";

export default class Guests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  making_result_call = () => {
    // this.props.navigation.state.params.returnGuest(this.state.value);
    // this.props.navigation.goBack();
    this.props.navigation.navigate("SignIn");
  };
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.titleText}>Guests</Text>
        <Adult />
        <Infant />

        <View style={{ marginTop: 150 }}>
          <Button
            title="See Results"
            onPress={() => this.making_result_call()}
          />
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

import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import Calendar from "./calendar";
import RangeDatepicker from "./RangeDatePicker/index";

export default class StartDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.selectedStartDate
    };
  }

  render() {
    return (
      <View>
        <Text> HI {this.state.value} </Text>
      </View>
    );
  }
}

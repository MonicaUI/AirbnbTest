import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AdultCount from "./adultCount";
import ChildrenCount from "./childrenCount";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";

//import DateTimePicker from "react-native-modal-datetime-picker";
//const { height, width } = Dimensions.get("window");
let date_pick;

const initialState = {
  value: 0
};

const reducer = (state = initialState) => {
  return state;
};
const store = createStore(reducer);

export default class Adult extends Component {
  state = {
    counter: [{ id: 0, value: 0 }]
  };

  render() {
    return (
      <View>
        {this.state.counter.map(counter => (
          <AdultCount key={counter.id} counter={counter} />
        ))}
        {this.state.counter.map(counter => (
          <ChildrenCount key={counter.id} counter={counter} />
        ))}
      </View>
    );
  }
}

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
//import RangeDatepicker from "./RangeDatePicker/index";
import StartDate from "./startDate";

export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
      startDate: ""
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === "END_DATE") {
      this.setState({
        selectedEndDate: date
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null
      });
    }
  }

  making_save_call = async () => {
    this.props.navigation.navigate("SignIn");
  };

  showData = async () => {
    let selectedDates = await AsyncStorage.getItem("selectedDates");
    let d = selectedDates;
  };

  componentDidMount() {
    this.showData().then(selectedDates => {
      if (selectedDates) this.setState({ selectedDates: selectedDates });
    });
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = "2021-04-20";
    const startDate = selectedStartDate
      ? moment(selectedStartDate).format("ddd DD-MMM")
      : "Start Date";
    const endDate = selectedEndDate
      ? moment(selectedEndDate).format("ddd DD-MMM")
      : "End Date";

    const tagEndDate = selectedEndDate
      ? moment(selectedEndDate).format("DD MMM")
      : "Date";

    const tagStartDate = selectedStartDate
      ? moment(selectedStartDate).format("DD MMM")
      : "Dates";
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="md-close"
            color="grey"
            size={25}
            onPress={() => this.props.navigation.navigate("SignIn")}
          />
          <Text style={{ marginLeft: 270 }}> Clear </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20
          }}
        >
          <Text style={{ fontSize: 25, color: "#808080" }}>{startDate}</Text>
          <Text style={{ fontSize: 25, marginLeft: 95, color: "#808080" }}>
            {endDate}
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            borderWidth: 0.2,
            borderColor: "lightgray"
          }}
        ></View>
        <ScrollView>
          <View style={styles.dateContainer}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
            />
          </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => this.props.navigation.navigate("SignIn")}
        >
          <Text style={styles.submitButtonText}> Save </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 15,
            borderWidth: 0.2,
            borderColor: "lightgray"
          }}
        ></View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <Ionicons name="md-search" color="grey" size={35} />
            <Text style={{ marginLeft: -10 }}> Home </Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 40 }}>
            <Ionicons name="md-heart" color="grey" size={35} />
            <Text style={{ marginLeft: -10 }}> Saved </Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 40 }}>
            <Ionicons name="md-globe" color="grey" size={35} />
            <Text style={{ marginLeft: -5 }}> Events </Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 40 }}>
            <Ionicons name="md-chatboxes" color="grey" size={35} />
            <Text style={{ marginLeft: -5 }}> Inbox </Text>
          </View>
          <View style={{ flexDirection: "column", marginLeft: 40 }}>
            <Ionicons name="md-person" color="grey" size={35} />
            <Text style={{ marginLeft: -10 }}> Profile </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    backgroundColor: "white"
  },
  scrollContainer: {
    height: 570
  },
  signinButton: {
    backgroundColor: "#3cb371",
    justifyContent: "center",
    paddingVertical: 25,
    borderRadius: 5,
    height: 40
  },
  dateContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: 520
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  }
});

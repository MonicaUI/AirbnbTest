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

export default class Calendar extends Component {
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
    alert(d);
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
      <View style={styles.dateCntainer}>
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
        <Text> hey {startDate}</Text>
      </View>
    );
  }
}

//module.exports = startDate;

// export class Start {
//   render() {
//     return (
//       <View>
//         <Text> HI </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30
  },
  signinButton: {
    backgroundColor: "#3cb371",
    justifyContent: "center",
    paddingVertical: 25,
    borderRadius: 5,
    height: 40,
    marginTop: 90
  },
  dateCntainer: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  }
});

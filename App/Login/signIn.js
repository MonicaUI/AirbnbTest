import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Animated,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
  Image,
  Platform,
  StatusBar,
  Dimensions
} from "react-native";
import StarRating from "react-native-star-rating";
import { Ionicons } from "@expo/vector-icons";
import HotelList from "../Components/HotelList";
import Tag from "../Tag/tag";
import TAG_START from "../Tag/Dates/date";
import AdultCount from "../Tag/Guest/adultCount";
import Adult from "../Tag/Guest/adult";
import Start from "../Tag/Dates/date";
import Date from "../Tag/Dates/date";
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
//const TAGSTART = tagStart;
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  // showDateTimePicker = () => {
  //   date_pick = new Date(this.state.reminder.date);
  //   this.setState({ isDateTimePickerVisible: true });
  // };

  // hideDateTimePicker = () => {
  //   this.setState({ isDateTimePickerVisible: false });
  // };

  // handleDatePicked = date => {
  //   console.log("A date has been picked: ", date);
  //   this.hideDateTimePicker();
  // };

  // returnData(selectedStartDate, selectedEndDate) {
  //   alert("Works!");
  //   this.setState({ startDate: selectedStartDate, endDate: selectedEndDate });
  // }

  returnGuest(value) {
    alert("Works!");
    this.setState({ value: value });
  }

  UNSAFE_componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 60;
    this.endHeaderHeight = 40;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 80 + StatusBar.currentHeight;
      this.endHeaderHeight = 60 + StatusBar.currentHeight;
    }
    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 40],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });
    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 10],
      extrapolate: "clamp"
    });
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 0],
      extrapolate: "clamp"
    });
  }
  render() {
    const { rating, name, price, type } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight
            }}
          >
            <View style={styles.searchContainer}>
              <Ionicons name="md-search" color="grey" size={25} />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Try with any places"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              {/* <Provider store={store}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Guests")}
                >
                  <Tag name="Guests" />
                  {/* <Text> HI {this.state.value} </Text> */}
              {/* </TouchableOpacity>
              </Provider> */}

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Date")}
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
                  <Text
                    id="changeContent"
                    style={{ fontWeight: "700", fontSize: 14 }}
                  >
                    {" "}
                    Dates
                  </Text>
                </TouchableOpacity>

                {/* <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideDateTimePicker}
                  date={date_pick}
                /> */}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Guests")}
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
                  <Text
                    id="changeContent"
                    style={{ fontWeight: "700", fontSize: 14 }}
                  >
                    {" "}
                    Guests
                  </Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </Animated.View>

          <ScrollView
            style={styles.Container}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View>
              <Text style={styles.titleText}> Home </Text>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            >
              <View style={styles.square}>
                {/*react-native-elements Card*/}
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Stay")}
                >
                  <Image
                    style={{
                      width: 150,
                      height: 120,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20
                    }}
                    source={require("../../assets/hotel.jpg")}
                  />
                </TouchableOpacity>
                <Text style={styles.listText}> Stays </Text>
              </View>

              <View style={styles.square}>
                {/*react-native-elements Card*/}
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AsyncStorageExample")
                  }
                >
                  <Image
                    style={{
                      width: 150,
                      height: 120,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20
                    }}
                    source={require("../../assets/hotel.png")}
                  />
                  <Text style={styles.listText}> Experiences </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.square}>
                {/*react-native-elements Card*/}
                <Image
                  style={{
                    width: 150,
                    height: 120,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20
                  }}
                  source={require("../../assets/hotel.jpg")}
                />
                <Text style={styles.listText}> Adventure </Text>
              </View>
            </ScrollView>
            <View>
              <Text style={styles.titleText}> Places to Stay </Text>
              <Text style={{ margin: 10, fontSize: 16 }}>
                Qualified places to stay and designed according to customer
                satisfaction
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.list}
              >
                <HotelList />
                <HotelList />
              </ScrollView>
              <ScrollView style={{ flexDirection: "row" }}></ScrollView>
            </View>
          </ScrollView>

          <View style={{ flexDirection: "row", marginLeft: 15 }}>
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

          {/*  */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginLeft: 16,
    marginRight: 16
  },

  searchContainer: {
    flexDirection: "row",
    borderColor: "#000",
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    marginTop: Platform.OS == "android " ? 30 : null
  },
  dates: {
    flexDirection: "row"
  },
  input: {
    paddingHorizontal: 20
  },
  titleText: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: "bold",
    paddingTop: 10
  },

  list: {
    flexDirection: "row"
  },
  listText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center"
  },

  square: {
    width: 150,
    height: 160,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 6,
    marginLeft: 5,
    marginHorizontal: 12,
    marginVertical: 12
  },

  datesinput: {
    flexDirection: "row",
    borderColor: "#000",
    padding: 5,
    marginLeft: 5,
    textAlign: "center",
    elevation: 2,
    width: 80,
    fontSize: 14
  },
  adventureImages: {
    marginTop: 10,
    marginLeft: 10,
    width: 160,
    height: 180,
    borderRadius: 10
  }
});

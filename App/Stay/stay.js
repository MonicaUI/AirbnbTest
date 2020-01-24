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
import { Ionicons } from "@expo/vector-icons";
import Tag from "../Tag/tag";
const { height, width } = Dimensions.get("window");

export default class SignIn extends Component {
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
    return (
      <SafeAreaView style={{ flex: 1, margin: 20 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white"
            }}
          >
            <View style={styles.searchContainer}>
              <Ionicons name="md-search" color="grey" size={25} />
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Anywhere to stay"
                placeholderTextColor="#808080"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginHorizontal: 3,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedOpacity
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignIn")}
              >
                <Tag name="Dates" />
              </TouchableOpacity>
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
              <Text style={{ marginLeft: 5, fontSize: 16 }}>
                Enter number of members and dates to see the price of each event{" "}
              </Text>
            </View>
            <View style={styles.line}></View>
            <View>
              <Text style={styles.titleText}> Places to stay </Text>
            </View>
            <View>
              <Image
                style={styles.stayImages}
                source={require("../../assets/hotel.png")}
              />

              <Image
                style={styles.stayImages}
                source={require("../../assets/hotel.jpg")}
              />
              <Image
                style={styles.stayImages}
                source={require("../../assets/hotel.png")}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 10
  },

  searchContainer: {
    flexDirection: "row",
    borderColor: "#000",
    marginHorizontal: 3,
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
    marginTop: 20,
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

  line: {
    marginTop: 20,
    width: 350,
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "lightgrey"
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
  stayImages: {
    marginTop: 10,
    width: 340,
    height: 260,
    borderRadius: 10
  }
});

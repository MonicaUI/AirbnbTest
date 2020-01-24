import * as React from "react";
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default class Profile extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/hotel.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: 100,
            justifyContent: "flex-start"
          }}
        >
          <Text> Its my profile </Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={styles.submitButtonText}> Take me to Events </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    marginTop: 30,
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
  signupButton: {
    backgroundColor: "blue",
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 15,
    height: 40
  },
  adventureImages: {
    marginTop: 10,
    marginLeft: 10,
    width: 160,
    height: 180,
    borderRadius: 10
  }
});

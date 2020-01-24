import * as React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Login/login";
import SignIn from "./Login/signIn";
import SignUp from "./Login/signUp";
import Test from "./Login/Test";
import Stay from "./Stay/stay";
import Guests from "./Tag/Guest/guest";
import KeyboardShift from "../KeyboardShift";
import AdultCountDB from "./Tag/Guest/adultCountDB";
import AsyncStorageExample from "./Tag/Guest/adultCountDB";
import Profile from "./Login/profile";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Date from "./Tag/Dates/date";

const RootStack = createStackNavigator(
  {
    Home: Home,
    SignIn: SignIn,
    SignUp: SignUp,
    Test: Test,
    Stay: Stay,
    Guests: Guests,
    Date: Date,
    Profile: Profile,
    AsyncStorageExample: AsyncStorageExample
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <KeyboardShift>{() => <AppContainer />}</KeyboardShift>;
  }
}

import * as React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./App/Login/login";
import SignIn from "./App/Login/signIn";
import SignUp from "./App/Login/signUp";
import Test from "./App/Login/Test";
import Stay from "./App/Stay/stay";
import Guests from "./App/Tag/Guest/guest";
import KeyboardShift from "./KeyboardShift";
import AdultCountDB from "./App/Tag/Guest/adultCountDB";
import AsyncStorageExample from "./App/Tag/Guest/adultCountDB";
import Profile from "./App/Login/profile";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Date from "./App/Tag/Dates/date";

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

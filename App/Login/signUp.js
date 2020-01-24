import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  Input
} from "react-native";
import { createStackNavigator } from "react-navigation-stack";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      birthday: ""
    };
  }
  login = () => {
    const { email, firstname, lastname, password, birthday } = this.state;
    if (email == "") {
      alert("Please fill email");
      return false;
    } else if (firstname == "") {
      alert("Please fill FirstName");
      return false;
    } else if (lastname == "") {
      alert("Please fill LastName");
      return false;
    } else if (password == "") {
      alert("Please fill password");
      return false;
    } else if (birthday == "") {
      alert("Please fill Date Of Birth");
      return false;
    }
    return true;
  };

  making_api_call = () => {
    if (this.login()) {
      {
        this.props.navigation.navigate("SignIn");
        alert("Welcome to our community.. Enjoy your trip !");
      }
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}> Join Our Community </Text>
          <Text style={{ marginTop: 25 }}>
            --------------------------- sign up with email
            ---------------------------{" "}
          </Text>
          <Text style={{ marginTop: 25 }}> EMAIL </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            placeholder="Username or Email"
            onSubmitEditing={() => this.firstName.focus()}
            placeholderTextColor="#808080"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => this.setState({ email: value })}
            keyboardType="email-address"
          />
          <Text style={{ marginTop: 20 }}> FIRST NAME </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            onSubmitEditing={() => this.lastName.focus()}
            placeholderTextColor="#808080"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => this.setState({ firstname: value })}
            ref={input => (this.firstName = input)}
          />
          <Text style={{ marginTop: 20 }}> LAST NAME </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            onSubmitEditing={() => this.password.focus()}
            placeholderTextColor="#808080"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={value => this.setState({ lastname: value })}
            ref={input => (this.lastName = input)}
          />
          <Text style={{ marginTop: 20 }}> PASSWORD </Text>
          <Text style={{ marginTop: 5 }}>
            {" "}
            Must include a symbol or a number and have atleast 8 characters{" "}
          </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            onSubmitEditing={() => this.birthDay.focus()}
            secureTextEntry
            placeholderTextColor="#808080"
            autoCapitalize="none"
            onChangeText={value => this.setState({ password: value })}
            ref={input => (this.password = input)}
          />
          <Text style={{ marginTop: 20 }}> DATE OF BIRTH </Text>
          <Text style={{ marginTop: 10 }}>
            You need to be atleast 18. Others who use this app wont see your
            birthday
          </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            returnKeyType="next"
            onSubmitEditing={() => this.birthDay.focus()}
            secureTextEntry
            placeholderTextColor="#808080"
            autoCapitalize="none"
            onChangeText={value => this.setState({ birthday: value })}
            ref={input => (this.birthDay = input)}
          />

          <Text style={{ marginTop: 20 }}>
            Email me members-only deals, inspiration, promotions and policy
            updates. I can opt out of receiving these at any time in my account
            settings or directly from the marketing notification.
          </Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => this.making_api_call()}
          >
            <Text style={styles.submitButtonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    height: 30,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderBottomColor: "#d3d3d3",
    borderWidth: 1
  },
  signinButton: {
    backgroundColor: "#008000",
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 15,
    height: 40
  },
  signupButton: {
    backgroundColor: "#0000ff",
    justifyContent: "center",
    paddingVertical: 15,
    marginTop: 15,
    height: 60
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  }
});

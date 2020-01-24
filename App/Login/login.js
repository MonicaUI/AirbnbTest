import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  AsyncStorage
} from "react-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = () => {
    const { email, password } = this.state;

    if (email == "") {
      alert("Please fill email");
      return false;
    } else if (password == "") {
      alert("Please fill password");
      return false;
    }
    return true;
  };

  making_api_call = () => {
    if (this.login()) {
      {
        const { email, password } = this.state;
        let mylogin = {
          email: email,
          password: password
        };
        AsyncStorage.setItem("mylogin", JSON.stringify(mylogin));
        alert("Data saved successfull");
        this.props.navigation.navigate("Profile");
      }
    }
  };

  showData = async () => {
    let mylogin = await AsyncStorage.getItem("mylogin");
    let d = JSON.parse(mylogin);
    //alert(d.email + "" + d.password);
  };

  componentDidMount() {
    this.showData().then(mylogin => {
      if (mylogin) this.setState({ mylogin: mylogin });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username or Email"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          placeholderTextColor="#808080"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={email => this.setState({ email })}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          returnKeyType="go"
          secureTextEntry
          placeholderTextColor="#808080"
          autoCapitalize="none"
          onChangeText={password => this.setState({ password })}
          ref={input => (this.passwordInput = input)}
        />

        <TouchableOpacity
          style={styles.signinButton}
          onPress={async () => {
            try {
              const result = await AsyncStorage.setItem(
                "personal_data",
                JSON.stringify(this.state)
              );
              this.making_api_call();
            } catch (error) {
              alert("Failed");
            }
          }}
        >
          <Text style={styles.submitButtonText}> Sign In </Text>
        </TouchableOpacity>

        <Button color="pink" onPress={this.showData} title="show my data" />
        <TextInput textAlign="center"> Forgotton Password </TextInput>

        <Text>
          {" "}
          ----------------------------------------- or
          -----------------------------------------{" "}
        </Text>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text style={styles.submitButtonText}>
            {" "}
            Not a member ? Sign Up Now{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// export default class App extends React.Component {
//   render() {
//     return <AppStackNavigator />;
//   }
// }

// const AppStackNavigator = createStackNavigator({
//   Home: HomeScreen
// });

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100
  },
  input: {
    marginBottom: 10,
    height: 40,
    borderColor: "#008000",
    paddingHorizontal: 10,
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
    marginBottom: 15,
    height: 40
  },
  submitButtonText: {
    color: "white",
    textAlign: "center"
  }
});

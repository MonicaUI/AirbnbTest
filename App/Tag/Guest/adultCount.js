import React, { Component } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

export default class AdultCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.counter.value
    };
  }

  formatCount() {
    const { value } = this.state;
    // let myKey = {
    //   value: value
    // };
    // AsyncStorage.setItem("myKey", myKey);
    return value;
  }

  // showData = async () => {
  //   let myKey = await AsyncStorage.getItem("myKey");
  //   alert(value);
  // };

  // componentDidMount() {
  //   this.showData().then(myKey => {
  //     if (myKey) this.setState({ myKey: myKey });
  //   });
  // }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    if (this.state.value > 1) {
      this.setState({ value: this.state.value - 1 });
    } else {
      this.setState({ value: 1 });
    }
  };

  render() {
    return (
      <React.Fragment>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 20, marginTop: 50 }}> Adults </Text>
            <View style={{ marginTop: 50, marginLeft: 147.5 }}>
              <Ionicons
                style={{ display: "flex" }}
                name="md-remove-circle-outline"
                color="red"
                size={30}
                onPress={() => this.handleDecrement()}
              />
            </View>
            <Text style={{ fontSize: 20, marginTop: 50, marginLeft: 20 }}>
              {this.formatCount()}+
            </Text>
            <View style={{ marginTop: 50, marginLeft: 20 }}>
              <Ionicons
                name="md-add-circle-outline"
                color="green"
                size={30}
                onPress={() => this.handleIncrement()}
              />
            </View>
          </View>
          {/* <Text> {this.showData} hi </Text> */}
        </View>
      </React.Fragment>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     value: state.value
//   };
// }

// export default connect(mapStateToProps)(AdultCount);

const styles = StyleSheet.create({
  Container: {
    margin: 20
  },
  titleText: {
    fontSize: 25,
    marginTop: 20,
    fontWeight: "bold",
    paddingTop: 10
  }
});

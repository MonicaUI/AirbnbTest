import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import StarRating from "react-native-star-rating";

export default class HotelList extends Component {
  render() {
    //const { rating, name, price, type } = this.props;
    return (
      <View
        style={{
          width: 190,
          height: 225,
          borderRadius: 5,
          backgroundColor: "white",
          elevation: 3,
          marginLeft: 5,
          marginHorizontal: 12,
          marginVertical: 12
        }}
      >
        {/*  */}
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/hotel1.jpg")}
            style={{
              width: 190,
              height: 140,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 15,
            alignItems: "flex-start",
            justifyContent: "space-evenly"
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            Delux Appartment{" "}
          </Text>
          <Text style={{ fontSize: 16 }}>Germany </Text>
          <Text style={{ fontSize: 14 }}>$1500 </Text>
          <StarRating
            disabled={true}
            maxStars={5}
            starSize={14}
            rating={3}
            fullStarColor={"green"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";
export default class ChoiceScreen extends Component {
  static navigationOptions = {
    title: "What defines you best ?"
    // headerShown: false
  };
  _onPressButton = type => {
    console.log("chose", type);
    if (type == "doc") {
      this.props.navigation.navigate("getDoctorDetails");
    } else {
      this.props.navigation.navigate("getPatientDetails");
    }
  };
  render() {
    return (
      <Container
        style={{
          alignItems: "center",
          flex: 1
        }}
      >
        <TouchableOpacity onPress={() => this._onPressButton("doc")}>
          <Image
            source={require("../../assets/doc.png")}
            style={{
              height: 200,
              width: 200,
              marginTop: 50,
              borderRadius: 25
            }}
          />
        </TouchableOpacity>
        <Text>DOCTOR</Text>
        <TouchableOpacity onPress={() => this._onPressButton("patient")}>
          <Image
            source={require("../../assets/guy.png")}
            style={{
              height: 200,
              width: 200,
              marginTop: 50,
              borderRadius: 25
            }}
          />
        </TouchableOpacity>
        <Text>PATIENT</Text>
      </Container>
    );
  }
}

import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
    // headerShown: false
  };
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require("../../assets/signUp.json")}
          loop={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  }
});

export default RegisterScreen;

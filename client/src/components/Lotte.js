import React, { Component } from "react";
import LottieView from "lottie-react-native";
import { DangerZone } from "expo";
import { Button, StyleSheet, View } from "react-native";
class Lotte extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      // <View style={styles.animationContainer}>
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require("../../assets/signUp.json")}
        loop={false}
      />
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  animationContainer: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
export default Lotte;

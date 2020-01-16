import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { DangerZone } from "expo";
class TickScreen extends Component {
  static navigationOptions = {
    title: "Lets Go !!"
    // headerShown: false
  };
  componentDidMount() {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play();
  }
  goTo = () => {
    this.props.navigation.navigate("home");
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require("../../assets/done.json")}
          loop={false}
          onAnimationFinish={() => {
            this.goTo();
          }}
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

export default TickScreen;

import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import TickScreen from "../screens/TickScreen";
// import doneScreen from "../screens/doneScreen";
import getDoctorDetails from "../screens/getDoctorDetails";
import getPatientDetails from "../screens/getPatientDetails";
import RegisterScreen from "../screens/RegisterScreen";
import ChoiceScreen from "../screens/ChoiceScreen";
import React from "react";
import { Image } from "react-native";
const navigator = createStackNavigator(
  {
    home: HomeScreen,
    done: TickScreen,
    getPatientDetails: getPatientDetails,
    getDoctorDetails: getDoctorDetails,
    register: RegisterScreen,
    choice: ChoiceScreen
    // done: doneScreen.js
  },
  {
    initialRouteName: "home",
    defaultNavigationOptions: {
      title: "App"
    }

    // headerMode: "none"
  }
);

export default createAppContainer(navigator);

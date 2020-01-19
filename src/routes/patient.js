import { createBottomTabNavigator } from "react-navigation";
import React from 'react';
import { Icon } from 'native-base';
import Home from "../screens/patient/Home";
import History from "../screens/patient/History";
import Visits from "../screens/patient/Visits";

import { Platform, StatusBar } from "react-native";
const Patient = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Search Hospitals",
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ marginBottom: 35, marginTop: 10, color: tintColor }} color='activetintColor' type="FontAwesome" name="search" />
          )
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }) => (
          <Icon style={{ marginBottom: 35, marginTop: 10, color: tintColor }} color='activetintColor' type="FontAwesome" name="history" />
          )
      }
    },
  },
  {
    tabBarOptions: {
      inactiveTintColor: 'grey',
      activeTintColor: '#15BB64',
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }, {
    initialRouteName: "Home",
    headerMode: 'none',
    navigationOptions: {
        headershown: false,
    },
}
);

export default Patient;

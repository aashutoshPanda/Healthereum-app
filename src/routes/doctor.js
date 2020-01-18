import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import MyAppointments from "../screens/doctor/MyAppointments";
import Search from "../screens/doctor/Search";

import { Platform, StatusBar } from "react-native";
import { Icon } from "native-base";

import { createStackNavigator } from "react-navigation";
import DetailScreen from "../screens/patient/DetailScreenPatient";
const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const patientResultStack = createStackNavigator(
  {
    search: Search,
    detail: DetailScreen
  },
  {
    initialRouteName: "search",
    defaultNavigationOptions: {
      title: "DETAILS"
    },
    headerMode: "none"
  },
  {
    style: headerStyle
  }
);

const Doctor = createBottomTabNavigator(
  {
    MyAppointments: {
      screen: MyAppointments,
      navigationOptions: {
        tabBarLabel: "MyAppointments"
      }
    },
    Search: {
      screen: patientResultStack,
      navigationOptions: {
        tabBarLabel: "Search"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routename } = navigation.state;
        if (routename == "MyAppointments") {
          return <Icon type="FontAwesome" name="home" />;
        } else {
          return <Icon type="EvilIcons" name="search" />;
        }
      }
    }),
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export default Doctor;

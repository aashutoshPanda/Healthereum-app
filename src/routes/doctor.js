import { createBottomTabNavigator } from "react-navigation";
import MyAppointments from "../screens/doctor/MyAppointments";
import Search from "../screens/doctor/Search";

import { Platform, StatusBar } from "react-native";

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
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export default Doctor;

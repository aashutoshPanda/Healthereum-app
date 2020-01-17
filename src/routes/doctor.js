import { createBottomTabNavigator } from "react-navigation";
import MyAppointments from "../screens/doctor/MyAppointments";
import Search from "../screens/doctor/Search";

import { Platform, StatusBar } from "react-native";
const Doctor = createBottomTabNavigator(
  {
    MyAppointments: {
      screen: MyAppointments,
      navigationOptions: {
        tabBarLabel: "MyAppointments"
      }
    },
    Search: {
      screen: Search,
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

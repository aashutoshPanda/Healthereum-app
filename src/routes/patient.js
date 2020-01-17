import { createBottomTabNavigator } from "react-navigation";
import Home from "../screens/patient/Home";
import History from "../screens/patient/History";
import Visits from "../screens/patient/Visits";

import { Platform, StatusBar } from "react-native";
const Patient = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: "History"
      }
    },
    Visits: {
      screen: Visits,
      navigationOptions: {
        tabBarLabel: "Visits"
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

export default Patient;

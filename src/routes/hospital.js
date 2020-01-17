import { createBottomTabNavigator } from "react-navigation";
import Applications from "../screens/hospital/Applications";
import RegisterDoctor from "../screens/hospital/RegisterDoctor";
import SearchPatient from "../screens/hospital/SearchPatient";

import { Platform, StatusBar } from "react-native";
const Hospital = createBottomTabNavigator(
  {
    Applications: {
      screen: Applications,
      navigationOptions: {
        tabBarLabel: "Applications"
      }
    },
    RegisterDoctor: {
      screen: RegisterDoctor,
      navigationOptions: {
        tabBarLabel: "RegisterDoctor"
      }
    },
    SearchPatient: {
      screen: SearchPatient,
      navigationOptions: {
        tabBarLabel: "SearchPatient"
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

export default Hospital;

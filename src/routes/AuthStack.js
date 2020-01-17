import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/auth/LoginScreen";

import { Platform, StatusBar } from "react-native";
const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const authStack = createStackNavigator(
  {
    login: LoginScreen
  },
  {
    initialRouteName: "login",
    defaultNavigationOptions: {
      title: "login"
    }
  },
  {
    style: headerStyle
  }
);

export default authStack;

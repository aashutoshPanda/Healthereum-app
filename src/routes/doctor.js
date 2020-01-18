import { createBottomTabNavigator } from "react-navigation";
import MyAppointments from "../screens/doctor/MyAppointments";
import Search from "../screens/doctor/Search";

import { Platform, StatusBar } from "react-native";
import { Icon, } from "native-base";

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
    defaultNavigationOptions: ({ navigation })=>({
      tabBarIcon: ({focused, horizontal, tintColor }) => {
        const { routename } = navigation.state;
        if( routename == 'MyAppointments'){
          return (
            <Icon 
              type="FontAwesome" 
              name="home" />
          );
        } else {
          return (
            <Icon
              type="EvilIcons"
              name="search"/>
          );
        }
      },
    }),
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export default Doctor;

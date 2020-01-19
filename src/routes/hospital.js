import { createBottomTabNavigator } from "react-navigation";
import Applications from "../screens/hospital/Applications";
import RegisterDoctor from "../screens/hospital/RegisterDoctor";
import SearchPatient from "../screens/hospital/SearchPatient";

import { Platform, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation";
import DetailScreen from "../screens/patient/DetailScreenPatient";
import React from 'react';
import { Icon } from "native-base";

const headerStyle = {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const patientResultStack = createStackNavigator({
    search: SearchPatient,
    detail: DetailScreen
}, {
    initialRouteName: "search",
    defaultNavigationOptions: {
        title: "DETAILS"
    },
    headerMode: "none"
}, {
    style: headerStyle
});

const Hospital = createBottomTabNavigator({
    Applications: {
        screen: Applications,
        navigationOptions: {
            tabBarLabel: "Applications",
            tabBarIcon: ({ tintColor }) => ( <
                Icon style = {
                    { marginBottom: 35, marginTop: 10, color: tintColor }
                }
                color = 'activetintColor'
                type = "MaterialCommunityIcons"
                name = "application" / >
            )
        }
    },
    RegisterDoctor: {
        screen: RegisterDoctor,
        navigationOptions: {
            tabBarLabel: "Register Doctor",
            tabBarIcon: ({ tintColor }) => ( <
                Icon style = {
                    { marginBottom: 35, marginTop: 10, color: tintColor }
                }
                color = 'activetintColor'
                type = "FontAwesome"
                name = "users" / >
            )
        }
    },
    SearchPatient: {
        screen: patientResultStack,
        navigationOptions: {
            tabBarLabel: "Search Patients",
            tabBarIcon: ({ tintColor }) => ( <
                Icon style = {
                    { marginBottom: 35, marginTop: 10, color: tintColor }
                }
                color = 'activetintColor'
                type = "FontAwesome"
                name = "search" / >
            )
        }
    }
}, {
    tabBarOptions: {
        inactiveTintColor: 'grey',
        activeTintColor: 'blue',
        style: {
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }
    }
});

export default Hospital;
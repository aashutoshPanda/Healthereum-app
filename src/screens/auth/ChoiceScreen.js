import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";

export default class ChoiceScreen extends Component {
    static navigationOptions = {
        title: "What defines you best ?"
        // headerShown: false
    };

    render() {
    return (
        <Container style={ styles.container } >
            <Text style={styles.title}>What defines you best?</Text>
            <TouchableOpacity>
                <Image source={require("../../../assets/doc.png")} style={{ height: 200, width: 200, marginTop: 50, borderRadius: 25 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24}}>HOSPITAL</Text>
            <TouchableOpacity>
                <Image source={require('../../../assets/guy.png')} style={{ height: 200, width: 200, marginTop: 50, borderRadius: 25 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 24}}>PATIENT</Text>
        </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
    forground: {
      margin: 20,
    },
    card: {
      paddingTop: 20,
      borderRadius: 15,
    },
    submit: {
      padding: 20,
    },
  });
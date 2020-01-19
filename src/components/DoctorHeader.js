import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Header, Left, Right, Body, Text, Thumbnail } from "native-base";
const DoctorHeader = () => {
  return (
    <Header style={styles.Header}>
      <Left>
        <Thumbnail source={require("../../assets/doc.png")} />
      </Left>
      <Body style={styles.HeaderBody}>
        <Text style={{ color: 'white', fontSize: 20}}>Doctor Name</Text>
        <Text note style={{color: 'white'}}>Degree</Text>
      </Body>
      <Right />
    </Header>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  Container: {
    paddingTop: 22
  },
  Header: {
    height: 70,
    backgroundColor: '#139942',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  HeaderBody: {
    marginLeft: 20
  }
});

export default DoctorHeader;

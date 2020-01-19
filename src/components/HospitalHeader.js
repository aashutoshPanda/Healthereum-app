import React from "react";
import { StyleSheet } from "react-native";
import { Header, Left, Right, Body, Text, Thumbnail, Title } from "native-base";
const Home = () => {
  return (
    <Header style={styles.Header}>
      <Left>
        <Thumbnail source={require("../../assets/doc.png")} />
      </Left>
      <Body style={styles.HeaderBody}>
        <Title>HOSPITAL NAME</Title>
      </Body>
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
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#139942',
  },
  HeaderBody: {
    marginLeft: 20
  }
});

export default Home;

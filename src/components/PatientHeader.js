import React from "react";
import { StyleSheet,View } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Text,
  Thumbnail
} from "native-base";
const Home = () => {
  return (
    <Header style={styles.Header}>
      <View style={{flex:1}}>
      <Text style={{ marginTop: 20, fontWeight: "bold", color:'white', fontSize: 24,}}>History</Text>
      </View>{/* <Left>
        <Thumbnail style={{ height: 50, width:50, }} source={require("../../assets/doc.png")} />
      </Left>
      <Body style={styles.HeaderBody}>
        <Text style={{ color:'white',fontSize:20 }}>Patient Name</Text>
        <Text style={{ color:'white' }} note>AGE/M</Text>
      </Body>
      <Right /> */}
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
    backgroundColor: '#04AA53',
    height: 70,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  HeaderBody: {
    marginLeft: 20
  }
});

export default Home;

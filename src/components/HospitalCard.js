import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
export default class CardImageExample extends Component {
  render() {
    return (
      <Card style={styles.resultCard}>
        <CardItem style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <Left>
            <Thumbnail source={require("../../assets/doc.png")} />
            <Body>
              <Text>Hospital Name</Text>
              <Text note>City</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Body style={styles.address}>
            <Text>
              (ADDRESS) Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore
            </Text>
          </Body>
        </CardItem>
        <CardItem
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <Left>
            <Text>Opening Hours</Text>
          </Left>
          <Right>
            <Button small rounded success>
              <Text>SELECT</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  address: {
    paddingLeft: 20,
    paddingRight: 20
  },
  resultCard: {
    borderRadius: 20
  }
});

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
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
              <Text>Patient Name</Text>
              <Text note>AGE/M</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Body style={styles.address}>
            <Text>
              (DESCRIPTION) Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
            </Text>
          </Body>
        </CardItem>
        <CardItem
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <Left>
            <Text>SOMETHING</Text>
          </Left>
          <Right>
            <Button
              small
              rounded
              success
              onPress={() => {
                this.props.selectPressFunction();
              }}
            >
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

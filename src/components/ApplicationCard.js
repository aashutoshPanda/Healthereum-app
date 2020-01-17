import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Font } from "expo";
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
import DoctorPicker from "../components/DoctorPicker";
export default class CardImageExample extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
  }
  state = {
    showButtons: true
  };
  toggle = () => {
    this.setState({
      showButtons: !this.state.showButtons
    });
  };
  render() {
    const doctorSelectionPanel = (
      <CardItem
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <DoctorPicker toggleFunction={this.toggle} />
      </CardItem>
    );
    const acceptDecline = (
      <CardItem
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <Body>
          <Button
            small
            rounded
            success
            onPress={() => {
              this.toggle();
            }}
          >
            <Text>ACCEPT</Text>
          </Button>
        </Body>
        <Right>
          <Button small rounded danger>
            <Text>DECLINE</Text>
          </Button>
        </Right>
      </CardItem>
    );
    const cardBottom = this.state.showButtons
      ? acceptDecline
      : doctorSelectionPanel;
    return (
      <Card style={styles.resultCard}>
        <CardItem
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }}
        >
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
            <Text>(ILLNESS) Lorem ipsum dolor sit amet</Text>
          </Body>
        </CardItem>
        {cardBottom}
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

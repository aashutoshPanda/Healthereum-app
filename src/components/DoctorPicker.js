import React, { Component } from "react";
import {
  Content,
  Icon,
  Picker,
  Form,
  Button,
  Text,
  Right,
  Left,
  Body,
  Card,
  CardItem
} from "native-base";

export default class DoctorPicker extends Component {
  state = {
    selected: "key3"
  };

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Content>
        <Form>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            headerBackButtonText="Baaack!"
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Dr. Ashutosh" value="key0" />
            <Picker.Item label="Dr. Pratik" value="key1" />
            <Picker.Item label="Dr. Shiva" value="key2" />
            <Picker.Item label="Dr. Swastik" value="key3" />
            <Picker.Item label="Dr. Nitish" value="key4" />
          </Picker>
        </Form>

        <CardItem>
          <Left>
            <Button small rounded success>
              <Text>CONFIRM</Text>
            </Button>
          </Left>
          <Right>
            <Button
              small
              rounded
              danger
              onPress={() => this.props.toggleFunction()}
            >
              <Text>CANCEL</Text>
            </Button>
          </Right>
        </CardItem>
      </Content>
    );
  }
}

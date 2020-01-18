import React from "react";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import {  StyleSheet } from "react-native";

const PatientRegister = () => {
  return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Aadhar Card No.</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
            <View style={ styles.button }>
              <Button rounded style={ styles.submit }>
                <Text>Sign in</Text>
              </Button>
              <Button rounded style={ styles.submit }>
                <Text>Register</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );

};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  input: {
    padding: 5,
    margin: 5,
  },
  button: {
    flexDirection: 'row',
  },
  submit: {
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'auto',
  }
});

export default PatientRegister;

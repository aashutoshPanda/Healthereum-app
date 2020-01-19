import React from "react";
import { Container, Card, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import {  StyleSheet } from "react-native";

const PatientRegister = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.forground}>
        <Card style={styles.card}>
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
              <Button rounded danger style={ styles.register }>
                <Text>Complete</Text>
              </Button>
              <Button rounded danger style={ styles.submit }>
                <Text>Sign in</Text>
              </Button>
            </View>
          </Form>
          </Card>
        </View>
      </Container>
    );

};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    backgroundColor: '#139942'
  },
  forground: {
    margin: 20,
  },
  card: {
    borderRadius: 15,
  },
  form: {
    padding: 20,
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
    alignContent: 'center',
  },
  submit: {
    flex: 1,
    margin: 10,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  register: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 10,
  }
});

export default PatientRegister;

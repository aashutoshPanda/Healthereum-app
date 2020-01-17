import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import HospitalHeader from "../../components/HospitalHeader";
import DoctorRegisterForm from "../../components/DoctorRegisterForm";

const MyAppointments = () => {
  return (
    <Container style={styles.Container}>
      <HospitalHeader />
      <Content padder>
        <DoctorRegisterForm />
      </Content>
    </Container>
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
    height: 70
  },
  HeaderBody: {
    marginLeft: 20
  }
});

export default MyAppointments;

import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import DoctorHeader from "../../components/DoctorHeader";
import SearchBar from "../../components/SearchBar";
import PatientResultCard from "../../components/PatientResultCard";
// galti ho gayi this is for doc not hospital
class Search extends React.Component {
  onSelectPress = () => {
    console.log("pressed select");
    this.props.navigation.navigate("detail");
  };
  render() {
    return (
      <Container style={styles.Container}>
        <DoctorHeader />
        <Content padder>
          <SearchBar />
          <PatientResultCard selectPressFunction={this.onSelectPress} />
        </Content>
      </Container>
    );
  }
}

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

export default Search;

import React from "react";
import { StyleSheet } from "react-native";
import PatientHeader from "../../components/PatientHeader";
import { Container, Content } from "native-base";
import SearchBar from "../../components/SearchBar";
import HospitalCard from "../../components/HospitalCard";
import { Font } from "expo";
class Home extends React.Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../../../assets/fonts/Roboto.ttf"),
      Roboto_medium: require("../../../assets/fonts/Roboto_medium.ttf"),
      ionicons: require("../../../assets/fonts/Ionicons.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded == false) {
      return null;
    }
    return (
      <Container style={styles.Container}>
          <SearchBar />
        <Content padder>
          <HospitalCard />
          <HospitalCard />
          <HospitalCard />
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

export default Home;

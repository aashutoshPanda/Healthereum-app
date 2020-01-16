import React from "react";
import { StyleSheet, Button, View, Image } from "react-native";
import * as Google from "expo-google-app-auth";
import { setData, getData, removeToken } from "../helper/asyncStore";
import Lotte from "../components/Lotte";
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  state = {
    accessToken: "",
    userInfo: { email: "", givenName: "", photoUrl: "", id: "" }
  };
  async componentWillMount() {
    const accessToken = await getData("accessToken");
    const userInfo = JSON.parse(await getData("userInfo"));
    await this.setState({ accessToken, userInfo });
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "101150275463-3eteoqgvoisqn8a6fn3o3bb0ct5635dv.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.setState({ accessToken: result.accessToken });
        console.log(result);
        this.setState({ userInfo: result.user });

        await setData("accessToken", result.accessToken);
        await setData("userInfo", JSON.stringify(result.user));
        this.props.navigation.navigate("choice");
      } else {
        console.log("Error in log in");
      }
    } catch (e) {
      console.log("Error in log in");
    }
  };
  signOut = async () => {
    console.log("log out called");
    const result = await Google.logOutAsync({
      accessToken: this.state.accessToken,
      androidClientId:
        "101150275463-3eteoqgvoisqn8a6fn3o3bb0ct5635dv.apps.googleusercontent.com"
    });
    console.log("log out result", result);
    await removeToken("accessToken");
    await removeToken("userInfo");
    this.setState({
      accessToken: "",
      userInfo: { email: "", givenName: "", photoUrl: "", id: "" }
    });
  };

  render() {
    // console.log("state", this.state);
    const button = this.state.accessToken ? (
      <>
        <Image
          style={styles.image}
          source={{ uri: this.state.userInfo.photoUrl }}
        />
        <Button
          style={styles.button}
          title="LOG OUT"
          onPress={() => this.signOut()}
        />
      </>
    ) : (
      <Button
        style={styles.button}
        title="LOG IN"
        onPress={() => this.signIn()}
      />
    );
    return (
      <View style={styles.container}>
        <Lotte style={styles.lotte} />
        {button}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    bottom: 500
  },
  lotte: {
    width: 500
    // top: 50
  },
  container: {
    flex: 1
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 50,
    borderRadius: 50,
    left: 90
  }
});

export default HomeScreen;

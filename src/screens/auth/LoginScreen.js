import React, { Component } from "react";
import {
  Container,
  Card,
  CardItem,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
  Left,
  Right
} from "native-base";
import api from "../../api";
import { connect } from "react-redux";
import { StyleSheet,View } from "react-native";
import { Font } from "expo";
import { login, loading, storeUserData } from "../../actions";
import { AppLoading } from "expo";

class LoginScreen extends Component {
  state = {
    fontLoaded: false,
    username: "",
    password: ""
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("../../../assets/fonts/Roboto.ttf"),
      Roboto_medium: require("../../../assets/fonts/Roboto_medium.ttf"),
      ionicons: require("../../../assets/fonts/Ionicons.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  submit = async () => {
    this.props.loading(true);
    console.log("state", this.props.app);
    console.log("log in input", this.state.username, this.state.password);

    const loginData = {
      username: this.state.username,
      password: this.state.password
    };
    api
      .post("/user/login", loginData)
      .then(val => {
        // dispatch({ type: LOGIN_SUCCESS, payload: true });
        const userData = {
          cred: loginData,
          token: val.data.token.key,
          id: val.data.token.user,
          type: val.data.user_type
        };
        console.log("data stored and action called", userData);
        this.props.storeUserData(userData);
        this.props.navigation.navigate(val.data.user_type);
      })
      .catch(function(error) {
        console.log("login  error", error);
      });
  };
  register = () => {
    this.props.navigation.navigate("choice");
  };
  render() {
    if (this.state.fontLoaded == false) {
      return null;
    }
    if (this.props.app.loading === true) {
      return <AppLoading />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.forground}>
          <Card style={styles.card}>
            <Form>
              <View style={styles.form}>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input
                    onChangeText={text => this.setState({ username: text })}
                    value={this.state.username}
                  />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                  />
                </Item>
                <View style={styles.button}>
                    <Button
                      rounded
                      danger
                      style={styles.submit}
                      onPress={() => {
                        this.submit();
                      }}>
                    <Text>Log In</Text>
                    </Button>
                    <Text in>Don't have an account yet?</Text>
                    <Button 
                      danger 
                      rounded 
                      style={styles.register} 
                      onPress={() => {
                        this.register();
                      }}
                    >
                      <Text>Register</Text>
                    </Button>
                  </View>
                </View>
            </Form>
          </Card>
        </View>
      </View>
    );
  }
}

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
const mapDispatchToProps = dispatch => {
  return {
    login: data => {
      dispatch(login(data));
    },
    loading: caseLoading => {
      dispatch(loading(caseLoading));
    },
    storeUserData: data => {
      dispatch(storeUserData(data));
    }
  };
};
const mapStateToProps = state => {
  const { app, auth } = state;
  // const { id } = ownProps
  // const todo = getTodoById(state, id)

  // component receives additionally:
  return { app, auth };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
// export default LoginScreen;

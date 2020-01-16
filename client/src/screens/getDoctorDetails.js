import React, { Component } from "react";
import { addDoc } from "../actions";
import { connect } from "react-redux";
import {
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Location } from "../constants";
import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  // multi select
  degree: t.String,
  // number
  experience: t.Number,
  location: Location,
  specialisations: t.maybe(t.list(t.String))
});
const defaultValues = {
  location: "bilaspur"
};
const options = {
  fields: {
    name: {
      error: "Required"
    },
    degree: {
      error: "Required"
    },
    location: {
      error: "Required",
      selected: "Bilaspur"
    },
    experience: {
      label: "Experience (Years)"
    }
  }
};

class getDoctorDetails extends Component {
  static navigationOptions = {
    title: "Welcome"
  };
  handleSubmit = async () => {
    const value = this._form.getValue();
    console.log("value from form submission ", value);
    await this.props.addDoc(value);
    this.props.navigation.navigate("done");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../assets/heart.gif")}
            style={styles.stretch}
          />
          <Form
            value={defaultValues}
            ref={c => (this._form = c)}
            type={User}
            options={options}
          />

          <Button title="Get Started" onPress={this.handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    paddingTop: 0,
    backgroundColor: "#ffffff"
  },
  stretch: {
    width: 200,
    height: 200,
    left: 60,
    bottom: 20
  }
});
const mapDispatchToProps = dispatch => {
  return {
    addDoc: data => {
      dispatch(addDoc(data));
    }
  };
};
export default connect(null, mapDispatchToProps)(getDoctorDetails);

import React, { Component } from "react";
import { addPatient } from "../actions";
import { connect } from "react-redux";
import {
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { Location, Sex } from "../constants";
import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  sex: Sex,
  age: t.Number,
  location: Location
});
const defaultValues = {
  location: "bilaspur",
  sex: "female"
};
const options = {
  fields: {
    name: {
      error: "Required"
    },
    sex: {
      error: "Required"
    },
    location: {
      error: "Required"
    },
    age: {
      label: "Age (Years)"
    }
  }
};

class getPatientDetails extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  handleSubmit = async () => {
    const value = this._form.getValue();
    console.log("value from form submission ", value);
    await this.props.addPatient(value);
    this.props.navigation.navigate("done");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../assets/patient.gif")}
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
    width: 350,
    height: 350,
    // left: 60,
    bottom: 70,
    marginBottom: -120
  }
});
const mapDispatchToProps = dispatch => {
  return {
    addPatient: data => {
      dispatch(addPatient(data));
    }
  };
};
export default connect(null, mapDispatchToProps)(getPatientDetails);

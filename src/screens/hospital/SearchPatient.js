import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

const SearchPatient = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>SearchPatient</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchPatient;
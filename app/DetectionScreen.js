import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Header from "./components/Header";
import TextField from "./components/TextField";

const DetectionScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Header title="SigLa" />
      <View style={styles.videoContainer}></View>
      <TextField placeholder="Translation" />
    </View>
  );
};
export default DetectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7EC8E3",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "black",
  },
  videoContainer: {
    backgroundColor: "#010101",
    height: 450,
    width: 350,
    marginBottom: 40,
    marginTop: 80,
    borderRadius: 20,
  },
});

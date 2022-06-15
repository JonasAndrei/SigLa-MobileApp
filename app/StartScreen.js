import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Button from "./components/Button";
import Title from "./components/title";

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title title={"SigLa"} subTitle={"Sign Language Recognition System"} />
      <Image style={styles.image} source={require("../assets/official.png")} />
      <Button
        onPress={() => navigation.navigate("Detection")}
        style={styles.button}
      >
        START
      </Button>
    </View>
  );
};
export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7EC8E3",
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 80,
  },
  button: {
    width: "60%",
    height: 50,
    borderRadius: 25,
  },
});

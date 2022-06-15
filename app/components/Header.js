import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/official.png")}
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 30,
    left: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4a4a4a",
  },
});

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Title = ({ title, subTitle }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};
export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#e1e1e1",
  },
  subTitle: {
    fontSize: 15,
    color: "white",
  },
});

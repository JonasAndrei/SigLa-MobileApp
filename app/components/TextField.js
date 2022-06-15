import React from "react";
import { View, StyleSheet, Text, ColorPropType } from "react-native";

const TextField = ({ placeholder }) => {
  return (
    <View style={styles.translationContainer}>
      <Text
        style={
          placeholder === "Translation"
            ? styles.defaultText
            : styles.translationText
        }
      >
        {placeholder}
      </Text>
    </View>
  );
};
export default TextField;

const styles = StyleSheet.create({
  translationContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: "80%",
    borderRadius: 30,
  },
  translationText: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  defaultText: {
    color: "#a1a1a1",
    fontWeight: "bold",
    fontSize: 18,
  },
});

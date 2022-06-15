import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "lightblue",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={{ padding: 10, fontWeight: "bold" }}>{children}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({});

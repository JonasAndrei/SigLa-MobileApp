import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MyStack from "./app/MyStack";

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

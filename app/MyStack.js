import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetectionScreen from "./DetectionScreen";
import StartScreen from "./StartScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={StartScreen} />
      <Stack.Screen name="Detection" component={DetectionScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;

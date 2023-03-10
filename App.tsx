import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import OnboardingScreen from "./screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      <Stack.Screen name="Home" component={HomeScreen} />
    </NavigationContainer>
  );
}

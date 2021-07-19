import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./components/navigation/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

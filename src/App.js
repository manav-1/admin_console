import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./components/navigation/RootStack";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import Chat from "./components/screens/Chat";
Kommunicate.init("39edc752b6f62edc078c926727718eefc", {
  popupWidget: true,
  automaticChatOpenOnNavigation: true,
});

export default function App() {
  return (
    <div>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <Chat />
    </div>
  );
}

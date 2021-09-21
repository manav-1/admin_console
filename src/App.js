import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import RootStack from "./components/navigation/RootStack";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import Chat from "./components/screens/Chat";
Kommunicate.init("39edc752b6f62edc078c926727718eefc", {
  popupWidget: true,
  automaticChatOpenOnNavigation: true,
});

export default function App() {
  useEffect(() => {
    alert(
      "Instead of using the Back Button , use the back button present on the website"
    );
  });
  return (
    <div>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <Chat />
    </div>
  );
}

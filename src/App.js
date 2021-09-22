import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import Chat from "./components/screens/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashNav from "./components/navigation/Dashboard";
import Logo from "./components/screens/Logo";
import Landing from "./components/screens/Landing";
import PlacementProcedure from "./components/screens/PlacementProcedure";
Kommunicate.init("39edc752b6f62edc078c926727718eefc", {
  popupWidget: true,
  automaticChatOpenOnNavigation: true,
});

export default function App() {
  // * Added the React Router
  return (
    <NavigationContainer>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <DashNav />
          </Route>
          <Route path="/procedure">
            <PlacementProcedure />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/">
            <Logo />
          </Route>
        </Switch>
        <Chat />
      </Router>
    </NavigationContainer>
  );
  /*  
TODO This is a working code
 return (
    <div>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <Chat />
    </div>
  ); */
}

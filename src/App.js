import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashNav from "./components/navigation/Dashboard";
import Logo from "./components/screens/Logo";
import Landing from "./components/screens/Landing";
import PlacementProcedure from "./components/screens/PlacementProcedure";
import NotFound from './components/screens/NotFound';

export default function App() {
  // * Added the React Router
  return (
    <NavigationContainer>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <DashNav />
          </Route>
          <Route exact path="/procedure">
            <PlacementProcedure />
          </Route>
          <Route exact path="/landing" title="Landing">
            <Landing />
          </Route>
          <Route exact path="/">
            <Logo />
          </Route>
          <Route component = {NotFound}/>
        </Switch>
      </Router>
    </NavigationContainer>
  );
}

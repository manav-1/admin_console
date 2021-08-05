import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../navigation/Dashboard";
import Landing from "../screens/Landing";
import Procedure from "../screens/PlacementProcedure";
const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Procedure"
        component={Procedure}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

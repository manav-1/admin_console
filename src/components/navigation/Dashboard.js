import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp"; //eslint-disable-line
import PortalStack from "./PortalStack";

const Stack = createStackNavigator();

export default function DashNav({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Portal"
        component={PortalStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

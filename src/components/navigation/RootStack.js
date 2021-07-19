import { createStackNavigator } from "@react-navigation/stack";
import Logo from '../screens/Logo'
import LandingStack from './LandingStack'
const Stack = createStackNavigator()

export default function RootStack(){
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          component={Logo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingStack"
          component={LandingStack}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    );
}
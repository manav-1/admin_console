import "../css/dashboard.css";
import logo from "../../assets/logo.png";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp"; //eslint-disable-line
import PortalStack from "./PortalStack";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
//eslint-disable-next-line
function App({ navigation }) {
  useEffect(() => {
    (async () => {
      //checking if any user is already logged or not
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");

      if (loggedUserId) {
        navigation.navigate("Portal");
      }
    })();
    //   });
  }, [navigation]);
  return (
    <div className="dash-container">
      <button
        onClick={() => navigation.navigate("Landing")}
        className="header-logo"
      >
        <img src={logo} alt="Logo" />
      </button>
      <div className="dash-heading">
        <h1>Start@KMV</h1>
        <p>
          The Placement Cell of Keshav Mahavidyalaya
          <br />
          Placement Portal
        </p>
      </div>
      <div className="dash-btn-container">
        <button onClick={() => navigation.navigate("Login")}>Login</button>
        <button onClick={() => navigation.navigate("SignUp")}>SignUp</button>
      </div>
    </div>
  );
}

export default function DashNav({ navigation }) {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="DashBoard"
        component={App}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Portal"
        component={PortalStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

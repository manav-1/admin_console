import '../css/logo.css'
import { useEffect } from "react";
import login from "../../assets/logo.gif";

export default function Logo({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LandingStack");
    }, 5);
  });
  return (
    <div className="container">
      <img src={login} alt="Hello" />
      <h2>START@KMV<br/>The Placement Cell of Keshav Mahavidyalaya</h2>
    </div>
  );
}

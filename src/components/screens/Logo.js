import "../css/logo.css";
import { useEffect } from "react";
import login from "../../assets/logo.gif";

export default function Logo({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LandingStack");
    }, 3000);
  });
  return (
    <div
      style={{ backgroundColor: "#fff", width: "100%", height: "50rem" }}
      className="d-flex align-items-center"
    >
      <div style={{ width: "50rem", margin: "auto", textAlign: "center" }}>
        <img
          style={{ height: "25rem", width: "25rem" }}
          src={login}
          alt="Hello"
        />
        <h4 style={{ fontFamily: "karla" }}>
          START@KMV
          <br />
          The Placement Cell of Keshav Mahavidyalaya
        </h4>
      </div>
    </div>
  );
}

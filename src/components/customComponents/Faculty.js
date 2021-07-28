import { Dimensions } from "react-native";
import MobileComponent from "../customComponents/MobileComponent";
import LaptopComponent from "../customComponents/LaptopComponent";
export default function Faculty() {
  return (
    <div
      id="Faculty"
      style={{ width: "100%", margin: "auto" }}
      className="landing-about row"
    >
      <h1 className="col-sm-12">Faculty</h1>
      {Dimensions.get("screen").width > 576 ? (
        <LaptopComponent />
      ) : (
        <MobileComponent />
      )}
    </div>
  );
}

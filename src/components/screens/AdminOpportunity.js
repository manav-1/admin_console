import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import companyLogo from "../../assets/logo192.png";
import AdminPlacementOppurtunity from "../customComponents/AdminPlacementOpportunity";
import SnackBar from "../customComponents/SnackBar";
import firebase from "../FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Placements({ navigation }) {
  const [pOpp, setPOpp] = useState([]);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

  useEffect(() => {
    async function fetchOpportunities() {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      if (loggedUserId) {
        const dbRef = firebase.database().ref("placements");
        dbRef.on("value",
          function (resp) {
            const data = resp.val();
            const opportunities = [];
            for (var id in data) {
              opportunities.push({ id, ...data[id] });
            }
            setPOpp(opportunities);
          },
          (error) => {
            displaySnackBar("error", "Failed to fetch placements");
          }
        );
      }
    }
    fetchOpportunities();
  }, []);

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  //function to hide snackbar
  function hideSnackBar() {
    setSnackBarVisible(false);
  }

  function markDone(index) {
    const node = firebase.database().ref("placements").child(pOpp[index].id);
    node.remove();
    // pOpp.splice(index, 1);
    // setPOpp(pOpp);
  }
  return (
    <div>
      <ScrollView>
        {pOpp.map((item, index) => {
          return (
            <AdminPlacementOppurtunity
              img={"https://picsum.photos/200/300" || companyLogo}
              companyName={item.name}
              role={item.profile}
              onRemoveClicked={() => markDone(index)}
            />
          );
        })}
      </ScrollView>
      {snackBarVisible ? (
        <SnackBar
          isVisible={snackBarVisible}
          text={snackBarText}
          type={snackBarType}
          onClose={hideSnackBar}
        />
      ) : null}
    </div>
  );
}

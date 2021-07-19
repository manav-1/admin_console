import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import PlacementOppurtunity from "../customComponents/PlacementOppurtunity";
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
        dbRef.on(
          "value",
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

  async function onApplyClick(index) {
    const loggedUserId = await AsyncStorage.getItem("loggedUserId");
    console.log(pOpp[index]);
    const dbRef = firebase.database().ref("placements/" + pOpp[index].id);
    const userRef = firebase.database().ref("users/" + loggedUserId);
    console.log(dbRef, userRef, loggedUserId);
  }

  //function to hide snackbar
  function hideSnackBar() {
    setSnackBarVisible(false);
  }
  return (
    <ScrollView>
      <div className="d-flex justify-content-around">
      <div className="row placements">
        {pOpp.map((item, index) => {
          return (
            <PlacementOppurtunity
              key={index}
              img={item.companyImage || "https://picsum.photos/200/300"}
              jd={item.jd}
              companyName={item.name}
              role={item.profile}
              onApply={() => onApplyClick(index)}
            />
          );
        })}
        </div>

        {snackBarVisible ? (
          <SnackBar
            isVisible={snackBarVisible}
            text={snackBarText}
            type={snackBarType}
            onClose={hideSnackBar}
          />
        ) : null}
      </div>
    </ScrollView>
  );
}

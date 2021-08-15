import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import PlacementOppurtunity from "../customComponents/PlacementOppurtunity";
import SnackBar from "../customComponents/SnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Placements({ navigation }) {
  const [pOpp, setPOpp] = useState([]);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

  useEffect(() => {
    let isMounted = true; //eslint-disable-line
    async function fetchOpportunities() {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      if (loggedUserId) {
        axios
          .get(`https://placement-portal-server.herokuapp.com/placements?loggedUserId=${loggedUserId}`)
          .then((resp) => {
            setPOpp([...resp.data]);
          });
      }
    }

    fetchOpportunities();
    return () => {
      isMounted = false; //eslint-disable-line
    };
  }, []);

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  async function onApplyClick(index) {
    const loggedUserId = await AsyncStorage.getItem("loggedUserId");

    axios
      .get(
        `https://placement-portal-server.herokuapp.com/applyPlacements?pid=${pOpp[index].id}&uid=${loggedUserId}&cName=$${pOpp[index].name}&profile=${pOpp[index].profile}`
      )
      .then((resp) => {
        if (resp.data) {
          displaySnackBar("success", "Applied Successfully");
        } else {
          displaySnackBar("error", " Couldn't Apply Please try Again later");
        }
      });
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
                deadline={item.deadline}
                companySite={item.companySite}
                linkedinUrl={item.linkedin}
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

import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import PlacementOppurtunity from "../customComponents/PlacementOppurtunity";
//eslint-disable-next-line
import SnackBar from "../customComponents/SnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApplyModal from "../customComponents/ApplyModal";
import axios from "axios";

export default function Placements({ navigation }) {
  const [pOpp, setPOpp] = useState([]);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");
  const [applyClicked, setApplyClicked] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [pId, setPId] = useState(null);
  const [pName, setPName] = useState(null);
  const [mProfile, setMProfile] = useState(null);

  useEffect(() => {
    let isMounted = true; //eslint-disable-line
    async function fetchOpportunities() {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      if (loggedUserId) {
        axios
          .get(
            `https://placement-portal-server.herokuapp.com/placements?loggedUserId=${loggedUserId}`
          )
          .then((resp) => {
            if (isMounted) {
              setPOpp([...resp.data]);
            }
          });
      }
    }

    fetchOpportunities();
    return () => {
      isMounted = false;
    };
  }, []);

  var onApplyClick = async (index) => {
    console.log("apply is clicked");
    const loggedUserId = await AsyncStorage.getItem("loggedUserId");

    axios
      .get(
        `https://placement-portal-server.herokuapp.com/checkApplied?loggedUserId=${loggedUserId}&pid=${pOpp[index].id}`
      )
      .then((resp) => {
        if (resp.data.flag === "Applied") {
          displaySnackBar("error", "You have already applied to this profile");
        } else {
          setUserProfile(resp.data);
          if (
            resp.data.tenth === undefined ||
            resp.data.twelve === undefined ||
            resp.data.resume === undefined ||
            resp.data.resumeName === undefined ||
            resp.data.college === undefined
          ) {
            displaySnackBar(
              "error",
              "Please fill in all the fields of profile first"
            );
          } else {
            setPId(pOpp[index].id);
            setPName(pOpp[index].name);
            setMProfile(pOpp[index].profile);
            setApplyClicked(true);
          }
        }
      });
  };
  //eslint-disable-next-line
  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  //function to hide snackbar
  //eslint-disable-next-line
  function hideSnackBar() {
    setSnackBarVisible(false);
  }
  function hideModal() {
    setApplyClicked(false);
  }
  return (
    <ScrollView style={{ height: "100%", position: "relative" }}>
      <div
        style={{ position: "relative" }}
        className="d-flex justify-content-around"
      >
        <div
          style={{
            display:
              Dimensions.get("screen").width > 768
                ? "flex"
                : applyClicked
                ? "none"
                : "flex",
          }}
          className="row placements py-2"
        >
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
        {applyClicked ? (
          <ApplyModal
            profileData={userProfile}
            applyClicked={applyClicked}
            hideModal={hideModal}
            pid={pId}
            pName={pName}
            pProfile={mProfile}
          />
        ) : null}

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

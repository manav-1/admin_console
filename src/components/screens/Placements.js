import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import PlacementOppurtunity from "../customComponents/PlacementOppurtunity";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApplyModal from "../customComponents/ApplyModal";
import axios from "axios";

export default function Placements({ navigation }) {
  const [pOpp, setPOpp] = useState([]);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("error");
  const [applyClicked, setApplyClicked] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [pId, setPId] = useState(null);
  const [pName, setPName] = useState(null);
  const [mProfile, setMProfile] = useState(null);

  useEffect(() => {
    document.title = "Placement Portal | Placements ";
    let isMounted = true; //eslint-disable-line
    async function fetchOpportunities() {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      if (loggedUserId) {
        axios
          .get(`https://placement-portal-server.herokuapp.com/placements?loggedUserId=${loggedUserId}`)
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

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={snackBarVisible}
          autoHideDuration={3000}
          onClose={() => {
            setSnackBarVisible(false);
          }}
        >
          <Alert
            onClose={() => {
              setSnackBarVisible(false);
            }}
            severity={snackBarType}
          >
            {snackBarText}
          </Alert>
        </Snackbar>
      </div>
    </ScrollView>
  );
}

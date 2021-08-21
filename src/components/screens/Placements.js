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
    const loggedUserId = await AsyncStorage.getItem("loggedUserId");
    if (loggedUserId) {
      axios
        .get(
          `https://placement-portal-server.herokuapp.com/placements?loggedUserId=${loggedUserId}`
        )
        .then((resp) => {
          setPOpp([...resp.data]);
        });
    }
    if (pOpp[index].applicants) {
      try {
        if (!Object.keys(pOpp[index].applicants)[0].includes(loggedUserId)) {
          await axios
            .get(
              `https://placement-portal-server.herokuapp.com/fetchProfile?uid=${loggedUserId}`
            )
            .then((resp) => {
              setUserProfile(resp.data);
            });

          setPId(pOpp[index].id);
          setPName(pOpp[index].name);
          setMProfile(pOpp[index].profile);

          setApplyClicked(true);
        } else {
          displaySnackBar(
            "error",
            "You Have already applied to this Opportunity"
          );
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      await axios
        .get(
          `https://placement-portal-server.herokuapp.com/fetchProfile?uid=${loggedUserId}`
        )
        .then((resp) => {
          setUserProfile(resp.data);
        });

      setPId(pOpp[index].id);
      setPName(pOpp[index].name);
      setMProfile(pOpp[index].profile);

      setApplyClicked(true);
    }
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
    <ScrollView style={{ height: "100vh", position: "relative" }}>
      <div className="d-flex justify-content-around">
        <div
          style={{
            display:
              Dimensions.get("screen").width > 768
                ? "flex"
                : applyClicked
                ? "none"
                : "flex",
          }}
          className="row placements"
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

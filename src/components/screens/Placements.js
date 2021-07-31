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
    let isMounted = true; //eslint-disable-line
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
            if (isMounted) {
              setPOpp(opportunities);
            }
          },
          (error) => {
            displaySnackBar("error", "Failed to fetch placements");
          }
        );
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
    const dbRef = firebase.database().ref("placements/" + pOpp[index].id);
    firebase
      .database()
      .ref("users/" + loggedUserId)
      .once("value")
      .then((resp) => {
        var data = resp.val();
        if (data) {
          var name = data.uName;
          var mobile = data.uMobile;
          var email = data.uEmail;
          var resume = data.resume.uriResume;
          var description = data.desc;
          var stream = data.stream;
          var tenth = data.tenth;
          var twelve = data.twelve;
          var college = data.college;
          var projects = data.projects;
          dbRef
            .child("applicants/" + loggedUserId + "_" + name + "_" + mobile)
            .set(
              {
                name: name,
                mobile: mobile,
                resume: resume,
                email: email,
                description: description,
                stream: stream,
                tenth: tenth,
                twelve: twelve,
                college: college,
                projects: projects,
              },
              (err) => {
                if (err) {
                  displaySnackBar("error", "Couldn't Apply , Please try again");
                } else {
                  fetch(
                    `https://manavar81101.pythonanywhere.com/?email=${email}&companyname=${pOpp[index].name}&profile=${pOpp[index].profile}`
                  );
                  displaySnackBar("success", "Applied successfully");
                }
              }
            );
        }
      })
      .catch((err) => {
        console.log(err);
        displaySnackBar("error", "Couldn't Apply , Please try again");
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

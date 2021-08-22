import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SnackBar from "../customComponents/SnackBar";
import axios from "axios";

export default function ApplyModal({
  applyClicked,
  profileData,
  hideModal,
  pid,
  pName,
  pProfile,
}) {
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");
  async function onModalApplyClick(index) {
    const loggedUserId = await AsyncStorage.getItem("loggedUserId");
    axios
      .get(
        `https://placement-portal-server.herokuapp.com//applyPlacements?pid=${pid}&uid=${loggedUserId}&cName=$${pName}&profile=${pProfile}`
      )
      .then((resp) => {
        console.log(resp.data)
        if (resp.data) {
          displaySnackBar("success", "Applied Successfully");
          setTimeout(() => {
            hideModal();
          }, 2000);
        } else {
          displaySnackBar("error", " Couldn't Apply Please try Again later");
        }
      });
  }
  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }
  function hideSnackBar() {
    setSnackBarVisible(false);
  }
  return applyClicked ? (
    <View style={styles.container}>
      <div className="m-3">
        <p className="h5 mb-3 ">
          Are you sure you want to apply to this profile
        </p>
        <p className="h6 py-2">
          <b>Name: </b> {profileData.uName}
        </p>

        <p className="h6 py-2">
          <b>Email: </b> {profileData.uEmail}
        </p>
        <p className="h6 py-2">
          <b>Company : </b> {pName}
        </p>
        <p className="h6 py-2">
          <b>Profile : </b> {pProfile}
        </p>
        <p className="h6 py-2">
          <b>College GPA: </b> {profileData.college}
        </p>
        <p className="h6 py-2">
          <b>Resume : </b>
          <a className="text-dark" href={profileData.resume.uriResume} download>
            {profileData.resumeName}
          </a>
        </p>
        <p className="h6 py-2">
          <b>Tenth Marks: </b> {profileData.tenth}
        </p>
        <p className="h6 py-2">
          <b>12th Marks : </b> {profileData.twelve}
        </p>
        <p className="h6 py-2">
          <b>Mobile : </b> {profileData.mobile}
        </p>
        {profileData.projects ? (
          <>
            <p className="h6 py-2">
              <b>Projects : </b>
            </p>
            <div>
              {profileData.projects.map((item, index) => {
                return (
                  <p
                    style={{ display: "inline" }}
                    key={index}
                    className="h6 mx-2 py-2"
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark"
                      href={item.url}
                    >
                      {item.name}
                    </a>
                  </p>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
      <div
        style={{ position: "absolute", bottom: 20, width: "100%" }}
        className="d-flex justify-content-around"
      >
        <button
          style={{
            fontSize: "1.2rem",
            borderRadius: 10,
          }}
          className="btn btn-danger text-white"
          onClick={hideModal}
        >
          Close
        </button>

        <button
          style={{
            fontSize: "1.2rem",
            borderRadius: 10,
            backgroundColor: "#49A0AE",
            color: "#fff",
          }}
          className="btn "
          onClick={onModalApplyClick}
        >
          Apply
        </button>
      </div>
      {snackBarVisible ? (
        <SnackBar
          isVisible={snackBarVisible}
          text={snackBarText}
          type={snackBarType}
          onClose={hideSnackBar}
        />
      ) : null}
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    top: "5vh",
    height: "80vh",
    width: Dimensions.get("screen").width > 768 ? "40%" : "80%",
    backgroundColor: "#aaa",
    borderRadius: 10,
  },
});

import React, { useState } from "react";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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
        `https://placement-portal-server.herokuapp.com/applyPlacements?pid=${pid}&uid=${loggedUserId}&cName=$${pName}&profile=${pProfile}`
      )
      .then((resp) => {
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
  return (
    <Modal
      open={applyClicked}
      onClose={hideModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: Dimensions.get("screen").width > 768 ? "40%" : "80%",
          bgcolor: "#c8d8e4",
          border: "2px solid #002c3e",
          boxShadow: 24,
          p: 5,
        }}
      >
        <div className="applyModal">
          <p className="h5 mb-3 ">
            Are you sure you want to apply to this profile
          </p>
          <p className="h6 py-2">
            <b>Name: </b> {profileData.name}
          </p>

          <p className="h6 py-2">
            <b>Email: </b> {profileData.email}
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
            <a
              className="text-dark"
              href={profileData.resume.uriResume}
              download
            >
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
          style={{ width: "100%", marginTop: "1.5rem" }}
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
      </Box>
    </Modal>
  );
}

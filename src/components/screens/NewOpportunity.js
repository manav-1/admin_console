import "../css/newopp.css";
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function NewOpportunity({ navigation }) {

  const [companyName, setCompanyName] = useState("");
  const [profile, setProfile] = useState("");
  const [companyImage, setCompanyImage] = useState("");
  const [jd, setJd] = useState("");
  const [deadline, setDeadline] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [cSite, setCSite] = useState("");

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("error");
  useEffect(() => {
    document.title = "Placement Portal | New Opportunity";
  },[])

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }
  function addPlacementOpportunity() {
    if (
      !(
        companyImage === "" ||
        companyImage === "" ||
        profile === "" ||
        jd === "" ||
        deadline === "" ||
        linkedin === ""
      )
    ) {
      var newTask = {
        name: companyName,
        profile: profile,
        jd: jd,
        companyImage: companyImage,
        deadline: deadline,
        linkedin: linkedin,
        companySite: cSite,
      };
      axios
        .post(
          `https://placement-portal-server.herokuapp.com/newOppurtunity`,
          newTask
        )
        .then((resp) => {
          displaySnackBar("success", "Added New Opportunity Successfully");
        })
        .catch((err) => {
          displaySnackBar(
            "error",
            "Failed to add Opportunity, Please try again later"
          );
        });
      setCompanyName("");
      setProfile("");
      setDeadline("");
      setCompanyImage("");
      setJd("");
      setLinkedIn("");
      setCSite("");
    } else {
      displaySnackBar("error", "Please Fill all the fields");
    }
  }

  return (
    <div className="newOpp">
      <h4>CompanyName</h4>
      <input
        type="text"
        placeholder="Enter Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <h4>Profile</h4>
      <input
        type="text"
        placeholder="Enter Profile"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
      />
      <h4>Company Image</h4>
      <input
        type="text"
        placeholder="Enter image url"
        value={companyImage}
        onChange={(e) => setCompanyImage(e.target.value)}
      />
      <h4>Company LinkedIn Url</h4>
      <input
        type="text"
        placeholder="Enter image url"
        value={linkedin}
        onChange={(e) => setLinkedIn(e.target.value)}
      />
      <h4>Company Website</h4>
      <input
        type="text"
        placeholder="Enter image url"
        value={cSite}
        onChange={(e) => setCSite(e.target.value)}
      />
      <h4>Job Description</h4>
      <input
        type="text"
        placeholder="Enter jd url"
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />
      <h4>Deadline</h4>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <h4> </h4>
      <button className="removeButton" onClick={addPlacementOpportunity}>
        Add new Opportunity
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
  );
}

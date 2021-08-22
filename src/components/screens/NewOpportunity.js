import "../css/newopp.css";
import React, { useState } from "react";
import SnackBar from "../customComponents/SnackBar";
import axios from 'axios'

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
  const [snackBarType, setSnackBarType] = useState("");

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }
  function hideSnackBar() {
    setSnackBarVisible(false);
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
      axios.post(`https://placement-portal-server.herokuapp.com/newOppurtunity`, newTask);
      setCompanyName("");
      setProfile("");
      setDeadline("");
      setCompanyImage("");
      setJd("");
      setLinkedIn("");
      setCSite("");
    }
    else{
      displaySnackBar("error", "Please Fill all the fields")
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

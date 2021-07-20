import "../css/newopp.css";
import React, { useState } from "react";
import firebase from "../FirebaseConfig";

export default function NewOpportunity({ navigation }) {
  const [companyName, setCompanyName] = useState("");
  const [profile, setProfile] = useState("");
  const [companyImage, setCompanyImage] = useState("");
  const [jd, setJd] = useState("");
  const [deadline, setDeadline] = useState("");

  function addPlacementOpportunity() {
    const dbRef = firebase.database().ref("placements");
    var newTask = {
      name: companyName,
      profile: profile,
      jd: jd,
      companyImage: companyImage,
      deadline: deadline,
    };
    dbRef.push(newTask);
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
      </div>
  );
}

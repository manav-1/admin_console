import React, { useState } from "react";
import firebase from "../FirebaseConfig"

export default function NewOpportunity({ navigation }) {
  const [companyName, setCompanyName] = useState("");
  const [profile,setProfile] = useState("")
  const [companyImage,setCompanyImage] = useState("")
  const [jd,setJd] = useState("")


  function addPlacementOpportunity(){
    const dbRef = firebase.database().ref('placements')
    var newTask = {
        name:companyName,
        profile: profile,
        jd: jd,
        companyImage: companyImage,
    }
    dbRef.push(newTask)
  }

  return (
    <div>
      <label>CompanyName</label>
      <input
        type="text"
        placeholder="Enter Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <label>Profile</label>
      <input
        type="text"
        placeholder="Enter Profile"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
      />
      <label>Company Image</label>
      <input
        type="text"
        placeholder="Enter image url"
        value={companyImage}
        onChange={(e) => setCompanyImage(e.target.value)}
      />
      <label>Job Description</label>
      <input
        type="text"
        placeholder="Enter jd url"
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />
      <button onClick={addPlacementOpportunity}>Add new Opportunity</button>
    </div>
  );
}

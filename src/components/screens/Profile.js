import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import "../css/profile.css";
import edit from "../../assets/edit.png";
import profile from "../../assets/user.png";
import SnackBar from "../customComponents/SnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import validator from "validator";

// import * as ImagePicker from "expo-image-picker";

export default function Profile({ navigation }) {
  const [profilePic, setProfilePic] = useState({ uri: profile });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [stream, setStream] = useState("");
  const [resume, setResume] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [tenth, setTenth] = useState("");
  const [twelve, setTwelve] = useState("");
  const [college, setCollege] = useState("");
  const [projName, setProjName] = useState("");
  const [projUrl, setProjUrl] = useState("");
  const [projects, setProjects] = useState([]);

  // const [firebase, setFirebase] = useState(null);

  const [uploadImage, setUploadImage] = useState(false);
  const [uploadResume, setUploadResume] = useState(false);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

  useEffect(() => {
    async function fetchUserProfile() {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      axios
        .get(
          `https://placement-portal-server.herokuapp.com/fetchProfile?uid=${loggedUserId}`
        )
        .then((res) => {
          const data = res.data;
          setName(data.name);
          setEmail(data.email);
          setMobile(data.mobile);
          setStream(data.stream);
          setDescription(data.desc);
          setTenth(data.tenth);
          setTwelve(data.twelve);
          setCollege(data.college);
          if (data.projects) {
            setProjects(data.projects);
          }

          if (data.profilePic) {
            setProfilePic(data.profilePic);
          }
          setResumeName(data.resumeName);
        })
        .catch((error) => {
          displaySnackBar("error", "Failed to Fetch Profile");
        });
    }
    fetchUserProfile();
  }, []);

  async function handleProfilePicEditBtnClick() {
    document
      .getElementById("file")
      .addEventListener("change", function (event) {
        try {
          setProfilePic(event.target.files[0]);
          setUploadImage(true);
        } catch (e) {}
      });
  }
  async function uploadImageInFirebase(loggedUserId) {
    const imgName = loggedUserId + ".jpg";
    var formData = new FormData();
    formData.append("type", "profile_image");
    formData.append("file", profilePic);
    formData.append("name", imgName);
    formData.append("uid", loggedUserId);
    axios
      .post(
        "https://placement-portal-server.herokuapp.com/uploadFirebase",
        formData
      )
      .then((response) => {
        if (response.data) {
          setProfilePic({ uri: response.data });
          saveUpdatedProfile(loggedUserId, { uri: response.data });
        }
      })
      .catch((error) => {
        displaySnackBar("error", "Failed to Upload Image, Please try again");
      });
  }

  async function saveProfile() {
    try {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      if (uploadImage) {
        await uploadImageInFirebase(loggedUserId)
          .then(() => {
            displaySnackBar("success", "Image Successfully Uploaded");
          })
          .catch((error) => {
            displaySnackBar("error", "Failed to upload Image");
          });

        setUploadImage(false);
      } else {
        saveUpdatedProfile(loggedUserId, profilePic);
      }
    } catch (error) {
      displaySnackBar("error", "Failed to Update Profile");
    }
  }
  function saveUpdatedProfile(loggedUserId, profilePicUri) {
    if (
      stream === undefined ||
      stream === "" ||
      description === undefined ||
      tenth === undefined ||
      twelve === undefined ||
      college === undefined
    ) {
      displaySnackBar(
        "error",
        "Please fill up all fields before updating profile"
      );
    } else {
      const updatedProfile = {
        name: name,
        email: email,
        profilePic: profilePicUri,
        stream: stream,
        desc: description,
        tenth: tenth,
        twelve: twelve,
        college: college,
        projects: projects,
      };
      axios
        .post("https://placement-portal-server.herokuapp.com/updateProfile", [
          loggedUserId,
          updatedProfile,
        ])
        .then((res) => {
          if (res.data) {
            displaySnackBar("success", "Updated Profile Successfully");
          } else {
            displaySnackBar("error", "Failed to update profile");
          }
        });
    }
  }

  async function handleResumeEdit(event) {
    setResumeName(event.target.files[0].name);
    setResume(event.target.files[0]);
    setUploadResume(true);
  }

  async function updateResume() {
    try {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      if (uploadResume) {
        uploadResumeInFirebase(loggedUserId)
          .then(() => {
            displaySnackBar("success", "Resume Updated Successfully");
          })
          .catch((error) => {
            displaySnackBar("error", "Failed to update Resume");
          });
      }
    } catch (e) {
      displaySnackBar("error", "Failed to Update Resume");
    }
  }

  async function uploadResumeInFirebase(loggedUserId) {
    const resumeName = loggedUserId + ".pdf";
    var formData = new FormData();
    formData.append("type", "resume");
    formData.append("file", resume);
    formData.append("name", resumeName);
    formData.append("uid", loggedUserId);
    axios
      .post(
        "https://placement-portal-server.herokuapp.com/uploadFirebase",
        formData
      )
      .then((response) => {
        if (response.data) {
          setResume({ uriResume: response.data });
          saveUpdatedResume(loggedUserId, { uriResume: response.data });
        }
      })
      .catch((error) => {
        displaySnackBar("error", "Failed to Save Resume, Please try Again");
      });
  }

  function saveUpdatedResume(loggedUserId, resume) {
    axios
      .post("https://placement-portal-server.herokuapp.com/updateResume", [
        loggedUserId,
        { resume: resume, resumeName: resumeName },
      ])
      .then((res) => {
        if (res.data) {
          displaySnackBar("Updated Resume Successfully");
        } else {
          displaySnackBar("error", "Failed to update resume");
        }
      });
    saveProfile();
  }
  function addProject() {
    if (projName === "") {
      displaySnackBar("error", "Please fill the name of the project");
    } else if (
      !validator.isURL(projUrl) ||
      !projUrl.startsWith("http") ||
      !projUrl.startsWith("https")
    ) {
      displaySnackBar("error", "Please fill a valid http/https Url");
    } else {
      projects.push({ name: projName, url: projUrl });
      setProjects([...projects]);
      setProjName("");
      setProjUrl("");
    }
  }

  //logout
  async function logoutClicked() {
    try {
      await AsyncStorage.removeItem("loggedUserEmail");
      await AsyncStorage.removeItem("loggedUserId");
      displaySnackBar("success", "Logged out Successfully");
      navigation.navigate("Landing");
    } catch (exception) {
      displaySnackBar("error", "Failed to log out");
    }
  }

  // hiding and displaying SnackBar
  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  //function to hide snackbar
  function hideSnackBar() {
    setSnackBarVisible(false);
  }
  return (
    <ScrollView>
      <div className="profile-container">
        <p>Profile</p>
        <div className="profile-image">
          <img
            className="profile-img"
            src={uploadImage ? URL.createObjectURL(profilePic) : profilePic.uri}
            alt="Profile"
          ></img>
          <button
            onClick={handleProfilePicEditBtnClick}
            className="profile-edit-button"
          >
            <input
              id="file"
              className="profileInput"
              type="file"
              accept="image/*"
            />
            <label htmlFor="file">
              <img src={edit} alt="edit"></img>
            </label>
          </button>
        </div>
        <div className="form-container">
          <h4>Name</h4>
          <input
            type="text"
            readOnly
            value={name}
            onInput={(val) => setName(val.target.value)}
          />
          <h4>Email</h4>
          <input type="email" readOnly value={email} />
          <h4>Mobile Number</h4>
          <input type="number" readOnly value={mobile} />
          <h4>Stream</h4>
          <select
            className="select-stream"
            value={stream}
            onChange={(val) => {
              setStream(val.target.value);
            }}
          >
            <option defaultValue disabled value="">
              Please Select a Course
            </option>
            <option value="BSc. Hons. Computer Science">
              BSc. Hons. Computer Science
            </option>
            <option value="BCom Hons">BCom Hons</option>
            <option value="BBA">BBA</option>
            <option value="Psychology Hons">Psychology Hons</option>
          </select>

          <h4>
            Enter 10<sup>th</sup>Marks
          </h4>
          <input
            type="text"
            value={tenth}
            onInput={(val) => setTenth(val.target.value)}
          />
          <h4>
            Enter 12<sup>th</sup>Marks
          </h4>
          <input
            type="text"
            value={twelve}
            onInput={(val) => setTwelve(val.target.value)}
          />
          <h4>Enter Collge CGPA</h4>
          <input
            type="text"
            value={college}
            onInput={(val) => setCollege(val.target.value)}
          />
          <h4>Additional Information</h4>
          <input
            type="text"
            value={description}
            onInput={(val) => setDescription(val.target.value)}
          />

          <h4>Enter your Projects</h4>
          <div className="projects d-flex align-items-center p-0">
            <input
              style={{ flex: 2 }}
              className="mr-3"
              placeholder="Enter Project Name"
              type="text"
              value={projName}
              onInput={(val) => setProjName(val.target.value)}
            />
            <input
              style={{ flex: 2 }}
              className="mx-3"
              placeholder="Enter Project Url"
              type="url"
              value={projUrl}
              onInput={(val) => setProjUrl(val.target.value)}
            />
            <button
              style={{
                backgroundColor: "black",
                width: "3rem",
                height: "3rem",
                color: "#fff",
                borderRadius: "50%",
              }}
              onClick={addProject}
            >
              +
            </button>
          </div>

          <div className="d-flex flex-row flex-wrap  projectContainer">
            {projects.map((item, index) => {
              return (
                <div
                  style={{ paddingRight: "1rem" }}
                  className="sProject d-flex flex-row pr-2 align-items-center"
                  key={index}
                >
                  <a
                    className="projectName "
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>{item.name}</p>
                  </a>
                  <button
                    className="text-dark delete"
                    onClick={() => {
                      projects.splice(index, 1);
                      setProjects([...projects]);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>

          <h4>Upload your Resume</h4>
          <input
            id="resume"
            type="file"
            accept=".pdf"
            onChange={handleResumeEdit}
          />
          <h4>{resumeName}</h4>
        </div>
        <div className="profile-button-container">
          <button className="logout" onClick={saveProfile}>
            Save Profile
          </button>
          <button className="logout" onClick={updateResume}>
            Update Resume
          </button>
          <button className="logout" onClick={logoutClicked}>
            Click me to logout
          </button>
        </div>
      </div>
      {snackBarVisible ? (
        <SnackBar
          isVisible={snackBarVisible}
          text={snackBarText}
          type={snackBarType}
          onClose={hideSnackBar}
        />
      ) : null}
    </ScrollView>
  );
}

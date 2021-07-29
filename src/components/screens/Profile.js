import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import "../css/profile.css";
import edit from "../../assets/edit.png";
import profile from "../../assets/user.png";
import SnackBar from "../customComponents/SnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../FirebaseConfig";
// import * as ImagePicker from "expo-image-picker";

export default function Profile({ navigation }) {
  const [profilePic, setProfilePic] = useState({ uri: profile });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState(null);
  const [stream, setStream] = useState(null);
  const [resume, setResume] = useState("");
  const [resumeName, setResumeName] = useState(null);
  const [tenth, setTenth] = useState("");
  const [twelve, setTwelve] = useState("");
  const [college, setCollege] = useState("");
  const [projName, setProjName] = useState("");
  const [projUrl, setProjUrl] = useState("");
  const [projects, setProjects] = useState([]);

  const [uploadImage, setUploadImage] = useState(false);
  const [uploadResume, setUploadResume] = useState(false);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

  useEffect(() => {
    async function fetchUserProfile() {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      const dbRef = firebase.database().ref("users");
      dbRef
        .child(loggedUserId)
        .once("value")
        .then((val) => {
          var data = val.val();
          setName(data.uName);
          setEmail(data.uEmail);
          setMobile(data.uMobile);
          setStream(data.stream);
          setDescription(data.desc);
          setTenth(data.tenth);
          setTwelve(data.twelve);
          setCollege(data.college)
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
          setProfilePic({ uri: URL.createObjectURL(event.target.files[0]) });
          setUploadImage(true);
        } catch (e) {}
      });
  }

  async function uploadImageInFirebase(loggedUserId) {
    const imageName = loggedUserId + ".jpg";

    const response = await fetch(profilePic.uri);
    const blob = await response.blob();

    //putting image in firebase
    const storageRef = firebase
      .app()
      .storage()
      .ref()
      .child("profile_image/" + imageName);
    const resp = storageRef.put(blob);
    resp.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {},
      () => {
        storageRef.getDownloadURL().then((downloadUrl) => {
          setProfilePic({ uri: downloadUrl });

          //updating the uploaded image url in firebase db
          saveUpdatedProfile(loggedUserId, { uri: downloadUrl });
        });
      }
    );

    return resp;
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
      console.log(error);
    }
  }
  function saveUpdatedProfile(loggedUserId, profilePicUri) {
    const dbRef = firebase.database().ref("users/");
    if (
      stream === undefined ||
      description === undefined ||
      tenth === undefined ||
      twelve === undefined ||
      college === undefined
    ) {
      console.log(stream, description, tenth, twelve, college);
      displaySnackBar(
        "error",
        "Please fill up all fields before updating profile"
      );
    } else {
      dbRef.child(loggedUserId).update(
        {
          uName: name,
          uEmail: email,
          profilePic: profilePicUri,
          stream: stream,
          desc: description,
          tenth:tenth,
          twelve:twelve,
          college:college,
          projects: projects,
        },
        (error) => {
          if (error) {
            displaySnackBar("error", "Failed to update profile");
          } else {
            displaySnackBar("success", "Profile updated");
          }
        }
      );
    }
  }

  async function handleResumeEdit(event) {
    try {
      setResumeName(event.target.files[0].name);
      setResume({ uri: URL.createObjectURL(event.target.files[0]) });
      setUploadResume(true);
    } catch (e) {}
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
    } catch {
      displaySnackBar("error", "Failed to Update Resume");
    }
  }
  async function uploadResumeInFirebase(loggedUserId) {
    const resumeName = loggedUserId + ".pdf";
    const resp = await fetch(resume.uri);
    const blob = await resp.blob();

    const storageRef = firebase
      .storage()
      .ref()
      .child("resume/" + resumeName);
    const response = storageRef.put(blob);
    response.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        displaySnackBar("error", "Failed to Upload Resume");
      },
      () => {
        storageRef.getDownloadURL().then((downloadUrl) => {
          setResume({ uriResume: downloadUrl });

          //updating the uploaded image url in firebase db
          saveUpdatedResume(loggedUserId, { uriResume: downloadUrl });
        });
      }
    );

    return resp;
  }

  function saveUpdatedResume(loggedUserId, resume) {
    const usersDbRef = firebase.app().database().ref("users/");
    usersDbRef
      .child(loggedUserId)
      .update({ resume: resume, resumeName: resumeName });
    saveProfile();
  }
  function addProject() {
    if (projName === "") {
      displaySnackBar("error", "Please fill the name of the project");
    } else {
      projects.push({ name: projName, url: projUrl });
      setProjects([...projects]);
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
            src={profilePic.uri || profile}
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
          <input
            type="email"
            value={email}
            onInput={(val) => setEmail(val.target.value)}
          />
          <h4>Mobile Number</h4>
          <input
            type="number"
            value={mobile}
            onInput={(val) => setMobile(val.target.value)}
          />
          <h4>Stream</h4>
          <select
            value={stream}
            onChange={(val) => {
              console.log(val.target.value);
              setStream(val.target.value);
            }}
          >
            <option disabled>Please Select a Course</option>
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
              type="text"
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

          <div className="d-flex flex-row flex-wrap projectContainer">
            {projects.map((item, index) => {
              return (
                <div className="sProject" key={index}>
                  <a
                    className="projectName "
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>{item.name}</p>
                  </a>
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

import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import AdminPlacementOppurtunity from "../customComponents/AdminPlacementOpportunity";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export default function Placements({ navigation }) {
  const [pOpp, setPOpp] = useState([]);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("error");

  useEffect(() => {
    document.title = "Placement Portal | Admin Opportunities"
    async function fetchOpportunities() {
      const loggedUserId = await AsyncStorage.getItem("loggedUserId");
      if (loggedUserId) {
        axios
          .get(`https://placement-portal-server.herokuapp.com/placements?loggedUserId=${loggedUserId}`)
          .then((resp) => {
            if (resp.data === "Error") {
              displaySnackBar("error", "Failed to Fetch Placements");
            } else {
              setPOpp([...resp.data]);
            }
          })
          .catch((err) => {
            displaySnackBar(
              "error",
              "Failed to Fetch Placements, Please try again"
            );
          });
      }
    }
    fetchOpportunities();
  }, []);

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  function markDone(index) {
    axios
      .get(`https://placement-portal-server.herokuapp.com/deletePlacements?node=${pOpp[index].id}`)
      .then((resp) => {
        if (resp.data === "Error") {
          displaySnackBar(
            "error",
            "Failed to Delete the Placement, Please try again"
          );
        } else {
          setPOpp([...resp.data]);
        }
      });
  }

  function getApplicants(index) {
    axios
      .get(`https://placement-portal-server.herokuapp.com/applicants?pid=${pOpp[index].id}`)
      .then((resp) => {
        if (resp.data) {
          var data = resp.data;
          if (data) {
            var arr_data = [];
            for (var id in data) {
              arr_data.push(data[id]);
            }

            var arr_header =
              [
                "CollegeMarks",
                "Description",
                "Email",
                "Mobile",
                "Name",
                "Projects",
                "Resume",
                "Stream",
                "Marks in 10th",
                "Marks in 12th",
              ].join(",") + "\n";
            arr_data.forEach((obj) => {
              var projString = "";
              var projects = obj.projects;
              for (var i in projects) {
                projString +=
                  "Name :" + projects[i].name + ": " + projects[i].url + ";";
              }
              let row = [];
              for (var prop in obj) {
                if (prop === "projects") {
                  row.push(projString);
                } else {
                  row.push(obj[prop]);
                }
              }
              arr_header += row.join(",") + "\n";
            });
            let csvData = new Blob([arr_header], { type: "text/csv" });
            let csvUrl = URL.createObjectURL(csvData);

            let hiddenElement = document.createElement("a");
            hiddenElement.href = csvUrl;
            hiddenElement.target = "_blank";
            hiddenElement.download = "Applicants.csv";
            hiddenElement.click();
          }
        } else {
          displaySnackBar("error", "No Applicants for this Oppurtunity");
        }
      });
  }
  return (
    <ScrollView>
      <div className="d-flex justify-content-around">
        <div className="row placements">
          {pOpp.map((item, index) => {
            return (
              <AdminPlacementOppurtunity
                key={index}
                img={item.companyImage || "https://picsum.photos/200/300"}
                companyName={item.name}
                role={item.profile}
                onRemoveClicked={() => markDone(index)}
                onCheckApplicants={() => getApplicants(index)}
                deadline={item.deadline}
                companySite={item.companySite}
                linkedinUrl={item.linkedin}
              />
            );
          })}
        </div>

        <Snackbar
          open={snackBarVisible}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
    </ScrollView>
  );
}

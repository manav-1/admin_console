import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import AdminPlacementOppurtunity from "../customComponents/AdminPlacementOpportunity";
import SnackBar from "../customComponents/SnackBar";
import firebase from "../FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { cos } from "react-native-reanimated";

export default function Placements({ navigation }) {
  const [pOpp, setPOpp] = useState([]);

  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarText, setSnackBarText] = useState("");
  const [snackBarType, setSnackBarType] = useState("");

  useEffect(() => {
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
            setPOpp(opportunities);
          },
          (error) => {
            displaySnackBar("error", "Failed to fetch placements");
          }
        );
      }
    }
    fetchOpportunities();
  }, []);

  function displaySnackBar(type, text) {
    setSnackBarType(type);
    setSnackBarText(text);
    setSnackBarVisible(true);
  }

  //function to hide snackbar
  function hideSnackBar() {
    setSnackBarVisible(false);
  }

  function markDone(index) {
    const node = firebase.database().ref("placements").child(pOpp[index].id);
    node.remove();
  }

  function getApplicants(index) {
    const node = firebase.database().ref("placements").child(pOpp[index].id + "/applicants");
    node.once('value').then((resp)=>{
      var data = resp.val()
      if(data){
        var arr_data = [];
        for (var id in data) {
          arr_data.push(data[id]);
        }

        var arr_header = ['Additional Info','E-mail','Mobile','Name','Resume Url', 'Stream'].join(',')+'\n';
        arr_data.forEach((obj) => {
          let row = [];
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              row.push(obj[key]);
            }
          }
          arr_header += row.join(',') + "\n";
        });
        let csvData = new Blob([arr_header], { type: "text/csv" });
        let csvUrl = URL.createObjectURL(csvData);

        let hiddenElement = document.createElement("a");
        hiddenElement.href = csvUrl;
        hiddenElement.target = "_blank";
        hiddenElement.download = "Applicants.csv";
        hiddenElement.click();
      }
    })
  }
  return (
    <ScrollView>
      <div className="d-flex justify-content-around">
        <div className="row placements">
          {pOpp.map((item, index) => {
            return (
              <AdminPlacementOppurtunity
                img={item.companyImage || "https://picsum.photos/200/300"}
                companyName={item.name}
                role={item.profile}
                onRemoveClicked={() => markDone(index)}
                onCheckApplicants={() => getApplicants(index)}
                deadline={item.deadline}
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

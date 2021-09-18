import React from "react"; //eslint-disable-line
import { Dimensions } from "react-native";
import logo from "../../assets/logo.png";
import "../css/procedure.css";
import { Chrono } from "react-chrono";

export default function PlacementProcedure({ navigation }) {
  const items = [
    {
      title: "01",
      cardTitle: "Company Details",
      cardDetailedText:
        "Post accepting the placement invite, the recruiter shall share the details of the profile and job description along with compensation details with the Placement Team.",
    },
    {
      title: "02",
      cardTitle: "Inviting Applications",
      cardDetailedText:
        " A coordinator is assigned to the drive, who circulates the opportunity and collects the required data of the desiring candidates and shares it with the recruiter.",
    },
    {
      title: "03",
      cardTitle: "Pre-Placement Talk and Selection Procedure",
      cardDetailedText:
        "If a company wishes, it may allot a day for a Pre-Placement Talk with the candidates to acquaint the candidates about the company's profile, organizational achievements and culture of the company. Further, the coordinator ensures a smooth conduct of various rounds, including but not limited to Aptitude test, Group discussion, Technical and Personal interviews",
    },
    {
      title: "04",
      cardTitle: "Job Offer",
      cardDetailedText:
        "After the successful completion of all rounds, the company informs the Placement Team about the selected applicants, and if the company so wishes, the Cell conveys the offer to the selected students",
    },
  ];
  return (
    <div className="procedure">
      <button
        onClick={() => navigation.navigate("Landing")}
        className="header-logo"
      >
        <img src={logo} alt="Logo" />
      </button>
      <h1 className="heading-secondary">Placement Procedure</h1>
      <div className="procedure-container">
        <div className="procedure-container-chrono">
          <Chrono
            cardHeight={200}
            useReadMore={false}
            items={items}
            mode={
              Dimensions.get("screen").width > 768
                ? "VERTICAL_ALTERNATING"
                : "VERTICAL"
            }
          />
        </div>
      </div>
    </div>
  );
}
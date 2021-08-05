import React from "react"; //eslint-disable-line
import logo from "../../assets/logo.png";
import "../css/procedure.css";

export default function PlacementProcedure({ navigation }) {
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
        <ul>
          <li>
            <div>
              <h3 className="lightgray font-weight-bold">
                01 <br />
                Company Details
              </h3>
              <p>
                Post accepting the placement invite, the recruiter shall share
                the details of the profile and job description along with
                compensation details with the Placement Team.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="lightgray font-weight-bold">
                02 <br />
                Inviting Applications
              </h3>
              <p>
                A coordinator is assigned to the drive, who circulates the
                opportunity and collects the required data of the desiring
                candidates and shares it with the recruiter.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="lightgray font-weight-bold">
                03 <br />
                PRE-PLACEMENT TALK AND SELECTION PROCEDURE
              </h3>
              <p>
                If a company wishes, it may allot a day for a Pre-Placement Talk
                with the candidates to acquaint the candidates about the
                company's profile, organizational achievements and culture of
                the company. Further, the coordinator ensures a smooth conduct
                of various rounds, including but not limited to Aptitude test,
                Group discussion, Technical and Personal interviews
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="lightgray font-weight-bold">
                04 <br />
                Job Offer
              </h3>
              <p>
                After the successful completion of all rounds, the company
                informs the Placement Team about the selected applicants, and if
                the company so wishes, the Cell conveys the offer to the
                selected students
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

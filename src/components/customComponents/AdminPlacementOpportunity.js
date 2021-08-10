import "../css/adminOppurtunity.css";
import { Card } from "react-bootstrap";
import linkedin from "../../assets/linkedin.png";
import website from "../../assets/internet.png";
export default function AdminPlacementOppurtunity({
  navigation,
  companyName,
  role,
  onRemoveClicked,
  img,
  onCheckApplicants,
  deadline,
  linkedinUrl,
  companySite,
}) {
  return (
    <div style={{ width: "30rem" }} className="placement-main-container">
      <Card style={{ width: "20rem", padding: "2rem 0 0.5rem" }}>
        <Card.Img
          style={{ width: "50%", margin: "auto", height: "10rem" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{companyName}</Card.Title>
          <Card.Subtitle>{role}</Card.Subtitle>
          <Card.Subtitle style={{ margin: "0.5rem 0" }}>
            {deadline}
          </Card.Subtitle>
        </Card.Body>
        <div className="w-100 d-flex align-items-center justify-content-around">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href={companySite} target="_blank" rel="noopener noreferrer">
            <img src={website} alt="Website" />
          </a>
        </div>
      </Card>
      <div className="buttons">
        <button className="removeButton" onClick={onRemoveClicked}>
          Remove Opportunity
        </button>
        <button className="removeButton" onClick={onCheckApplicants}>
          Applicants
        </button>
      </div>
    </div>
  );
}

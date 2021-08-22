import "../css/oppurtunity.css";
import { Card } from "react-bootstrap";
import linkedin from "../../assets/linkedin.png";
import website from "../../assets/internet.png";
export default function PlacementOppurtunity({
  navigation,
  companyName,
  role,
  onApply,
  img,
  jd,
  deadline,
  companySite,
  linkedinUrl,
}) {
  return (
    <div
      style={{
        width: "20rem",
        borderRadius: "0.5rem",
        backgroundColor: "#f2f2f2",
      }}
      className="placement-main-container"
    >
      <Card
        style={{
          width: "20rem",
          padding: "2rem 0 0.5rem",
          backgroundColor: "#f2f2f2",
          border:'none'
        }}
      >
        <Card.Img
          style={{ width: "50%", margin: "auto", height: "10rem" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{companyName}</Card.Title>

          <Card.Subtitle>Role : {role}</Card.Subtitle>

          <Card.Subtitle style={{ margin: "0.5rem 0" }}>
            Deadline : {deadline}
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
        <a
          href={jd}
          target="_blank"
          rel="noopener noreferrer"
          className="applyButton"
        >
          Job Description
        </a>
        <button onClick={onApply} className="applyButton">
          Apply
        </button>
      </div>
    </div>
  );
}

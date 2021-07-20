import "../css/adminOppurtunity.css";
import { Card } from "react-bootstrap";
export default function AdminPlacementOppurtunity({
  navigation,
  companyName,
  role,
  onRemoveClicked,
  img,
  onCheckApplicants,
  deadline
}) {
  return (
    <div className="placement-main-container">
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
      </Card>
      <div class="buttons">
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

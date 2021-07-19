import "../css/oppurtunity.css";
import {Card} from 'react-bootstrap'
export default function PlacementOppurtunity({
  navigation,
  companyName,
  role,
  onApply,
  img,
  jd,
  deadline,
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
          <Card.Subtitle >{role}</Card.Subtitle>
          <Card.Subtitle style={{ margin: "0.5rem 0" }}>
            {deadline}
          </Card.Subtitle>
          <Card.Text style={{ margin: "0.5rem 0" }}>
            Some Description About this company
          </Card.Text>
        </Card.Body>
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

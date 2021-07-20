import "../css/adminOppurtunity.css";

export default function AdminPlacementOppurtunity({
  navigation,
  companyName,
  role,
  onApply,
  onRemoveClicked,
  img,
  onCheckApplicants
}) {
  return (
    <div className="placement-container">
      <div className="opportunity-info">
        <div className="img-container">
          <img src={img} alt="company" />
        </div>
        <div className="info">
          <p className="company">{companyName}</p>
          <p>{role}</p>
        </div>
      </div>
      <div class="btn-container">
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

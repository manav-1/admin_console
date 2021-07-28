export default function TeamComponent() {
  return (
    <div
      id="Team"
      style={{ width: "100%", margin: "auto" }}
      className="landing-about row"
    >
      <h1 className="col-sm-12">Meet the Team</h1>
      <div
        style={{ background: "transparent", height:'auto' }}
        className="container mx-auto py-3 my-0 col-md-10 "
      >
        <div className="row m-0 p-0" style={{ justifyContent: "center" }}>
          <div className="card border-info col-sm mx-1 my-0 py-3">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  {" "}
                  <img src="https://i.imgur.com/J6l19aF.jpg" alt="team" />{" "}
                </div>
                <div className="card-title">
                  {" "}
                  Aarushi Gupta
                  <br /> <small>President</small>{" "}
                </div>
                <div className="card-subtitle">
                  <p>
                    {" "}
                    <small className="text-muted">
                      {" "}
                      I expected anything less than perfect for the team of
                      experts. They are the best team ever!{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-success col-sm mx-1 my-0 py-3">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  {" "}
                  <img src="https://i.imgur.com/8RKXAIV.jpg" alt="team" />{" "}
                </div>
                <div className="card-title">
                  {" "}
                  Raghav Bhatia
                  <br /> <small>Vice-President</small>{" "}
                </div>
                <div className="card-subtitle">
                  <p>
                    {" "}
                    <small className="text-muted">
                      {" "}
                      I really enjoyed working with them, they are Group of
                      Professionals and they know what they're Doing{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-warning col-sm mx-1 my-0 py-3 ">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  {" "}
                  <img src="https://i.imgur.com/Ur43esv.jpg" alt="team" />{" "}
                </div>
                <div className="card-title">
                  {" "}
                  Manav Arora
                  <br /> <small>Head of Technical Operations</small>{" "}
                </div>
                <div className="card-subtitle">
                  <p>
                    {" "}
                    <small className="text-muted">
                      {" "}
                      I always wanted cool videos of my concerts never knew whom
                      to talk to but they are amazing!{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-danger col-sm mx-1 my-0 py-3">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  {" "}
                  <img src="https://i.imgur.com/J6l19aF.jpg" alt="team" />{" "}
                </div>
                <div className="card-title">
                  {" "}
                  Deepti Jain
                  <br /> <small>Head of Personal Relationship</small>{" "}
                </div>
                <div className="card-subtitle">
                  <p>
                    {" "}
                    <small className="text-muted">
                      {" "}
                      I expected anything less than perfect for the team of
                      experts. They are the best team ever!{" "}
                    </small>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

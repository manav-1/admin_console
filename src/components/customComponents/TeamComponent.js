import Aarushi from "../../assets/Members/Aarushi.jpeg";
import Raghav from "../../assets/Members/Raghav.jpeg";
import Manav from "../../assets/Members/Manav.jpg";
import Deepti from "../../assets/Members/Deepti.jpg";
export default function TeamComponent() {
  return (
    <div
      id="Team"
      style={{ width: "100%", margin: "auto" }}
      className="landing-about row"
    >
      <div
        style={{ background: "transparent", height: "auto" }}
        className="container mx-auto py-3 my-0 col-md-10 "
      >
        <div className="row m-0 p-0" style={{ justifyContent: "center" }}>
          <div className="card border-info col-sm mx-1 my-2 py-3">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  <img src={Aarushi} alt="team" />
                </div>
                <div className="card-title">
                  Aarushi Gupta
                  <br /> <small>President</small>
                </div>
                <div className="card-subtitle">
                  <p>
                    <small className="text-muted">
                      I expected anything less than perfect for the team of
                      experts. They are the best team ever!
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-success col-sm mx-1 my-2 py-3">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  <img src={Raghav} alt="team" />
                </div>
                <div className="card-title">
                  Raghav Bhatia
                  <br /> <small>Vice-President</small>
                </div>
                <div className="card-subtitle">
                  <p>
                    <small className="text-muted">
                      I really enjoyed working with them, they are Group of
                      Professionals and they know what they're Doing
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-warning col-sm mx-1 my-2 py-3 ">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  <img src={Manav} alt="team" />
                </div>
                <div className="card-title">
                  Manav Arora
                  <br /> <small>Head of Technical Operations</small>
                </div>
                <div className="card-subtitle">
                  <p>
                    <small className="text-muted">
                      I always wanted cool videos of my concerts never knew whom
                      to talk to but they are amazing!
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card border-danger col-sm mx-1 my-2 py-3">
            <div className="card-content">
              <div className="card-body p-0">
                <div className="profile">
                  <img src={Deepti} alt="team" />
                </div>
                <div className="card-title">
                  Deepti Jain
                  <br /> <small>Head of Public Relations</small>
                </div>
                <div className="card-subtitle">
                  <p>
                    <small className="text-muted">
                      I expected anything less than perfect for the team of
                      experts. They are the best team ever!
                    </small>
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

import logo from "../../assets/logo.png";
export default function Society() {
  return (
    <div className="pb-5">
      <div className="landing-about">
        <h1>Societies</h1>
      </div>
      <div className="row w-100 mx-auto mb-5 px-5 d-flex justify-content-around">
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/PmgcBR9/18.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            ANHAD
            <br />
            The Music Society
          </p>
        </div>
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/HFP6Fdm/20.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            VAGMITA
            <br />
            The Poetry Society
          </p>
        </div>
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/xhC4xvx/19.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            SHADES <br /> The Theater Society
          </p>
        </div>
        <div className="col-sm-2 text-center">
          <img
            src={logo}
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            START@KMV <br /> The Placement Cell
          </p>
        </div>
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/DLG3c9x/13.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            NAKSH <br /> The Fashion Society
          </p>
        </div>
      </div>
      <div className="row w-100 mx-auto px-5 d-flex justify-content-around ">
        <div class="col-offset-1"></div>
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/0J1Q7LW/17.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            NIVESH
            <br />
            THE Finance and Investment Cell
          </p>
        </div>
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/rmhz6CQ/15.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            Illuminati
            <br /> The Photography Society
          </p>
        </div>
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/2dTq6Vh/14.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            VAGMITA <br /> The Debating Society
          </p>
        </div>
        <div className="col-sm-2 text-center">
          <img
            src="https://i.ibb.co/PQKhk5B/16.png"
            alt="soc1"
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "4rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <p style={{ textAlign: "center" }}>
            ENACTUS
            <br />
            KMV
          </p>
        </div>
        <div class="col-offset-1"></div>
      </div>
    </div>
  );
}

import team from "../../assets/LandingData.png"; //eslint-disable-line
export default function AboutUs() {
  return (
    <div
      id="About"
      style={{ width: "100%", margin: "auto" }}
      className="landing-about row"
    >
      <div className="col-sm-10 row mx-auto">
        <h1 className="col-sm-12">About Us</h1>
        <div className="about col-sm-6">
          <h3 className="heading-tert margin-bottom-small">Our Aim</h3>
          <p className="paragraph">
            Reprehenderit duis officia in laboris aliqua. Nisi deserunt deserunt
            labore incididunt. Occaecat nulla nulla eu esse velit sit proident
            duis deserunt ut enim id nostrud reprehenderit. Occaecat non cillum
            sunt dolor velit ullamco consequat magna in sit reprehenderit.
            Proident 
          </p>

          <h3 className="heading-tert margin-bottom-small">Start@KMV</h3>
          <p className="paragraph">
            Reprehenderit duis officia in laboris aliqua. Nisi deserunt deserunt
            labore incididunt. Occaecat nulla nulla eu esse velit sit proident
            duis deserunt ut enim id nostrud reprehenderit. Occaecat non cillum
            sunt dolor velit ullamco consequat magna in sit reprehenderit.
            Proident proident qui m
          </p>
        </div>
        <div className="col-sm-6 d-flex justify-content-center align-items-center">
          <img className="w-100" src={team} alt="brochure" />
        </div>
      </div>
    </div>
  );
}

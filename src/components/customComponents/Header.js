export default function Header() {
  return (
    <div style={{ width: "100%", margin: "auto", marginTop:'-1rem'}}>
      <header style={{ width: "100%" }} className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="marginprob heading-primary--main">Start@KMV</span>
            <span className="heading-primary--sub">The Placement Cell</span>
          </h1>
          <h1 className="heading-primary mt-5">
            {" "}
            <span className="heading-primary--sub">Keshav Mahavidyalaya</span>
          </h1>
          <br />
        </div>
      </header>
    </div>
  );
}

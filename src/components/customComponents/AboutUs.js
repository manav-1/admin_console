import team from "../../assets/team.png";
export default function AboutUs() {
  return (
    <div
      id="About"
      style={{ width: "90%", margin: "auto" }}
      className="landing-about row"
    >
      <h1 className="col-sm-12">About Us</h1>
      <div className="about col-sm-6">
        <h3 className="heading-tert margin-bottom-small">Our Aim</h3>
        <p className="paragraph">
          Start@KMV, the Placement Cell of the college works diligently
          throughout the year in its endeavour to reduce the gap between
          students and recruiters. The sole aim of the cell is to bring vision
          and acts as a guiding force and facilitator for the students. The cell
          strongly aims at inculcating the pursuit of knowledge and dexterity to
          reason and analysis in each and every student.
        </p>

        <h3 className="heading-tert margin-bottom-small">Start@KMV</h3>
        <p className="paragraph">
          To nurture in-demands skills, the cell successfully organised
          activities, some of which are the Virtual Internship Fair, C.V.
          Building workshop and a series of webinars by industry professionals
          and notable alumnus. The past few years have been immensely fruitful
          in terms of the companies that visited the college and it has carved a
          niche for itself by grooming proficient industry ready individuals.
        </p>
      </div>
      <div className="col-sm-6 d-flex justify-content-center align-items-center">
        <img style={{ width: "100%" }} src={team} alt="Team" />
      </div>
    </div>
  );
}

import {useState} from 'react'
import Faculty from "../customComponents/Faculty";
import TeamComponent from "../customComponents/TeamComponent";
export default function TeamFacultySlider() {

    const [component, setComponent] = useState(<Faculty/>)
  return (
    <div className="my-5">
      <div
        style={{ width: "40%", margin: "auto", marginBottom: '2rem' }}
        className="row d-flex justify-content-around"
      >
        <button className="landing-button "onClick={() => setComponent(<Faculty />)}>
          <h3 className="col-sm-12">Faculty</h3>
        </button>
        <button className="landing-button" onClick={() => setComponent(<TeamComponent />)}>
          <h3 className="col-sm-12">Team</h3>
        </button>
      </div>
      {component}
    </div>
  );
}

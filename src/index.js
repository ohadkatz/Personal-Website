import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "./components/CustomButton";
import AboutMe from "./components/AboutMe";
import "./index.css";
const App = () => {
  return (
    <div>
      <div className="center-align">
        <h1 className="Title">
          {" "}
          Ohad Katz
          <br />
        </h1>

        <h5 className="info"> B.S. Computer Science </h5>
        <div className="container">
          <div className="border">
            <CustomButton
              btnName="resume"
              // link="https://www.canva.com/design/DADR0vIXPhE/S4iVGPOsRRKO-SZxt5ILhA/view?website#2"
              link="/OhadKatz_resume.pdf"
              target="_blank"
            />
            <CustomButton btnName="github" link="https://github.com/ohadkatz" />
            <CustomButton
              btnName="linkedin"
              link="https://www.linkedin.com/in/ohadkatz/"
            />
          </div>
        </div>
        <AboutMe id="aboutMe" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

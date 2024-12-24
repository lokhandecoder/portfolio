import React from "react";
import Profile from "./Profile";
import Intro from "./Intro";
import "./index.css";
import ExperienceComponent from "./ExperienceComponent";

function BioComponent() {
  return (
    <div className="mydiv">
      <div style={{ width: "40%", float: "left" }}>
        <Profile />
      </div>
      <div style={{ width: "60%", float: "right" }}>
        <Intro />
      </div>
    </div>
  );
}

export default BioComponent;

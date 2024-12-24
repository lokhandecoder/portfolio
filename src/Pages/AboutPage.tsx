import React, { useState } from "react";
import BioComponent from "../Components/AboutPageComponents/BioComponent";
import ExperienceComponent from "../Components/AboutPageComponents/ExperienceComponent";

function AboutPage() {
  const [activeTab, setActtiveTab] = useState(true);
  return (
    <div>
      <div className="Tab">
        <div
          className="tab-child"
          onClick={() => setActtiveTab(true)}
          style={{ backgroundColor: activeTab ? "grey" : "" }}
        >
          Bio
        </div>
        <div
          className="tab-child"
          onClick={() => setActtiveTab(false)}
          style={{ backgroundColor: activeTab ? "" : "grey" }}
        >
          Experience
        </div>
      </div>
      {activeTab ? <BioComponent /> : <ExperienceComponent />}
    </div>
  );
}

export default AboutPage;

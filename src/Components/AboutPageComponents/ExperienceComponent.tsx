import React from "react";
import exp from "../../Data/ExperinceData.json";

function ExperienceComponent() {
  const { experince } = exp;

  return (
    <div className="experience">
      {experince.map((data, key) => (
        <div key={key}>
          <div className="divide">
            <div>{data.companyname} ({data.Role})</div>
            <div>{data.dateofjoining} - {data.dateofend}</div>
          </div>
          <br />
          <div>
            {data.Description.split("\n").map((line, index) => (
              <div key={index}>
                <ul>
                  <li>{line}</li>
                </ul>
              </div>
            ))}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default ExperienceComponent;

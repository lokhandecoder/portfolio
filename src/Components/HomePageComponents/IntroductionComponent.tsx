import { spawn } from "child_process";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function IntroductionComponent() {
  return (
    <div style={{ color: "white" }}>
      <div className="text-animated">
        <TypeAnimation
          wrapper={"span"}
          repeat={Infinity}
          speed={50}
          sequence={[
            "Hey!!!!",
            1000,
            "I Am Amit Lokhande",
            1000,
            "I Am a Full Stack Developer",
            1000
          ]}
        />
      </div>
    </div>
  );
}

export default IntroductionComponent;

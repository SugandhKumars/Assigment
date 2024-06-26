import React from "react";
import styles from "./Skills.module.css";
import Skill from "./Skill";
import figma from "../assets/Figma.svg";
import adobeill from "../assets/Adobeillustator.svg";
import adobeXd from "../assets/AdobeXD.svg";

function Skills({ width, height, children }) {
  return (
    <div
      className={styles.skillContain}
      style={{ width: width, height: height }}
    >
      <p className={`smallLight`}>{children}</p>
      <Skill width1={"66px"} width2={"54px"} img={figma} imgWidth={"16px"}>
        Figma
      </Skill>
      <Skill
        width1={"126.41px"}
        width2={"114.41px"}
        img={adobeill}
        imgWidth={"16.41px"}
      >
        Adobe Illustrator
      </Skill>
      <Skill
        width1={"84.41px"}
        width2={"76.41px"}
        img={adobeXd}
        imgWidth={"16.41px"}
      >
        Adobe XD
      </Skill>
    </div>
  );
}

export default Skills;

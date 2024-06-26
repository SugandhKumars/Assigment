import React from "react";
import styles from "./Requirement.module.css";
import Skills from "./Skills";
import SkillsTwo from "./SkillsTwo";
function Requirement() {
  return (
    <div className={styles.requirement}>
      <Skills width={"170px"} height={"115px"} type={"primary"}>
        Skills Required
      </Skills>
      <SkillsTwo type={"Preferred Language"} detail={"English"}></SkillsTwo>
      <SkillsTwo type={"Type"} detail={"Full Time"}></SkillsTwo>
      <SkillsTwo
        type={"Years of Experience"}
        detail={"3+ Years of Experience"}
      ></SkillsTwo>
    </div>
  );
}

export default Requirement;

import React from "react";
import styles from "./SkillsTwo.module.css";
function SkillsTwo({ type, detail }) {
  return (
    <div className={styles.skill}>
      <p className={`smallLight`}>{type}</p>
      <p className={styles.bold}>{detail}</p>
    </div>
  );
}

export default SkillsTwo;

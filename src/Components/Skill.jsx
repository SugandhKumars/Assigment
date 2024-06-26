import React from "react";
import styles from "./Skill.module.css";

function Skill({ width1, width2, children, img, imgWidth }) {
  return (
    <div className={styles.skill} style={{ width: width1 }}>
      <div className={styles.skillContain} style={{ width: width2 }}>
        <img src={img} style={{ width: imgWidth }} alt="" />
        <p className={styles.name}>{children}</p>
      </div>
    </div>
  );
}

export default Skill;

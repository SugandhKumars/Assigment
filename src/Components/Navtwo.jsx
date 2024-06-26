import React from "react";
import Links from "./Links";
import styles from "./Navtwo.module.css";
function Navtwo() {
  return (
    <div className={styles.links}>
      <div className={styles.LinksContainer}>
        <Links type={"secondary"}>Job preview</Links>
        <Links type={"primary"}>Applicants</Links>
        <Links type={"primary"}>Match</Links>
        <Links type={"primary"}>Messages</Links>
      </div>
    </div>
  );
}

export default Navtwo;

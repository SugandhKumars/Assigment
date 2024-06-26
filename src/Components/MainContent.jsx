import React from "react";
import styles from "./MainContent.module.css";
import Post from "./Post";
import Requirement from "./Requirement";
import About from "./About";
import Company from "./Company";
function MainContent() {
  return (
    <div className={styles.MainContent}>
      <Post />
      <div className={styles.line}></div>
      <Requirement />
      <div className={styles.line}></div>
      <About />
      <div className={styles.line2}></div>
      <Company />
    </div>
  );
}

export default MainContent;

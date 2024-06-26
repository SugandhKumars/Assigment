import React from "react";
import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.aboutContain}>
      <p className="smallLight">About the job</p>
      <div className={styles.details}>
        1. Handle the UI/UX research design<br></br>2. Work on researching on
        latest web applications designs & trends<br></br>3. Work on
        conceptualizing and visualizing<br></br>4. Work on creating graphics
        content and other graphic related works <br></br>Benefits:
        <ul>
          <li>Health insurance </li>
          <li> Provident Fund</li>
        </ul>
        Schedule:
        <ul>
          <li>Day shift</li>
        </ul>{" "}
        Supplemental pay types:
        <ul>
          <li>Performance bonus</li>
          <li>early bonus</li>
        </ul>
        Work Location: In person
      </div>
    </div>
  );
}

export default About;

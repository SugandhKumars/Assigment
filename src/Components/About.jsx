import React from "react";
import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.aboutContain}>
      <p className="smallLight">About the job</p>
      <div className={styles.details}>
        <ol>
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs & trends
          </li>
          <li> Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>
        <ul>
          <p>Benifits:</p>
          <li>Health Insurance</li>
          <li>Provident Fund</li>
        </ul>
        <ul>
          <p>Schedule:</p>
          <li>Day shift</li>
        </ul>
        <ul>
          <p>Supplemental pay types:</p>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import styles from "./JobStatus.module.css";
import Status from "./Status";
import Applicant from "../assets/Applicants.svg";
import Matches from "../assets/Matches.svg";
import Message from "../assets/message.svg";
import View from "../assets/views.svg";
function JobStatus() {
  return (
    <div className={styles.JobStatus}>
      <Status
        img={Applicant}
        type={"Applicants"}
        number={"400"}
        imgHeight={"15px"}
        imgWidth={"16.67px"}
        margin={"2.5px 1.67px"}
      />
      <div className={styles.line}></div>
      <Status
        img={Matches}
        type={"Matches"}
        number={"100"}
        imgHeight={"15px"}
        imgWidth={"16.67px"}
        margin={"2.5px 1.67px"}
      />
      <div className={styles.line}></div>
      <Status
        img={Message}
        type={"Messages"}
        number={"147"}
        imgHeight={"15.38px"}
        imgWidth={"15px"}
        margin={"2.5px 2.5px 2.12px 2.5px"}
      />
      <div className={styles.line}></div>
      <Status
        img={View}
        type={"Views"}
        number={"800"}
        imgHeight={"11.67px"}
        imgWidth={"16.41px"}
        margin={"4.17px 1.8px"}
      />
    </div>
  );
}

export default JobStatus;

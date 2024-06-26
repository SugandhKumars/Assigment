import React from "react";
import styles from "./JobDetail.module.css";
import JobButton from "./JobButton";
import Delete from "../assets/Delete.svg";
import Edit from "../assets/Edit.svg";
import JobStatus from "./JobStatus";
function JobDetail() {
  return (
    <div className={styles.jobDetail}>
      <div className={styles.btns}>
        <JobButton img={Delete} type={"Delete"}>
          Delete job{" "}
        </JobButton>
        <JobButton img={Edit} type={"Edit"}>
          Edit job{" "}
        </JobButton>
      </div>
      <JobStatus />
    </div>
  );
}

export default JobDetail;

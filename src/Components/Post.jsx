import React from "react";
import styles from "./Post.module.css";
import location from "../assets/location.svg";
import salary from "../assets/salary.svg";
function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.designation}>
        <div className={styles.postName}>Senior Product Designer</div>
        <span className={styles.dot}></span>
        <div className={styles.time}>posted 2 days ago</div>
        <div className={styles.button}>
          <div className={styles.dotContainer}>
            <p className={styles.dot2}></p>
          </div>
          <span className={styles.text}> Open</span>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.place}>
          <div className={styles.imgContainer}>
            <img src={location} alt="" />
          </div>
          <p className={styles.placeName}>Delaware, USA</p>
        </div>
        <span className={styles.dot1}></span>
        <div className={styles.salary}>
          <div className={styles.imgContainer}>
            <img src={salary} alt="" />
          </div>
          <p>$300k-400k</p>
        </div>
      </div>
    </div>
  );
}

export default Post;

import React from "react";
import styles from "./JobButton.module.css";
function JobButton({ img, children, type }) {
  const style = type === "Delete" ? styles.delteBtn : styles.editBtn;
  return (
    <div className={`${styles.btnContainer} ${style}`}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default JobButton;

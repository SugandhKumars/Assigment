import React from "react";
import styles from "./Status.module.css";
function Status({ img, type, number, imgHeight, imgWidth, margin }) {
  return (
    <div className={styles.status}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img
            src={img}
            style={{ height: imgHeight, width: imgWidth, margin: margin }}
            alt=""
          />
        </div>
        <p>{type}</p>
      </div>
      <div className={styles.right}>{number}</div>
    </div>
  );
}

export default Status;

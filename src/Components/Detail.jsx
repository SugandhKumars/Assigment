import React from "react";
import styles from "./Details.module.css";
function Detail({ title, text }) {
  return (
    <div className={styles.detail}>
      <p className={`smallLight`}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default Detail;

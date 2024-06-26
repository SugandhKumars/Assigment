import React from "react";
import styles from "./Links.module.css";
function Links({ children, type = "primary" }) {
  return (
    <div className={`${styles[type]}`}>
      {children}
      <div className={styles.bottom}></div>
    </div>
  );
}

export default Links;

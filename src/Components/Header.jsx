import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar";
function Header() {
  return (
    <div className={styles.Header}>
      <Navbar />
    </div>
  );
}

export default Header;

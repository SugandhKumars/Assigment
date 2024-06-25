import React from "react";
import styles from "./Navbar.module.css";
import berifCase from "../assets/Jobs.svg";
import coinHand from "../assets/payments.svg";
import messageSquare from "../assets/message.svg";
import notification from "../assets/bell-02.svg";
import Icon from "../assets/Rectangle 5.svg";
import Icon2 from "../assets/Icon2.svg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.navCenter}>
        <li className={styles.jobs}>
          <div className={styles.linkContianer}>
            <div className={styles.imageContainer}>
              <img src={berifCase} alt="" />
            </div>
            <p>Jobs</p>
          </div>
        </li>
        <li className={styles.message}>
          <div className={styles.messageBox}>
            <img src={messageSquare} alt="" />
            <div className={styles.dot}></div>
          </div>

          <p className={styles.messageText}>Messages</p>
        </li>
        <li className={styles.payments}>
          <div className={styles.messageBox}>
            <img src={coinHand} alt="" />
          </div>
          <p className={styles.paymentText}>Payments</p>
        </li>
      </ul>
      <div className={styles.navRight}>
        <div className={styles.notification}>
          <div className={styles.notificationContainer}>
            <img src={notification} alt="" />
            <div className={styles.notDot}></div>
          </div>
        </div>
        <div className={styles.icon}>
          <div className={styles.iconContain}>
            <img src={Icon} alt="" />
          </div>
          <div className={styles.Icon2Contain}>
            <img src={Icon2} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

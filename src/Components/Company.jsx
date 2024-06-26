import React from "react";
import Logo from "../assets/CompanyLogo.svg";
import styles from "./Company.module.css";
import Detail from "./Detail";
import JobDetail from "./JobDetail";
function Company() {
  return (
    <div className={styles.Company}>
      <div className={styles.companyContainer}>
        <div className={styles.companyContain}>
          <img className={styles.logo} src={Logo} alt="" />
          <p className={styles.name}>Atlassian</p>
        </div>
      </div>
      <div className={styles.companyDetails}>
        <Detail title={"Company size"} text={"1k - 2k Employees"} />
        <Detail title={"Type"} text={"Private"} />
        <Detail
          title={"Sector"}
          text={"Information Technology, Infrastructure"}
        />
        <Detail title={"Funding"} text={"Bootstrapped"} />
        <Detail title={"Founded In"} text={"2019"} />
        <Detail
          title={"Founded By"}
          text={"Scott Farquhar, Mike Cannon-Brookes"}
        />
      </div>
      <JobDetail />
    </div>
  );
}

export default Company;

import React from "react";
import styles from "./SubHeader.module.css";
import BackArrow from "./Images/BackArrow.png";
import LogOut from "./Images/LogOut.png";

const SubHeader = () => {
  return (
    <div className={styles.subHeader}>
      <div className={styles.Back}>
        <img className={styles.BackArrow} src={BackArrow} />
      </div>
      <div className={styles.LogOut}>
        <img className={styles.LogOutIcon} src={LogOut} />
      </div>
    </div>
  );
};

export default SubHeader;

import React, { useContext } from "react";
import styles from "./SubHeader.module.css";
import BackArrow from "./Images/BackArrow.png";
import LogOut from "./Images/LogOut.png";
import UserContext from "../context/user";

const SubHeader = () => {
  const userCtx = useContext(UserContext)

  return (
    <div className={styles.subHeader}>
      <div className={styles.Back}>
        <img className={styles.BackArrow} src={BackArrow} />
      </div>
      <div className={styles.LogOut} style={{ cursor: "pointer" }} onClick={()=> {userCtx.setRole('')} }>
        <img className={styles.LogOutIcon} src={LogOut} />
      </div>
    </div>
  );
};

export default SubHeader;

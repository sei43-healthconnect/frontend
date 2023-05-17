import React, { useContext } from "react";
import styles from "./SubHeader.module.css";
import BackArrow from "./Images/BackArrow.png";
import LogOut from "./Images/LogOut.png";
import UserContext from "../context/user";
import PageContext from "../context/page"

const SubHeader = () => {
  const userCtx = useContext(UserContext)
  const pageCtx = useContext(PageContext)

  const logout = () => {
    userCtx.setRole('');
    userCtx.setAuthorised(false);
    pageCtx.setShowPatientDetails(false)
    pageCtx.setShowChat(false)
    pageCtx.setShowWards(true)
    pageCtx.setShowBeds(false)
    pageCtx.setShowPatient(false)
  }

  return (
    <div className={styles.subHeader}>
      <div className={styles.Back}>
        <img className={styles.BackArrow} src={BackArrow} />
      </div>
      <div className={styles.LogOut} style={{ cursor: "pointer" }} onClick={logout} >
        <img className={styles.LogOutIcon} src={LogOut} />
      </div>
    </div>
  );
};

export default SubHeader;

import React, { useState } from "react";
import styles from "./StaffDetails.module.css";
import { Avatar, Button } from "@mui/material";
import Nurse1 from "./Images/Nurse1.jpg";

const StaffDetails = () => {
  const [staffID, setStaffID] = useState("838017B");
  const [staffName, setStaffName] = useState("Mabel See");
  const [wards, setWards] = useState("");
  return (
    <>
      <div className={styles.StaffDisplay}>
        <Avatar alt="Nurse1" src={Nurse1} sx={{ width: 96, height: 96 }} />
        <div className={styles.StaffDetails}>
          <div className={styles.StaffIDBox}>
            <div className={styles.StaffID}>Staff ID</div>
            <div className={styles.ID}>{staffID}</div>
          </div>
          <div className={styles.StaffNameBox}>
            <div className={styles.StaffName}>Staff Name</div>
            <div className={styles.Name}>{staffName}</div>
          </div>
        </div>
      </div>
      <div className={styles.WardsTextBox}>
        <div className={styles.Wards}>Wards</div>
      </div>
      <div className={styles.WardsBox}>
        <div className={styles.WardsFrame}>
          <div className={styles.WardsButton}>
            <div className={styles.WardNo}>46</div>
          </div>
          <div className={styles.WardsButton}>
            {" "}
            <div className={styles.WardNo}>47</div>
          </div>
          <div className={styles.WardsButton}>
            {" "}
            <div className={styles.WardNo}>48</div>
          </div>
        </div>
        <button className={styles.AddButton}>
          <div className={styles.layer}>
            <div className={styles.text}>+ Add Ward</div>
          </div>
        </button>
      </div>
      {/* <div className={styles.AccountSettingsBox}>
        <div className={styles.AccountSettings}>Account Settings</div>
      </div> */}
    </>
  );
};

export default StaffDetails;

import React from "react";
import styles from "./FamilyPatient.module.css";
import Header from "./Header";
import { Avatar } from "@mui/material";
import Patient1 from "./Images/Patient1.png";

const FamilyPatient = () => {
  return (
    <div className={styles.FamilyPatient}>
      <Header />
      <div className={styles.MyCareDisplay}>
        <div className={styles.MyCare}>My Care</div>
      </div>
      <div className={styles.PatientDetailsDisplay}>
        <div className={styles.PatientDetails}>
          <Avatar
            alt="Patient1"
            src={Patient1}
            sx={{ width: 96, height: 96 }}
          />
          <div className={styles.PatientDetailsBox}>
            <div className={styles.PatientNameBox}>
              <div className={styles.PatientName}>Patient Name</div>
              <div className={styles.PatientNameText}>Kah Poh Tian</div>
            </div>
            <div className={styles.HospitalDetailsBox}>
              <div className={styles.admitted}>Admitted To</div>
              <div className={styles.hospName}>
                Ang Mo Kio Community Hospital
              </div>
              <div className={styles.WardNoBedNo}>Ward 46 / Bed 1</div>
            </div>
            <div className={styles.StaffNameBox}>
              <div className={styles.StaffName}>Staff Name</div>
              <div className={styles.StaffNameText}>Staff Nurse Mabel See</div>
            </div>
          </div>
        </div>
        <div className={styles.ButtonBox}>
          <div className={styles.Button2Box}>
            <div className={styles.MessageStaffBox}>
              <div className={styles.MessageStaffText}>Message Staff</div>
            </div>
            <div className={styles.badge}>
              <div className={styles.badge1}>10</div>
            </div>
            <div className={styles.PatientDetailsTextBox}>
              <div className={styles.PatientDetailsText}>Patient's Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPatient;
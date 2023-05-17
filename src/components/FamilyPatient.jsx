import React, { useContext, useState, useEffect } from "react";
import styles from "./FamilyPatient.module.css";
import Header from "./Header";
import { Avatar, Badge } from "@mui/material";
import Patient1 from "./Images/Patient1.png";
import { fetchData } from "../helpers/common";
// import VerificationModal from "./VerificationModal";

const FamilyPatient = () => {
  const [patients, setPatients] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const getPatients = async () => {
    const { ok, data } = await fetchData("/api/patients");

    if (ok) {
      setPatients(data);
    } else {
      console.log(data);
    }
  };
  const getStaffs = async () => {
    const { ok, data } = await fetchData("/api/staff");

    if (ok) {
      setStaffs(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getPatients();
    getStaffs();
  }, []);

  return (
    <>
      {showVerificationModal && (
        <VerificationModal
          ic={patient_nric}
          setShowVerificationModal={setShowVerificationModal}
          getPatients={getPatients}
        />
      )}

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
              // src={patients[0].patient_photo}
              sx={{ width: 96, height: 96 }}
            />
            <div className={styles.PatientDetailsBox}>
              <div className={styles.PatientNameBox}>
                <div className={styles.PatientName}>Patient Name</div>
                <div className={styles.PatientNameText}>
                  {/* {patients[0].patient_firstName} */}
                  {/* {patients[0].patient_lastName} */}
                  Kah Poh Tian
                </div>
              </div>
              <div className={styles.HospitalDetailsBox}>
                <div className={styles.admitted}>Admitted To</div>
                <div className={styles.hospName}>
                  Ang Mo Kio Community Hospital
                </div>
                <div className={styles.WardNoBedNo}>
                  {/* {patients[0].patient_ward} */}
                  Ward 46 /{/* {patients[0].patient_bed} */}
                  Bed 1
                </div>
              </div>
              <div className={styles.StaffNameBox}>
                <div className={styles.StaffName}>Staff Name</div>
                <div className={styles.StaffNameText}>
                  {/* {staffs[0].staff_firstName} */}
                  {/* {staffs[0].staff_lastName} */}
                  Staff Nurse Mabel See
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ButtonBox}>
          <div className={styles.Button2Box}>
            <Badge badgeContent={10} color="primary">
              <div className={styles.MessageStaffBox}>
                <div className={styles.MessageStaffText}>Message Staff</div>
              </div>
            </Badge>
            {/* <div className={styles.badge}>
              <div className={styles.badge1}>10</div>
            </div> */}
            <div className={styles.PatientDetailsTextBox}>
              <div className={styles.PatientDetailsText}>Patient's Details</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyPatient;

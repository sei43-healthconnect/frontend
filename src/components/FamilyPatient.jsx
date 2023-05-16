import React, { useContext, useState, useEffect } from "react";
import styles from "./FamilyPatient.module.css";
import { Avatar, Badge } from "@mui/material";
import Patient1 from "./Images/Patient1.png";
import { fetchData } from "../helpers/common";
import VerificationModal from "./VerificationModal";
import UserContext from "../context/user";

const FamilyPatient = () => {
  const userCtx = useContext(UserContext);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [staffs, setStaffs] = useState([]);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const getSelectedPatient = async () => {
    // get patient nric from context
    // use patient nric as part of my GET request parameters
    // userCtx.patient_nric;

    const { ok, data } = await fetchData("/api/patients/nric", "POST", {
      patient_nric: "s0000001x",
    });

    if (ok) {
      setSelectedPatient(data);
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
    getSelectedPatient();
    getStaffs();
  }, []);

  const handleModal = (event) => {
    setShowVerificationModal(true);
  };

  const handleCloseModal = (event) => {
    setShowVerificationModal(false);
  };

  const handleConfirmPatient = (event) => {
    if (event.target.value == selectedPatient.patient_nric) {
      setShowVerificationModal(false);
    }
  };

  return (
    <>
      {showVerificationModal && (
        <VerificationModal
          ic={selectedPatient.patient_nric}
          setShowVerificationModal={setShowVerificationModal}
          confirmNRIC={confirmNRIC}
          handleCloseModal={handleCloseModal}
          handleConfirmPatient={handleConfirmPatient}
        />
      )}

      <div className={styles.FamilyPatient}>
        <div className={styles.MyCareDisplay}>
          <div className={styles.MyCare}>My Care</div>
        </div>
        <div className={styles.PatientDetailsDisplay}>
          <div className={styles.PatientDetails}>
            <Avatar
              alt="Patient1"
              src={Patient1}
              // src={selectedPatient.patient_photo}
              sx={{ width: 96, height: 96 }}
            />
            <div className={styles.PatientDetailsBox}>
              <div className={styles.PatientNameBox}>
                <div className={styles.PatientName}>Patient Name</div>
                <div className={styles.PatientNameText}>
                  {selectedPatient.patient_firstName}
                  {selectedPatient.patient_lastName}
                  Kah Poh Tian
                </div>
              </div>
              <div className={styles.HospitalDetailsBox}>
                <div className={styles.admitted}>Admitted To</div>
                <div className={styles.hospName}>
                  Ang Mo Kio Community Hospital
                </div>
                <div className={styles.WardNoBedNo}>
                  {selectedPatient.patient_ward}
                  Ward 46 /{selectedPatient.patient_bed}
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
          <div className={styles.ButtonBox}>
            <div className={styles.Button2Box}>
              <Badge badgeContent={10} color="primary">
                <button
                  className={styles.MessageStaffBox}
                  onClick={handleModal}
                >
                  <div className={styles.MessageStaffText}>Message Staff</div>
                </button>
              </Badge>
              {/* <div className={styles.badge}>
              <div className={styles.badge1}>10</div>
            </div> */}
              <button className={styles.PatientDetailsTextBox}>
                <div className={styles.PatientDetailsText}>
                  Patient's Details
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FamilyPatient;

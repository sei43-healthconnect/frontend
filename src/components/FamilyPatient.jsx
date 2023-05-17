import React, { useContext, useState, useEffect } from "react";
import styles from "./FamilyPatient.module.css";
import { Avatar, Badge } from "@mui/material";
import { fetchData } from "../helpers/common";
import VerificationModal from "./VerificationModal";
import UserContext from "../context/user";

const FamilyPatient = (props) => {
  const userCtx = useContext(UserContext);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [authorised, setAuthorised] = useState(false);

  const getPatient = async () => {
    const { ok, data } = await fetchData("/api/patients/nric", "POST", {
      patient_nric: userCtx.user.contact_patientNric,
    });

    if (ok) {
      userCtx.setPatient(data);
    } else {
      console.log(data);
    }
  };

  const handleModal = (event) => {
    setShowVerificationModal(true);
    if (userCtx.authorised) {
      props.setShowPatientDetails(true);
    }
  };

  const handleChatModal = (event) => {
    setShowVerificationModal(true);
    if (userCtx.authorised) {
      props.setShowChat(true);
    }
  };

  const handleCloseModal = (event) => {
    setShowVerificationModal(false);
  };

  useEffect(() => {
    getPatient();
  }, []);

  console.log(userCtx.patient);
  return (
    <>
      {showVerificationModal && !userCtx.authorised && (
        <VerificationModal
          setShowVerificationModal={setShowVerificationModal}
          handleCloseModal={handleCloseModal}
          setAuthorised={setAuthorised}
          setShowPatientDetails={props.setShowPatientDetails}
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
              src={userCtx.patient.patient_photo}
              sx={{ width: 96, height: 96 }}
            />
            <div className={styles.PatientDetailsBox}>
              <div className={styles.PatientNameBox}>
                <div className={styles.PatientName}>Patient Name</div>
                <div className={styles.PatientNameText}>
                  {`${userCtx.patient.firstName} ${userCtx.patient.lastName}`}
                </div>
              </div>
              <div className={styles.HospitalDetailsBox}>
                <div className={styles.admitted}>Admitted To</div>
                <div className={styles.hospName}>
                  Ang Mo Kio Community Hospital
                </div>
                <div className={styles.WardNoBedNo}>
                  Ward {userCtx.patient.patient_ward} / Bed {""}
                  {userCtx.patient.patient_bed}
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
                  onClick={handleChatModal}
                >
                  <div className={styles.MessageStaffText}>Message Staff</div>
                </button>
              </Badge>
              {/* <div className={styles.badge}>
              <div className={styles.badge1}>10</div>
            </div> */}
              <button
                className={styles.PatientDetailsTextBox}
                onClick={handleModal}
              >
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

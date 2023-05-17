import { TextField } from "@mui/material";
import React from "react";
import styles from "./PatientDetails.module.css";
import CloseIcon from "@mui/icons-material/Close";
import UserContext from "../context/user";

const PatientDetails = () => {
  return (
    <>
      <div>patient details</div>
      <TextField id="outlined-basic" variant="outlined" value={"yhiuyi"} />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      {/* 
      <div className={styles.backdrop}>
        <div className={styles.modalBox}>
          <div className={styles.firstBox}>
            <div className={styles.firstTextBox}>Verification</div>
            <div className={styles.firstXBox}>
              <CloseIcon
                sx={{ width: 24, height: 24 }}
                role="button"
                onClick=""
              />
            </div>
          </div>
          <div className={styles.secondBox}>
            <div className={styles.secondTextBox}>
              <div className={styles.secondBoxText}>
                Please Key in the NRIC of the patient to proceed.
              </div>
            </div>
          </div>
          <div className={styles.thirdBox}>
            <div className={styles.NRICBox}>
              <input
                type="NRIC"
                className={styles.NRICInput}
                placeholder="e.g S1234567A"
                // ref={inputRef}
              ></input>
              <div className={styles.NRICYellowBox}>
                <div className={styles.NRICYellowBoxText}>NRIC</div>
              </div>
            </div>
          </div>
          <div className={styles.fourthBox}>
            <button
              className={styles.confirmButton}
              // onClick={handleConfirmPatient}
            >
              <div className={styles.confirmText}>Confirm</div>
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default PatientDetails;

import React from "react";
import ReactDOM from "react-dom";
import styles from "./VerificationModal.module.css";
import CloseIcon from "@mui/icons-material/Close";

const OverLay = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modalBox}>
        <div className={styles.firstBox}>
          <div className={styles.firstTextBox}>Verification</div>
          <div className={styles.firstXBox}>
            <CloseIcon
              sx={{ width: 24, height: 24 }}
              role="button"
              onClick={props.handleCloseModal}
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
            ></input>
            <div className={styles.NRICYellowBox}>
              <div className={styles.NRICYellowBoxText}>NRIC</div>
            </div>
          </div>
        </div>
        <div className={styles.fourthBox}>
          <button
            className={styles.confirmButton}
            onClick={props.handleConfirmPatient}
          >
            <div className={styles.confirmText}>Confirm</div>
          </button>
        </div>
      </div>
    </div>
  );
};

const VerificationModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          // patientNRIC={props.NRIC} confirmNRIC={props.confirmNRIC}
          handleCloseModal={props.handleCloseModal}
          handleConfirmPatient={props.handleConfirmPatient}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default VerificationModal;

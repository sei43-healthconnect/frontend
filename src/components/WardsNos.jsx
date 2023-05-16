import React from "react";
import styles from "./WardsNos.module.css";

const WardsNos = (props) => {
  return (
    <button
      className={styles.WardsButton}
      // onClick={}
    >
      <div className={styles.WardNo}>{props.ward}</div>
    </button>
  );
};

export default WardsNos;

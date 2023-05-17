import React from "react";
import styles from "./HomePage.module.css";
import StaffDisplay from "./StaffDisplay";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <StaffDisplay />
    </div>
  );
};

export default HomePage;

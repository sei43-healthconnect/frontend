import React from "react";
import Header from "./Header";
import styles from "./HomePage.module.css";
import SubHeader from "./SubHeader";
import StaffDisplay from "./StaffDisplay";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <StaffDisplay />
    </div>
  );
};

export default HomePage;

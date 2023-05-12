import React from "react";
import Header from "./Header";
import styles from "./HomePage.module.css";
import SubHeader from "./SubHeader";
import StaffDetails from "./StaffDetails";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Header />
      <SubHeader />
      <StaffDetails />
    </div>
  );
};

export default HomePage;

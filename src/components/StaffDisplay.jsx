import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { Avatar, Button } from "@mui/material";
import { fetchData } from "../helpers/common";
import StaffWards from "./StaffWards";
import WardBeds from "./WardBeds";
import Bed from "./Bed";

import UserContext from "../context/user";
import PageContext from "../context/page";

const StaffDisplay = (props) => {
  const [showWards, setShowWards] = useState(true);
  const [showBeds, setShowBeds] = useState(false);
  const [showPatient, setShowPatient] = useState(false);

  const [selectedWard, setSelectedWard] = useState();
  const [selectedBed, setSelectedBed] = useState();

  const [allPatients, setAllPatients] = useState([]);

  const userCtx = useContext(UserContext);
  const pageCtx = useContext(PageContext);

  // // GET all patients
  // const getAllPatients = async () => {
  //   const { ok, data } = await fetchData("/api/patients");
  //   if (ok) {
  //     setAllPatients(data);
  //   } else {
  //     console.log(data);
  //   }
  // };

  // Once a ward is clicked, the number is stored in selectedWard, and the ward component is hidden
  const handleWardClick = (event) => {
    setSelectedWard(event.target.textContent);
    console.log("selected ward: ", event.target.textContent);
    pageCtx.setShowWards((prevState) => !prevState);
    pageCtx.setShowBeds((prevState) => !prevState);
  };

  const handleBedClick = (bedNumber, item) => {
    userCtx.setPatient(item);
    console.log("event: ", bedNumber);
    setSelectedBed(bedNumber);
    pageCtx.setShowBeds((prevState) => !prevState);
    pageCtx.setShowPatient((prevState) => !prevState);
  };

  // useEffect(() => {
  //   getAllPatients();
  // }, []);

  return (
    <>
      <div>
        {pageCtx.showWards && (
          <StaffWards
            handleWardClick={handleWardClick}
            setSelectedWard={setSelectedWard}
          ></StaffWards>
        )}
      </div>
      <div>
        {pageCtx.showBeds && (
          <WardBeds
            selectedWard={selectedWard}
            handleBedClick={handleBedClick}
          ></WardBeds>
        )}
      </div>
      <div>
        {pageCtx.showPatient && (
          <Bed selectedWard={selectedWard} selectedBed={selectedBed}></Bed>
        )}
      </div>
    </>
  );
};

export default StaffDisplay;

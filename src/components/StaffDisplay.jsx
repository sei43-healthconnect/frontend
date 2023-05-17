import React, { useState, useEffect, useContext } from "react";
import { Avatar, Button } from "@mui/material";
import { fetchData } from "../helpers/common";
import StaffWards from "./StaffWards";
import WardBeds from "./WardBeds";
import Bed from "./Bed";
import UserContext from "../context/user";

const StaffDisplay = () => {
  const [showWards, setShowWards] = useState(true);
  const [showBeds, setShowBeds] = useState(false);
  const [showPatient, setShowPatient] = useState(false);

  const [selectedWard, setSelectedWard] = useState();
  const [selectedBed, setSelectedBed] = useState();

  const [allPatients, setAllPatients] = useState([]);

  const userCtx = useContext(UserContext);

  // GET all patients
  const getAllPatients = async () => {
    const { ok, data } = await fetchData("/api/patients");
    if (ok) {
      setAllPatients(data);
    } else {
      console.log(data);
    }
  };

  // Once a ward is clicked, the number is stored in selectedWard, and the ward component is hidden
  const handleWardClick = (event) => {
    setSelectedWard(event.target.textContent);
    console.log("selected ward: ", event.target.textContent);
    setShowWards((prevState) => !prevState);
    setShowBeds((prevState) => !prevState);
  };

  const handleBedClick = (bedNumber, item) => {
    userCtx.setPatient(item);
    console.log("event: ", bedNumber);
    setSelectedBed(bedNumber);
    setShowBeds((prevState) => !prevState);
    setShowPatient((prevState) => !prevState);
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <>
      <div>
        {showWards && (
          <StaffWards handleWardClick={handleWardClick}></StaffWards>
        )}
      </div>
      <div>
        {showBeds && (
          <WardBeds
            selectedWard={selectedWard}
            handleBedClick={handleBedClick}
          ></WardBeds>
        )}
      </div>
      <div>
        {showPatient && (
          <Bed selectedWard={selectedWard} selectedBed={selectedBed}></Bed>
        )}
      </div>
    </>
  );
};

export default StaffDisplay;

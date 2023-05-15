import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/common";

const StaffDisplay = () => {
  const [staff, setStaff] = useState([]);
  const [allPatients, setAllPatients] = useState([]);
  const [patient, setPatient] = useState([]);
  const [staffWards, setStaffWards] = useState();
  const [showWards, setShowWards] = useState(true);
  const [showBeds, setShowBeds] = useState(false);
  const [selectedWard, setSelectedWard] = useState();

  // GET a staff by his NRIC Number
  const getStaffByNric = async () => {
    const { ok, data } = await fetchData("/api/staff/nric", "POST", {
      staff_nric: "t3132589i",
    });

    if (ok) {
      setStaff(data);
      setStaffWards(data.staff_ward);
    } else {
      console.log(data);
    }
  };

  // This GET all patients works
  const getAllPatients = async () => {
    const { ok, data } = await fetchData("/api/patients");
    console.log("AllPatients:");
    console.log(data);
    if (ok) {
      setAllPatients(data);
    } else {
      console.log(data);
    }
  };

  const handleWardClick = (event) => {
    setShowWards(false);
    setShowBeds(true);
    setSelectedWard(event.target.value);
    console.log(selectedWard);
    console.log("show wards", showWards);
    console.log("show beds", showBeds);

    setShowBeds(true);
  };

  useEffect(() => {
    getAllPatients();
    getStaffByNric();
  }, []);

  useEffect(() => {
    showBeds;
  }, [showWards]);

  console.log("show wards", showWards);

  return (
    <>
      <div className="row">
        <div>One Staff: </div>
        <div>
          <div>{staff.staff_gender}</div>
          <div>{staff.staff_firstName}</div>
          <div>{staff.staff_lastName}</div>
          {showWards &&
            staffWards?.map((item) => {
              return (
                <button
                  className="ward"
                  onClick={(event) => {
                    handleWardClick(event);
                  }}
                >
                  {item}
                </button>
              );
            })}
        </div>
        <div>
          {showBeds &&
            bedsInWard?.map((item) => {
              return (
                <button className="beds" onClick="">
                  {item}
                </button>
              );
            })}
        </div>

        <br />
        <div>Show Wards: {showWards}</div>
        <div>Show Beds: {showBeds}</div>
      </div>

      <div className="row">
        <br />
        // To check if allPatients works
        <div>// All Patients //</div>
        {allPatients.map((item) => {
          return (
            <div>
              Last Name: {item.patient_lastName}, First Name:
              {item.patient_firstName}, NRIC: {item.patient_nric}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StaffDisplay;

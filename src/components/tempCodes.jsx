import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/common";

const StaffDisplay = () => {
  const [allStaff, setAllStaff] = useState([]);
  const [staff, setStaff] = useState([]);
  const [allPatients, setAllPatients] = useState([]);
  const [patient, setPatient] = useState([]);
  const [ward, setWard] = useState();

  // This GET all staff works
  const getAllStaff = async () => {
    const { ok, data } = await fetchData("/api/staff");
    console.log("AllStaff:");
    console.log(data);
    if (ok) {
      setAllStaff(data);
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

  // GET a staff by his NRIC Number
  const getStaffByNric = async () => {
    const { ok, data } = await fetchData("/api/staff/nric", "POST", {
      staff_nric: "t3132589i",
    });
    console.log("One Staff:");
    console.log(data.staff_firstName, data.staff_lastName, data.staff_ward[0]);

    if (ok) {
      setStaff(data);
    } else {
      console.log(data);
    }
  };

  // GET a patient by his NRIC Number
  const getPatientByNric = async () => {
    const { ok, data } = await fetchData("/api/patients/nric", "POST", {
      patient_nric: "t1778359x",
    });

    if (ok) {
      setPatient(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getAllPatients();
    getAllStaff();
    getPatientByNric();
    getStaffByNric();
  }, []);

  useEffect(() => {
    setWard(staff.ward);
  }, [getPatientByNric]);

  return (
    <>
      <div className="row">
        <div>One Staff: </div>
        <div>
          <div>{staff.staff_gender}</div>
          <div>{staff.staff_firstName}</div>
          <div>{staff.staff_lastName}</div>
          {staff.staff_ward.map((item) => {
            return (
              <button
                className="ward"
                // onCLick={(event) => {
                //   setWard(event.target.value);
                // }}
              >
                {item}
              </button>
            );
          })}
        </div>
        <br />
        // to check if allStaff works
        <div>All Staff</div>
        {allStaff.map((item) => {
          return <div>{item.staff_hospitalId}</div>;
        })}
      </div>

      <div className="row">
        <div>One Patient: </div>
        <div>
          <div>{patient.patient_gender}</div>
          <div>{patient.patient_firstName}</div>
          <div>{patient.patient_lastName}</div>
        </div>
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

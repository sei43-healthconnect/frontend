import React, { useEffect, useRef, useState, useContext } from "react";
import { fetchData } from "../helpers/common";

const StaffDisplay = () => {
  const [allStaff, setAllStaff] = useState([]);
  const [oneStaff, setOneStaff] = useState([]);

  // This GET works
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

  const getOneStaff = async () => {
    const { ok, data } = await fetchData("/api/staff", "POST", {
      id: "6454e24f9d39467f4d224a86",
    });
    console.log("One Staff, Firstname:");
    console.log(data.staff_firstName);

    if (ok) {
      setOneStaff(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getAllStaff();
    getOneStaff();
  }, []);

  return (
    <div>
      <div>One Staff: </div>
      <div>{oneStaff.staff_gender}</div>
      <div>{oneStaff.staff_firstName}</div>
      <div>{oneStaff.staff_lastName}</div>
      <div>{oneStaff.staff_ward[0]}</div>
      <div>{oneStaff.staff_ward[1]}</div>
      <div>{oneStaff.staff_ward[2]}</div>

      {/* <div>All Staff</div>
      {allStaff.map((item) => {
        return <div>{item.staff_hospitalId}</div>;
      })} */}
    </div>
  );
};

export default StaffDisplay;

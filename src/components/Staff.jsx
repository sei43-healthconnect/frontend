import React, { useState } from "react";

const Staff = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-3">{props.staff_firstName}</div>
        <div className="col-sm-3">{props.staff_lastName}</div>
        <div className="col-sm-2">{props.staff_firstName}</div>
      </div>
    </>
  );
};

export default Staff;

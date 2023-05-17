import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React from "react";
import UserContext from "../context/user";
import { useState, useContext } from "react";

const PatientDetails = () => {
  // this date formatting formula need to be positionned above the state declaration because dateAdmitted and dateOfBirth make use of them...
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${year}-${month}-${day}`;
  };
  // this date & time formatting formula need to be positionned above the state declaration because dateAdmitted and dateOfBirth make use of them...
  const formatDateTime = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const userCtx = useContext(UserContext);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState(
    formatDate(userCtx.patient.patient_dateOfBirth)
  );
  const [dateAdmitted, setDateAdmitted] = useState(
    formatDateTime(userCtx.patient.patient_dateAdmitted)
  );
  const [diet, setDiet] = useState();
  const [language, setLanguage] = useState();
  const [attention, setAttention] = useState();
  const [doctorRemark, setDoctorRemark] = useState();

  const buttonStyling = {
    backgroundColor: "#004B64",
    fontWeight: 400,
    font: "Roboto",
    fontSize: "1rem",
    textTransform: "none",
  };

  const floatingLabel = {
    backgroundColor: "#ffecb3",
    font: "Roboto",
    fontWeight: "400",
    fontSize: "14px",
    textTransform: "none",
    padding: "0px 4px",
  };

  console.log("role", userCtx.role);

  userCtx.setRole("staff");

  return (
    <div
      style={{
        padding: "0px 20px",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          color: "#004B64",
          textAlign: "left",
          padding: "32px 4px 16px",
        }}
      >
        Patient's details
      </div>
      <div>
        <Stack spacing={5}>
          <FormControl variant="outlined">
            {/* //First Name input area*/}
            <InputLabel sx={floatingLabel} htmlFor="First Name">
              First Name
            </InputLabel>
            <OutlinedInput
              id="patient_firstName"
              type="text"
              value={userCtx.patient.patient_firstName}
              label="First Name"
              disabled={true}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel sx={floatingLabel} htmlFor="Last Name">
              Last Name
            </InputLabel>
            <OutlinedInput
              id="Last Name"
              type="text"
              value={userCtx.patient.patient_lastName}
              label="Last Name"
              disabled={true}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel sx={floatingLabel} htmlFor="Date of BirthA">
              Date of birth
            </InputLabel>
            <OutlinedInput
              id="Date of birth"
              type="date"
              value={dateOfBirth}
              label="Date of birth"
              disabled={true}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel sx={floatingLabel} htmlFor="dateTime admitted">
              Date & Time admitted
            </InputLabel>
            <OutlinedInput
              id="dateTime admitted"
              type="datetime-local"
              value={dateAdmitted}
              label="dateTime admitted"
              disabled={true}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel sx={floatingLabel} htmlFor="Dietary requirements">
              Dietary requirements
            </InputLabel>
            <OutlinedInput
              id="Dietary requirements"
              type="text"
              value={userCtx.patient.patient_diet}
              onChange={(e) => setDiet(e.target.value)}
              label="Dietary requirements"
              disabled={userCtx.role == "staff" ? false : true}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel sx={floatingLabel} htmlFor="language">
              Language
            </InputLabel>
            <OutlinedInput
              id="language"
              type="text"
              value={userCtx.patient.patient_language}
              onChange={(e) => setLanguage(e.target.value)}
              label="language"
              disabled={userCtx.role == "staff" ? false : true}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel sx={floatingLabel} htmlFor="attention">
              Attention
            </InputLabel>
            <OutlinedInput
              id="attention"
              type="text"
              value={userCtx.patient.patient_attention}
              onChange={(e) => setAttention(e.target.value)}
              label="attention"
              disabled={userCtx.role == "staff" ? false : true}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel sx={floatingLabel} htmlFor="doctor remarks">
              Doctor's remarks
            </InputLabel>
            <OutlinedInput
              id="doctor remarks"
              type="text"
              value={userCtx.patient.patient_doctorRemark}
              onChange={(e) => setDoctorRemark(e.target.value)}
              label="doctor remarks"
              disabled={userCtx.role == "staff" ? false : true}
            />
          </FormControl>

          {userCtx.role == "staff" && (
            <Button
              sx={buttonStyling}
              // disabled={!(user && password)}
              variant="contained"
              size="large"
              // onClick={handleLogin}
            >
              Save
            </Button>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default PatientDetails;

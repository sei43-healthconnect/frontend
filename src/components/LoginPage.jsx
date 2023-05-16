import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import HomeLogo from "./Images/HomeLogoFrame.png";
import { Button, FormControl, Input, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const StaffLogin = () => {
  const userCtx = useContext(UserContext);
  const [role, setRole] = useState('') // set thru the choosing of button
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { ok, data } = await fetchData("/auth/login", "POST", {
      role: role,
      user: user,
      password: password,
    });

    if (ok) {
      userCtx.setUserID(data._id)
      userCtx.setRole(role)
      if (role == 'contact') {
        userCtx.setPatientNOK(data)
      }
    } else {
      console.log(data);
    }
    setRole('')
    setUser('')
    setPassword('')
  };

  const buttonStyling = {
    backgroundColor: '#004B64',
    fontWeight: 400,
    font: 'Roboto',
    fontSize: '1rem',
    textTransform: 'none'
  }


  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div style={{ margin: '38px 0px'}}>
        <img src={HomeLogo} />
      </div>

      <div style={{ width: '100%', height: '100vh', padding: '0 24px'}}>
      {!role && (
        <Stack spacing={5}>
          <Button sx={buttonStyling} variant="contained" size="large" onClick={()=> setRole('staff')}>Staff Login</Button>
          <Button sx={buttonStyling} variant="contained" size="large" onClick={()=> setRole('contact')}>Patient Contact Login</Button>
        </Stack>   
      )}

      {role && (
        <Stack spacing={5}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="user">{role=='staff' ? 'Staff ID': 'Mobile No.' }</InputLabel>
            <OutlinedInput 
            id="user" 
            type="text"
            value={user}
            onChange={(e)=> setUser(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <HighlightOffIcon style={{cursor:'pointer'}} onClick={()=> setUser('')} />
              </InputAdornment>
            } 
            label={role=='staff' ? 'Staff ID': 'Mobile No.' }
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput 
            id="password" 
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <HighlightOffIcon style={{cursor:'pointer'}} onClick={()=> setPassword('')} />
              </InputAdornment>
            } 
            label="Password" 
            />
          </FormControl>

          <Button sx={buttonStyling} disabled={!(user && password)} variant="contained" size="large" onClick={handleLogin}>Login</Button>
        </Stack>
      )
      
      
      
      }




      </div>  
    </div>

      // <div className="inputs">
      //   <input
      //     type="text"
      //     className={styles.input1}
      //     value={id}
      //     onChange={(e) => setId(e.target.value)}
      //   />
      //   <br></br>
      //   <input
      //     type="password"
      //     className={styles.input2}
      //     value={password}
      //     onChange={(e) => setPassword(e.target.value)}
      //   />
      // </div>
      // <div className="forget">
      //   <p>
      //     <u>Forget Password?</u>
      //   </p>
      // </div>
      // <button className={styles.button} type="submit" onClick={handleLogin}>
      //   Login
      // </button>

      // <br />
  );
};

export default StaffLogin;

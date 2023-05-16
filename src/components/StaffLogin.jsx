import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import styles from "./Login.module.css";
import HomeLogo from "./Images/HomeLogoFrame.png";
import { Button, FormControl, Input, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const StaffLogin = (props) => {
  const userCtx = useContext(UserContext);
  const [role, setRole] = useState('') // set thru the choosing of button
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { ok, data } = await fetchData("/auth/login", "POST", {
      id,
      password,
    });
    if (ok) {
      handleLogin(data);
    } else {
      console.log(data);
    }
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

      <div className={ styles["main-container"] }>
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
            endAdornment={
              <InputAdornment position="end">
                <HighlightOffIcon style={{cursor:'pointer'}} onClick={()=> setUser('')} />
              </InputAdornment>
            } 
            label={role=='staff' ? 'Staff ID': 'Mobile No.' }
            onChange={(e)=> setUser(e.value)}/>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput 
            id="password" 
            type="password"
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <HighlightOffIcon style={{cursor:'pointer'}} onClick={()=> setPassword('')} />
              </InputAdornment>
            } 
            label="Password" 
            onChange={(e)=> setPassword(e.value)}/>
          </FormControl>

        <Button sx={buttonStyling} variant="contained" size="large" onClick={()=> console.log('login')}>Login</Button>

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

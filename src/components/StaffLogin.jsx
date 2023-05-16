import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import styles from "./Login.module.css";
import MiddleLogo from "./Images/MiddleLogo.png";

const StaffLogin = (props) => {
  const userCtx = useContext(UserContext);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <>
      <br />
      <div className="head">
        <img className={styles.MiddleLogo} src={MiddleLogo} />
        <br></br>

        <h1 className="h1">Health Connect</h1>
        <p className="para">Coming Together As One</p>
      </div>
      <div className="inputs">
        <input
          type="text"
          className={styles.input1}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          className={styles.input2}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="forget">
        <p>
          <u>Forget Password?</u>
        </p>
      </div>
      <button className={styles.button} type="submit" onClick={handleLogin}>
        Login
      </button>

      <br />
    </>
  );
};

export default StaffLogin;

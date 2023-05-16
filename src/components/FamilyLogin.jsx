import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const FamilyLogin = (props) => {
  const userCtx = useContext(UserContext);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { ok, data } = await fetchData("", "POST", {
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
      <img src={MiddleLogo} />
      <div className="row">
        <input
          type="text"
          className="col-md-4"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="row">
        <input
          type="password"
          className="col-md-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <button className="col-md-4" type="submit" onClick={handleLogin}>
          Login
        </button>
        <div className="col-md-4"></div>
      </div>
      <br />
    </>
  );
};

export default FamilyLogin;

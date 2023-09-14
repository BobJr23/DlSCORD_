import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import './login.scss';
import {Link} from "react-router-dom";

function Login() {
    const [token, setToken] = useState("");
    const handleTokenChange = (event) => {
        setToken(event.target.value);
    };
  const login = async (e) => {
      e.preventDefault()
      document.cookie = "token="+token
      window.open("home", "_self");
  };

  return (
      <div id={"login-form"}>
            <h1>Login</h1>
            <input onChange={handleTokenChange}  value={token.value} id="tokenPaste" type="text" placeholder="Discord Token" />
            <button type="submit" id="submitToken" onClick={login}>submit</button>
            <a href = "https://www.youtube.com/watch?v=YEgFvgg7ZPI" target="_blank">Where is my discord token?</a>
      </div>
  );
}

export default Login;
// "NTg2MTU1ODUzMTU4Mjg1MzIx.GMXELS.faHuJ74NJzCXmDTS9lXcOJsXD4yu4mj39lyHrw"
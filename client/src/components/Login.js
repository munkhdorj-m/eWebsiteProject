import React from "react";
import { useState } from "react";
import "../styles/Join.css";

const Join = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = fetch("http://localhost:2000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json.data;
    console.log(data);
  }

  return (
    <div className="form">
      <div className="title">Nice to see you again</div>
      <div className="subtitle">Sign in</div>
      <div className="input-container ic2">
        <input
          className="input"
          type="text"
          placeholder=" "
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
        />
        <div className="cut cut-short"></div>
        <label className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input
          className="input"
          type="password"
          placeholder=" "
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <div className="cut"></div>
        <label className="placeholder">Password</label>
      </div>
      <button type="text" className="submit" onClick={loginUser}>
        login
      </button>
    </div>
  );
};

export default Join;

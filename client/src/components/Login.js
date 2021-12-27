import React from "react";
import { useState } from "react";
import "../styles/Join.css";
import swal from "sweetalert";

const Join = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:2000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status == "error") {
      console.log("user dont exist");
      return swal({
        title: "User Dont Exist",
        text: "Please check your password and email",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      console.log("successfull");
      return swal({
        title: "Success",
        text: "Welcome back",
        icon: "success",
        dangerMode: false,
      });
    }
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

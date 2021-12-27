import React from "react";
import { useState } from "react";
import "../styles/Join.css";
import swal from "sweetalert";

const Join = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const myArr = [];

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:2000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.status == "error") {
      console.log("already user has been registered");
      return swal({
        title: "Error!",
        text: "User has already been registered",
        icon: "warning",
        dangerMode: true,
      });
    } else {
      console.log("successfully registered");
      return swal({
        title: "Success",
        text: "You have been successfully registered",
        icon: "success",
        dangerMode: false,
      });
    }
  }

  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          placeholder=" "
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />
        <div className="cut"></div>
        <label className="placeholder">Name</label>
      </div>

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
      <button type="text" className="submit" onClick={registerUser}>
        submit
      </button>
    </div>
  );
};

export default Join;

import React from "react";
import { useNavigate } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

const Orghana = (props) => {
  const Text = props.inner;
  let navigate = useNavigate();
  return (
    <div>
      <Navbar navigate={navigate} />
      <Body navigate={navigate} inner={Text} />
    </div>
  );
};

export default Orghana;

import React from "react";
import Orghana from "./Orghana";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Join from "./components/Join";
import Home from "./components/Home";
import Login from "./components/Login";
import ReadMore from "./components/ReadMore";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Orghana inner={Home} />} />
        <Route path="join" element={<Orghana inner={Join} />} />
        <Route path="login" element={<Orghana inner={Login} />} />
        <Route path="readmore" element={<Orghana inner={ReadMore} />} />
      </Routes>
    </Router>
  );
};

export default App;

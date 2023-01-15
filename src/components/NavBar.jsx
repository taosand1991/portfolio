import React, { Fragment, useEffect, useState } from "react";
import "../css/Navbar.css";
import moment from 'moment'



const NavBar = () => {
  const [showTime, setShowTime] = useState('')

  useEffect(() => {
      setInterval(() => {
        setShowTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
      }, 1000);
  }, [])

  const handleAbout = () => {
    document.getElementById("about").scrollIntoView();
  };
  const handleExperience = () => {
    document
      .getElementById("experience")
      .scrollIntoView({ behavior: "smooth" });
  };
  const handleSkills = () => {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  };
  const handlePortFolio = () => {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <nav>
        <div className="logo">
          <img src='static/images/logo.png' alt="no pic" />
        </div>
        <div className="timezone">
          <p>{showTime}</p>
        </div>
        <ul>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleExperience}>Experience</li>
          <li onClick={handleSkills}>Skills</li>
          <li onClick={handlePortFolio}>PortFolio</li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;

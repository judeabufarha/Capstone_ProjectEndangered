import React, { useState, useContext } from "react";
import "./styles.css";
import Hamburger from "hamburger-react";
import { NavLink } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar";
import { ToggleContext } from "../../contexts/ToggleContext";


  {/**Navigation Bar Component */}
export const Navbar = ({ handleStepNavigation }) => {
  // const [showSidebar, setShowSidebar] = useState(false)
  const { closeBar, showSidebar } = useContext(ToggleContext);
  const handleClick = () => {
    closeBar();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/**hamburger menu item */}
        <div className="hamburger-btn" onClick={handleClick}>
            {/**Importing hamburger menu icon component passing size and colour */}
          <Hamburger rounded size={24} color="#013440" />
        </div>
        <div className="navigation">
            {/**setting navlink for the homepage*/}
          <NavLink to="/">
              {/**homepage logo */}
            <img
              className="home-logo"
              src="https://i.ibb.co/s9VZGpQ/Project-Endangered-Logo-1.png"
              alt="project-endangered-logo"
            />
          </NavLink>

          <NavLink to="/">
            <p>Project Endangered</p>
          </NavLink>

          {/* <img className ="team-logo"
                  src = "https://i.ibb.co/bbmBWtm/Logo.png" alt = "team-logo"/> */}
        </div>

      </div>

      <Sidebar handleStepNavigation={handleStepNavigation} />
    </nav>
  );
};

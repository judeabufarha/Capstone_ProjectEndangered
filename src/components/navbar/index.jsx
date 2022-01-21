import React, {useState, useContext} from "react"
import "./styles.css";
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import {
    NavLink
  } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar";
import { ToggleContext } from "../../contexts/ToggleContext";

export const Navbar = () => {
    // const [showSidebar, setShowSidebar] = useState(false)
    const {closeBar, showSidebar} = useContext(ToggleContext)
    const handleClick = ()=>{
        closeBar()
    }

    return (
        <nav className="navbar">
            <div className= "navigation">
                <NavLink to="/">
                    <img className = "home-logo"  src = "https://i.ibb.co/wdzwBYL/project-endagered-logo.png" alt ="project-endangered-logo"/> 
                </NavLink>
               
                {/* <img className ="team-logo"
                src = "https://i.ibb.co/bbmBWtm/Logo.png" alt = "team-logo"/> */}
            </div>
        <div className = "hamburger-btn" onClick = {handleClick}>
            <Hamburger rounded size={25}  color="#013440" />
        </div>
        <div>
           
        </div>
    
        <Sidebar />
        </nav>
    );
};

import React, {useState} from "react"
import "./styles.css";
import Hamburger from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import {
    NavLink
  } from "react-router-dom";
import { Sidebar } from "../sidebar/sidebar";

export const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const toggleSidebar = ()=>{
        setShowSidebar(!showSidebar)
    }
    return (
        <nav className="navbar">
            <div className= "navigation">
                <NavLink to="/">
                    <img className = "home-logo"  src = "https://i.ibb.co/wdzwBYL/project-endagered-logo.png" alt ="project-endangered-logo"/> 
                </NavLink>
               
                <img className ="team-logo"
                src = "https://i.ibb.co/bbmBWtm/Logo.png" alt = "team-logo"/>
            </div>
        <div className = "hamburger-btn">
            <Hamburger rounded size={25}  color="#013440" toggled={showSidebar} toggle={setShowSidebar}  onToggle={toggled => {
            if (toggled) {
                <div className = "showsidebar">
                setShowSidebar(!showSidebar)
                </div>
            } 
            }} />
        </div>
        <div>
           
        </div>
        {showSidebar && <Sidebar/>}
        </nav>
    );
};

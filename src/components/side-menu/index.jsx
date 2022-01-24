import "./styles.css";
import { useState } from "react";
import { useContext } from "react";
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import { ToggleContext } from "../../contexts/ToggleContext";

import { MenuItem } from "../menu-item";
import { ToggleSwitch } from "../toggle-switch";

export const SideMenu = () => {
    return (
        <nav>
            <div className="side-menu-container">
                <div className="parallax-toggle-group">
                    <b className="parallax-toggle-text">Side Scrolling</b>
                    <div className="parallax-toggle-switch">
                        <ToggleSwitch/>
                    </div>
                </div>
                <div className="side-menu-items">
                    <NavLink exact to="/" className = "home">
                        <MenuItem icon="https://i.ibb.co/rwj94wN/Web-Icons-Final-home.png" text='Home' state='normal' expand='false'/>
                    </NavLink>
                    <NavLink exact to="/polar-bear" className = "polar-bear">
                        <MenuItem icon="https://i.ibb.co/BZXSvm2/Web-Icons-Final-polarbear-dark.png" text='Polar Bear' state='normal' expand='true'/>
                    </NavLink>
                    <NavLink exact to="/forest-elephant" className = "forest-elephant">
                        <MenuItem icon="https://i.ibb.co/ft1vPKc/Web-Icons-Final-elephant-dark.png" text='Forest Elephant' state='normal' expand='true'/>
                    </NavLink>
                    <NavLink exact to="/whooping-crane" className = "whooping-crane">
                        <MenuItem icon="https://i.ibb.co/Vm3c5Xg/Web-Icons-Final-crane-dark.png" text='Whooping Crane' state='normal' expand='true'/>
                    </NavLink>
                    <NavLink exact to="/turtle" className = "sea-turtle">
                        <MenuItem icon="https://i.ibb.co/qjTcq1h/Web-Icons-Final-turtle-dark.png" text='Green Sea Turtle' state='normal' expand='true'/>
                    </NavLink>
                    <NavLink exact to="/orangutan" className = "orangutan">
                        <MenuItem icon="https://i.ibb.co/bBJfcCx/Web-Icons-Final-orangutan-dark.png" text='Orangutan' state='normal' expand='true'/>
                    </NavLink>
                </div>
                <div className="side-menu-footer">
                    <div className= "footer-div"></div>  
                    <img className="footer-logo"src="https://i.ibb.co/2tCZtBY/coloured-Logo.png" alt="Project Endangered Logo"></img> 
                    <p className="footer-copyright">Copyright © 2022 Parallax Designs</p>
                </div>
            </div>
  
            
        </nav>
        
    );
};

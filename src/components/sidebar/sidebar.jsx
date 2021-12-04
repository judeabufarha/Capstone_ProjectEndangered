import "./styles.css";


import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

export const Sidebar = () => {
    return (
        <nav>
        <div className="sidebar">
            <div className= "sidenav">
                <NavLink exact to="/" className = "home">< img className = "homeImg" src="https://i.ibb.co/t8C4mJB/homelogo.png"/><h2>Home</h2></NavLink>
                <NavLink exact to="/polar-bear" className = "polarbear">< img className = "bearImg" src="https://i.ibb.co/6XSLK21/polarbearicon.png"/><h2>Polar Bear</h2> </NavLink>
                <NavLink exact to="/forest-elephant" className = "forestelephant">< img className = "elephantImg" src="https://i.ibb.co/XYC31yr/elephantlogo.png"/><h2>Forest Elephant</h2> </NavLink>
                <NavLink exact to="/whooping-crane" className = "whoopingcrane">< img className = "craneImg" src="https://i.ibb.co/GRbqrM7/cranelogo.png"/><h2>Whooping Crane</h2> </NavLink>
                <NavLink exact to="/turtle" className = "turtle">< img className = "turtleImg" src="https://i.ibb.co/6RkSGmC/turtlelogo.png"/><h2>Green Sea Turtle</h2> </NavLink>
                <NavLink exact to="/orangutan" className = "orangutan">< img className = "orangutanImg" src="https://i.ibb.co/rt5Z1Cd/monkeylogo.png"/><h2>Orangutan</h2> </NavLink>      
                <img className="colorLogo"src="https://i.ibb.co/2tCZtBY/coloured-Logo.png" alt="coloured-Logo" border="0"></img>            
            
                <div className = "copyright">
                <p>Copyright © 2021 Parallax Designs</p>
           </div> 
            </div>
        </div>
         <div className= "line"></div>   
            
        </nav>
        
    );
};


import "./styles.css";
import { useState, useContext } from "react";

import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { ToggleContext } from "../../contexts/ToggleContext";

export const Sidebar = ({ handleStepNavigation }) => {
  const [showSub, setShowSub] = useState(() => {
    return [false, false, false, false, false];
  });

  const handleClick = (index) => {
    if (
      index === 0 ||
      index === 1 ||
      index === 2 ||
      index === 3 ||
      index === 4
    ) {
      setShowSub({
        ...!showSub,
        [index]: !showSub[index],
      });
    }
  };

  const { showSidebar } = useContext(ToggleContext);
  return (
    <nav>
      <div className={showSidebar ? "sidebar show" : "sidebar"}>
        <div className="sidenav">
          <NavLink exact to="/" className="home">
            <img
              className="homeImg"
              src="https://i.ibb.co/t8C4mJB/homelogo.png"
            />
            <h2 className="h2">Home</h2>
          </NavLink>
          <div>
            <NavLink
              exact
              to="/polar-bear"
              className="polarbear"
              onClick={() => {
                handleClick(0);
              }}
            >
              <img
                className="bearImg"
                src="https://i.ibb.co/6XSLK21/polarbearicon.png"
              />
              <h2 className="h2">Polar Bear</h2>
            </NavLink>
            <div className={showSub[0] ? " sub open" : "sub"}>
              <span onClick={() => handleStepNavigation(1)}>About</span>
              <span onClick={() => handleStepNavigation(2)}>Importance</span>
              <span onClick={() => handleStepNavigation(3)}>Status</span>
              <span onClick={() => handleStepNavigation(4)}>Population</span>
              <span onClick={() => handleStepNavigation(5)}>Past</span>
              <span onClick={() => handleStepNavigation(6)}>Future</span>
              <span onClick={() => handleStepNavigation(7)}>Conservation</span>
              <span onClick={() => handleStepNavigation(8)}>Virtual Experience</span>
            </div>
          </div>
          <div>
            <NavLink
              exact
              to="/forest-elephant"
              className="forestelephant"
              onClick={() => {
                handleClick(1);
              }}
            >
              <img
                className="elephantImg"
                src="https://i.ibb.co/XYC31yr/elephantlogo.png"
              />
              <h2 className="h2">Forest Elephant</h2>{" "}
            </NavLink>
            <div className={showSub[1] ? "sub open" : "sub"}>
              <NavLink to="/forest-elephant/about">About</NavLink>
              <NavLink to="/forest-elephant/importance">Importance</NavLink>
              <NavLink to="/forest-elephant/status">Status</NavLink>
              <NavLink to="/forest-elephant/population">Population</NavLink>
              <NavLink to="/forest-elephant/past">Past</NavLink>
              <NavLink to="/forest-elephant/future">Future</NavLink>
              <NavLink to="/forest-elephant/conservation">Conservation</NavLink>
              <NavLink to="/forest-elephant/vr">Virtual Experience</NavLink>
            </div>
          </div>

          <div>
            <NavLink
              exact
              to="/whooping-crane"
              className="whoopingcrane"
              onClick={() => {
                handleClick(2);
              }}
            >
              <img
                className="craneImg"
                src="https://i.ibb.co/GRbqrM7/cranelogo.png"
              />
              <h2 className="h2">Whooping Crane</h2>{" "}
            </NavLink>
            <div className={showSub[2] ? "sub open" : "sub"}>
              <NavLink to="/polar-bear/about">About</NavLink>
              <NavLink to="/polar-bear/importance">Importance</NavLink>
              <NavLink to="/polar-bear/status">Status</NavLink>
              <NavLink to="/polar-bear/population">Population</NavLink>
              <NavLink to="/polar-bear/past">Past</NavLink>
              <NavLink to="/polar-bear/future">Future</NavLink>
              <NavLink to="/polar-bear/conservation">Conservation</NavLink>
              <NavLink to="/polar-bear/vr">Virtual Experience</NavLink>
            </div>
          </div>

          <div>
            <NavLink
              exact
              to="/turtle"
              className="turtle"
              onClick={() => {
                handleClick(3);
              }}
            >
              <img
                className="turtleImg"
                src="https://i.ibb.co/6RkSGmC/turtlelogo.png"
              />
              <h2 className="h2">Green Sea Turtle</h2>{" "}
            </NavLink>
            <div className={showSub[3] ? "sub open" : "sub"}>
              <NavLink to="/polar-bear/about">About</NavLink>
              <NavLink to="/polar-bear/importance">Importance</NavLink>
              <NavLink to="/polar-bear/status">Status</NavLink>
              <NavLink to="/polar-bear/population">Population</NavLink>
              <NavLink to="/polar-bear/past">Past</NavLink>
              <NavLink to="/polar-bear/future">Future</NavLink>
              <NavLink to="/polar-bear/conservation">Conservation</NavLink>
              <NavLink to="/polar-bear/vr">Virtual Experience</NavLink>
            </div>
          </div>

          <div>
            <NavLink
              exact
              to="/orangutan"
              className="orangutan"
              onClick={() => {
                handleClick(4);
              }}
            >
              <img
                className="orangutanImg"
                src="https://i.ibb.co/rt5Z1Cd/monkeylogo.png"
              />
              <h2 className="h2">Orangutan</h2>{" "}
            </NavLink>
            <div className={showSub[4] ? "sub open" : "sub"}>
              <NavLink to="/polar-bear/about">About</NavLink>
              <NavLink to="/polar-bear/importance">Importance</NavLink>
              <NavLink to="/polar-bear/status">Status</NavLink>
              <NavLink to="/polar-bear/population">Population</NavLink>
              <NavLink to="/polar-bear/past">Past</NavLink>
              <NavLink to="/polar-bear/future">Future</NavLink>
              <NavLink to="/polar-bear/conservation">Conservation</NavLink>
              <NavLink to="/polar-bear/vr">Virtual Experience</NavLink>
            </div>
          </div>
        </div>
        <div className="btm">
          <div className="line"></div>
          <img
            className="colorLogo"
            src="https://i.ibb.co/2tCZtBY/coloured-Logo.png"
            alt="coloured-Logo"
            border="0"
          ></img>
          <p className="copyright">Copyright © 2022 Parallax Designs</p>
        </div>
      </div>
    </nav>
  );
};

import "./styles.css";
import { useState, useContext } from "react";

import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { ToggleContext } from "../../contexts/ToggleContext";
import { MenuItem } from "../menu-item";
import { SubMenuItem } from "../sub-menu-item";
import { ToggleSwitch } from "../toggle-switch";

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
        <div className="parallax-toggle-group">
          <b className="parallax-toggle-text">Side Scrolling</b>
          <div className="parallax-toggle-switch">
            <ToggleSwitch />
          </div>
        </div>
        <NavLink exact to="/" className="home">
            <MenuItem
              icon="https://i.ibb.co/rwj94wN/Web-Icons-Final-home.png"
              text="Home"
              state="normal"
              expand="false"
            />
          </NavLink>
          <div className="polar-bear-menu-content">
            <NavLink
              exact
              to="/polar-bear"
              className="polar-bear"
              onClick={() => {
                handleClick(0);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/BZXSvm2/Web-Icons-Final-polarbear-dark.png"
                text="Polar Bear"
                state="normal"
                expand="true"
              />
            </NavLink>
            <div className={showSub[0] ? "sub-item open" : "sub-item"}>
                <SubMenuItem onClick={() => handleStepNavigation(1)} text="About" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(2)} text="Importance" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(3)} text="Status" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(4)} text="Population" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(5)} text="Past" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(6)} text="Future" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(7)} text="Conservation" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(8)} text="Immersive Experience" state="normal" />
            </div>
          </div>


          <div className="forest-elephant-menu-content">
            <NavLink
              exact
              to="/forest-elephant"
              className="forest-elephant"
              onClick={() => {
                handleClick(1);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/ft1vPKc/Web-Icons-Final-elephant-dark.png"
                text="Forest Elephant"
                state="normal"
                expand="true"
              />
            </NavLink>
            <div className={showSub[1] ? "sub-item open" : "sub-item"}>
              <NavLink to="/forest-elephant/about">
                <SubMenuItem text="About" state="normal" />
              </NavLink>
              <NavLink to="/forest-elephant/importance">
                <SubMenuItem text="Importance" state="normal" />
              </NavLink>
              <NavLink to="/forest-elephant/status">
                <SubMenuItem text="Status" state="normal" />
              </NavLink>
              <NavLink to="/forest-elephant/population">
                <SubMenuItem text="Population" state="normal" />
              </NavLink>
              <NavLink to="/forest-elephant/past">
                <SubMenuItem text="Past" state="normal" />
              </NavLink>
              <NavLink to="/forest-elephant/future">
                <SubMenuItem text="Future" state="normal" />
              </NavLink>
              <NavLink to="/forest-elephant/conservation">
                <SubMenuItem text="Conservation" state="normal" />
              </NavLink>
              <NavLink to="/forest-elephant/experience">
                <SubMenuItem text="Immersive Experience" state="normal" />
              </NavLink>
            </div>
          </div>


          <div className="whooping-crane-menu-content">
            <NavLink
              exact
              to="/whooping-crane"
              className="whooping-crane"
              onClick={() => {
                handleClick(2);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/Vm3c5Xg/Web-Icons-Final-crane-dark.png"
                text="Whooping Crane"
                state="normal"
                expand="true"
              />
            </NavLink>
            <div className={showSub[2] ? "sub-item open" : "sub-item"}>
              <NavLink to="/whooping-crane/about">
                <SubMenuItem text="About" state="normal" />
              </NavLink>
              <NavLink to="/whooping-crane/importance">
                <SubMenuItem text="Importance" state="normal" />
              </NavLink>
              <NavLink to="/whooping-crane/status">
                <SubMenuItem text="Status" state="normal" />
              </NavLink>
              <NavLink to="/whooping-crane/population">
                <SubMenuItem text="Population" state="normal" />
              </NavLink>
              <NavLink to="/whooping-crane/past">
                <SubMenuItem text="Past" state="normal" />
              </NavLink>
              <NavLink to="/whooping-crane/future">
                <SubMenuItem text="Future" state="normal" />
              </NavLink>
              <NavLink to="/whooping-crane/conservation">
                <SubMenuItem text="Conservation" state="normal" />
              </NavLink>
              <NavLink to="/whooping-crane/experience">
                <SubMenuItem text="Immersive Experience" state="normal" />
              </NavLink>
            </div>
          </div>

          <div className="sea-turtle-menu-content">
            <NavLink
              exact
              to="/sea-turtle"
              className="sea-turtle"
              onClick={() => {
                handleClick(3);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/qjTcq1h/Web-Icons-Final-turtle-dark.png"
                text="Green Sea Turtle"
                state="normal"
                expand="true"
              />
            </NavLink>
            <div className={showSub[3] ? "sub-item open" : "sub-item"}>
            <SubMenuItem onClick={() => handleStepNavigation(1)} text="About" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(2)} text="Importance" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(3)} text="Status" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(4)} text="Population" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(5)} text="Past" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(6)} text="Future" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(7)} text="Conservation" state="normal" />
                <SubMenuItem onClick={() => handleStepNavigation(8)} text="Immersive Experience" state="normal" />
            </div>
          </div>

          <div className="orangutan-menu-content">
            <NavLink
              exact
              to="/orangutan"
              className="orangutan"
              onClick={() => {
                handleClick(4);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/bBJfcCx/Web-Icons-Final-orangutan-dark.png"
                text="Orangutan"
                state="normal"
                expand="true"
              />
            </NavLink>
            <div className={showSub[4] ? "sub-item open" : "sub-item"}>
              <NavLink to="/orangutan/about">
                <SubMenuItem text="About" state="normal" />
              </NavLink>
              <NavLink to="/orangutan/importance">
                <SubMenuItem text="Importance" state="normal" />
              </NavLink>
              <NavLink to="/orangutan/status">
                <SubMenuItem text="Status" state="normal" />
              </NavLink>
              <NavLink to="/orangutan/population">
                <SubMenuItem text="Population" state="normal" />
              </NavLink>
              <NavLink to="/orangutan/past">
                <SubMenuItem text="Past" state="normal" />
              </NavLink>
              <NavLink to="/orangutan/future">
                <SubMenuItem text="Future" state="normal" />
              </NavLink>
              <NavLink to="/orangutan/conservation">
                <SubMenuItem text="Conservation" state="normal" />
              </NavLink>
              <NavLink to="/orangutan/experience">
                <SubMenuItem text="Immersive Experience" state="normal" />
              </NavLink>
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

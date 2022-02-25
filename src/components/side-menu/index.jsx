import "./styles.css";
import { useState } from "react";
import { useContext } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { ToggleContext } from "../../contexts/ToggleContext";

import { MenuItem } from "../menu-item";
import { SubMenuItem } from "../sub-menu-item";
import { ToggleSwitch } from "../toggle-switch";

export const SideMenu = () => {
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
  const { showSidemenu } = useContext(ToggleContext);
  return (
    <nav>
       <div className={showSidemenu ? "sidebar show" : "sidebar"}></div>
      <div className="side-menu-container">
        <div className="parallax-toggle-group">
          <b className="parallax-toggle-text">Side Scrolling</b>
          <div className="parallax-toggle-switch">
            <ToggleSwitch />
          </div>
        </div>
        <div className="side-menu-items">
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
              <NavLink to="/polar-bear/about">
                <SubMenuItem text="About" state="normal" />
              </NavLink>
              <NavLink to="/polar-bear/importance">
                <SubMenuItem text="Importance" state="normal" />
              </NavLink>
              <NavLink to="/polar-bear/status">
                <SubMenuItem text="Status" state="normal" />
              </NavLink>
              <NavLink to="/polar-bear/population">
                <SubMenuItem text="Population" state="normal" />
              </NavLink>
              <NavLink to="/polar-bear/past">
                <SubMenuItem text="Past" state="normal" />
              </NavLink>
              <NavLink to="/polar-bear-future">
                <SubMenuItem text="Future" state="normal" />
              </NavLink>
              <NavLink to="/polar-bear/conservation">
                <SubMenuItem text="Conservation" state="normal" />
              </NavLink>
              <NavLink to="/polar-bear/experience">
                <SubMenuItem text="Immersive Experience" state="normal" />
              </NavLink>
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
              <NavLink to="/sea-turtle/about">
                <SubMenuItem text="About" state="normal" />
              </NavLink>
              <NavLink to="/sea-turtle/importance">
                <SubMenuItem text="Importance" state="normal" />
              </NavLink>
              <NavLink to="/sea-turtle/status">
                <SubMenuItem text="Status" state="normal" />
              </NavLink>
              <NavLink to="/sea-turtle/population">
                <SubMenuItem text="Population" state="normal" />
              </NavLink>
              <NavLink to="/sea-turtle/past">
                <SubMenuItem text="Past" state="normal" />
              </NavLink>
              <NavLink to="/sea-turtle/future">
                <SubMenuItem text="Future" state="normal" />
              </NavLink>
              <NavLink to="/sea-turtle/conservation">
                <SubMenuItem text="Conservation" state="normal" />
              </NavLink>
              <NavLink to="/sea-turtle/experience">
                <SubMenuItem text="Immersive Experience" state="normal" />
              </NavLink>
            </div>
          </div>

        
        </div>
        <div className="side-menu-footer">
          <div className="footer-div"></div>
          <img
            className="footer-logo"
            src="https://i.ibb.co/2tCZtBY/coloured-Logo.png"
            alt="Project Endangered Logo"
          ></img>
          <p className="footer-copyright">Copyright © 2022 Parallax Designs</p>
        </div>
      </div>
    </nav>
  );
};

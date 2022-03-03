import "./styles.scss";
import { useState, useContext } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { ToggleContext } from "../../contexts/ToggleContext";
import { MenuItem } from "../menu-item";
import { SubMenuItem } from "../sub-menu-item";
import { ToggleSwitch } from "../toggle-switch";
import { useEffect } from "react";

export const Sidebar = () => {
  const [showSub, setShowSub] = useState([false, false, false, false, false]);

  const templateMenu = [
    { name: "About", isEnabled: false },
    { name: "Importance", isEnabled: false },
    { name: "Status", isEnabled: false },
    { name: "Population", isEnabled: false },
    { name: "Past", isEnabled: false },
    { name: "Future", isEnabled: false },
    { name: "Conservation", isEnabled: false },
    { name: "Immersive Experience", isEnabled: false },
  ]

  const menuStructure = {
    animals: {
      polarbear: [...templateMenu],
      elephant: [...templateMenu],
      crane: [...templateMenu],
      turtle: [...templateMenu]
    }
  }

  const [subMenuItems, setsubMenuItems] = useState(menuStructure)


  const { showSidebar, pageState, setPageState } = useContext(ToggleContext);

  const handleStepNavigation = (index) => {
    const tmpState = { ...pageState };
    tmpState.currentStep = index;
    setPageState(tmpState)
  }

  const handleClick = (index) => {
    const tmpShowSub = [...showSub] 
    tmpShowSub[index] = !tmpShowSub[index];

    let openItems = tmpShowSub.filter(Boolean);

    if(openItems.length <= 1){
      setShowSub(tmpShowSub)
    }

    if(openItems.length > 1){
      const cleanup = [...showSub].map(item=>false);
      cleanup[index] = true;
      setShowSub(cleanup)
    }
  };

  /**
   * Sets a specific item of the menu to be selected.
   * Ensures that if you have another animal on the menu, those are reset to default
   */
  const menuState = (stringName, animal) => {

    // Copy of current state
    const tmpMenuState = { ...subMenuItems };

    //reset every item to false;
    Object.keys(tmpMenuState.animals).forEach(animalKey => {
      tmpMenuState.animals[animalKey] = [...templateMenu];
    })

    // Get the index of the element
    const getIndex = tmpMenuState.animals[animal]
      .findIndex(item => item.name === stringName)

    const currentState = tmpMenuState.animals[animal][getIndex].isEnabled

    tmpMenuState.animals[animal][getIndex].isEnabled = !currentState;

    setsubMenuItems(tmpMenuState)

  }

  const handleMenuItemClick = () => {
    setsubMenuItems(menuStructure)
  }

  useEffect(()=>{
    console.log({showSub})
  },[showSub])


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
          <NavLink
            exact
            to="/"
            className="home"
            >
            <MenuItem
              icon="https://i.ibb.co/rwj94wN/Web-Icons-Final-home.png"
              text="Home"
              state={showSub[0]}
              expand={false}
              displayExpandIcon={false}
              onClick={() => {
                handleClick(0);
                handleMenuItemClick();
              }}
            />
          </NavLink>
          <div className="polar-bear-menu-content">
            <NavLink
              exact
              to="/polar-bear"
              className="polar-bear"
              onClick={() => {
                handleClick(1);
                handleMenuItemClick();
              }}

            >
              <MenuItem
                icon="https://i.ibb.co/BZXSvm2/Web-Icons-Final-polarbear-dark.png"
                text="Polar Bear"
                state={showSub[1]}
                expand={showSub[1]}
              />
            </NavLink>
            <div className={showSub[1] ? "sub-item open" : "sub-item"}>
              {subMenuItems.animals.polarbear.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'polarbear');
                    handleStepNavigation(index + 1)
                  }} text={item.name} isEnabled={item.isEnabled} key={`polarbear-${item.name}`} />

              )}
            </div>
          </div>
          <div className="forest-elephant-menu-content">
            <NavLink
              exact
              to="/forest-elephant"
              className="forest-elephant"
              onClick={() => {
                handleMenuItemClick(0)
                handleClick(2);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/ft1vPKc/Web-Icons-Final-elephant-dark.png"
                text="Forest Elephant"
                state={showSub[2]}
                expand={showSub[2]}
              />
            </NavLink>
            <div className={showSub[2] ? "sub-item open" : "sub-item"}>
              {subMenuItems.animals.elephant.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'elephant');
                    handleStepNavigation(index + 1)
                  }} text={item.name} isEnabled={item.isEnabled} key={`elephant-${item.name}`} />

              )}
            </div>
          </div>
          <div className="whooping-crane-menu-content">
            <NavLink
              exact
              to="/whooping-crane"
              className="whooping-crane"
              onClick={() => {
                handleMenuItemClick()
                handleClick(3);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/Vm3c5Xg/Web-Icons-Final-crane-dark.png"
                text="Whooping Crane"
                state={showSub[3]}
                expand={showSub[3]}
              />
            </NavLink>
            <div className={showSub[3] ? "sub-item open" : "sub-item"}>
              {subMenuItems.animals.crane.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'crane');
                    handleStepNavigation(index + 1)
                  }} text={item.name} isEnabled={item.isEnabled} key={`crane-${item.name}`} />
              )}
            </div>
          </div>
          <div className="sea-turtle-menu-content">
            <NavLink
              exact
              to="/sea-turtle"
              className="sea-turtle"
              onClick={() => {
                handleMenuItemClick()
                handleClick(4);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/qjTcq1h/Web-Icons-Final-turtle-dark.png"
                text="Green Sea Turtle"
                state="normal"
                state={showSub[4]}
                expand={showSub[4]}
              />
            </NavLink>
            <div className={showSub[4] ? "sub-item open" : "sub-item"}>
              {subMenuItems.animals.turtle.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'turtle');
                    handleStepNavigation(index + 1)
                  }} text={item.name} isEnabled={item.isEnabled} key={`turtle-${item.name}`} />
              )}
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

import "./styles.scss";
import { useState, useContext } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { ToggleContext } from "../../contexts/ToggleContext";
import { MenuItem } from "../menu-item";
import { SubMenuItem } from "../sub-menu-item";
import { ToggleSwitch } from "../toggle-switch";
import { useEffect } from "react";

export const Sidebar = () => {
  const appContext = useContext(ToggleContext);
  const { showSidebar,
    pageState,
    setPageState ,
    initializePage,
    animal,
    setAnimal,
    templateMenu,
    menuStructure,
    AnimalDictionary,
    subMenuItems,
    setsubMenuItems
  } = appContext
  const [showSub, setShowSub] = useState([false, false, false, false, false]);

  const [localMenuItems, setLocalMenuItems] = useState({...subMenuItems})

  useEffect(()=> {
    console.log('animal in sidebar',animal)
  },[])

  useEffect(()=> {
    console.log('animal in sidebar changed',animal)
  },[animal])

  const handleStepNavigation = (index) => {
    const tmpState = { ...pageState };
    tmpState.currentStep = index;
    setPageState(tmpState);
    initializePage(index);
  }

  const setupAnimal = (index)=> {
    setAnimal(index);
    const app = appContext;
    console.log('animalIdx', AnimalDictionary[index])
    if(index > 0){
      const tmpMenuState = { ...subMenuItems };
      tmpMenuState.animals[AnimalDictionary[index]][0].isEnabled = true
      setsubMenuItems({...tmpMenuState})
    }
  }

  const handleClick = (event,index) => {
    event.stopPropagation();
    const tmpShowSub = [...showSub] 
    tmpShowSub[index] = !tmpShowSub[index];
    initializePage(0);
    const cleanup = [...showSub].map(item=>false);
    cleanup[index] = true;
    setShowSub(cleanup)
    setupAnimal(index)
  };

  /**
   * Sets a specific item of the menu to be selected.
   * Ensures that if you have another animal on the menu, those are reset to default
   */
  const menuState = (stringName, animal) => {

    // Copy of current state
    const tmpMenuState = { ...subMenuItems };
    console.log({tmpMenuState})

    //reset every item to false;
    Object.keys(tmpMenuState.animals).forEach(animalKey => {
      tmpMenuState.animals[animalKey] = [...templateMenu];
    })

    // Get the index of the element
    const getIndex = tmpMenuState.animals[animal]
      .findIndex(item => item.name === stringName)

    const currentState = tmpMenuState.animals[animal][getIndex].isEnabled

    tmpMenuState.animals[animal][getIndex].isEnabled = !currentState;

    setsubMenuItems(prevState => {
      console.log({prevState,tmpMenuState})
      prevState = tmpMenuState
      return {...tmpMenuState}
    })

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
              onClick={(e) => {
                handleClick(e,0);
              }}
            />
          </NavLink>
          <div className="polar-bear-menu-content">
            <NavLink
              exact
              to="/polar-bear"
              className="polar-bear"
              onClick={(e) => {
                handleClick(e,1);
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
              {localMenuItems.animals.polarbear.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'polarbear');
                    handleStepNavigation(index)
                  }} text={item.name} isEnabled={item.isEnabled} key={`polarbear-${item.name}`} />

              )}
            </div>
          </div>
          <div className="forest-elephant-menu-content">
            <NavLink
              exact
              to="/asian-elephant"
              className="forest-elephant"
              onClick={(e) => {
                handleClick(e,2);
              }}
            >
              <MenuItem
                icon="https://i.ibb.co/ft1vPKc/Web-Icons-Final-elephant-dark.png"
                text="Asian Elephant"
                state={showSub[2]}
                expand={showSub[2]}
              />
            </NavLink>
            <div className={showSub[2] ? "sub-item open" : "sub-item"}>
              {localMenuItems.animals.elephant.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'elephant');
                    handleStepNavigation(index )
                  }} text={item.name} isEnabled={item.isEnabled} key={`elephant-${item.name}`} />

              )}
            </div>
          </div>
          <div className="whooping-crane-menu-content">
            <NavLink
              exact
              to="/whooping-crane"
              className="whooping-crane"
              onClick={(e) => {
                handleClick(e,3);
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
              {localMenuItems.animals.crane.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'crane');
                    handleStepNavigation(index )
                  }} text={item.name} isEnabled={item.isEnabled} key={`crane-${item.name}`} />
              )}
            </div>
          </div>
          <div className="sea-turtle-menu-content">
            <NavLink
              exact
              to="/sea-turtle"
              className="sea-turtle"
              onClick={(e) => {
                handleClick(e,4);
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
              {localMenuItems.animals.turtle.map((item, index) =>
                <SubMenuItem
                  onClick={() => {
                    menuState(item.name, 'turtle');
                    handleStepNavigation(index )
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

import logo from './logo.svg';
import './App.css';
import {LargeIconButton} from '../src/components/large-icon-button';
import {ToggleSwitch} from '../src/components/toggle-switch';
import {ToggleButtons} from '../src/components/toggle-buttons';
import { TextButton } from './components/text-button';
import { MenuItem } from './components/menu-item';
import { SubMenuItem } from './components/sub-menu-item';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from './components/navbar';
import { useContext } from 'react';
import { ToggleContext } from './contexts/ToggleContext';
import { Polarbear } from './components/polarbear';
import { SideMenu } from './components/side-menu';
import { Map } from './components/interactive-map';


function App() {
  const {bodyClick} = useContext(ToggleContext)
  const handleClick = (e) =>{
  //   console.log(e.target.className)
      
 // e.target.className === "" && bodyClick()
    
  }
  
 
  return (
    
    <div className="App" onClick = {handleClick}>
      <Router>
        <Switch>
          <Route exact path = "/">
          <Navbar/>
          </Route>
          <Route exact path = "/map"><Map></Map></Route>
          <Route path = "/polar-bear">
          <Navbar/>
          <Polarbear/>
     
          </Route>
          <Route path = "/forest-elephant">
          <LargeIconButton type='right'/>
          <LargeIconButton type='left'/>
          <ToggleSwitch/>
          <ToggleButtons colour='toggle-orange' text='positive-negative' base='base-orange'/>
          <TextButton type='light' text='Explore' colour='light'/>

          <TextButton type='button-orange' text='click to learn more' colour='dark'/>
          <div></div>
          <MenuItem icon="https://i.ibb.co/BZXSvm2/Web-Icons-Final-polarbear-dark.png" text='Polar Bear' state='normal' expand='true'/>
          <SubMenuItem text='About' state='normal'/>

          </Route>
          <Route path = "/whooping-crane">
            <SideMenu/>
            
          </Route>
          <Route path = "/sea-turtle">
            
          </Route>
          <Route path = "/orangutan">
              
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;

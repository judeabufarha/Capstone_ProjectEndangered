import logo from './logo.svg';
import './App.css';
import {LargeIconButton} from '../src/components/large-icon-button';
import {ToggleSwitch} from '../src/components/toggle-switch';
import {ToggleButtons} from '../src/components/toggle-buttons';
import { TextButton } from './components/text-button';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from './components/navbar';
import { useContext } from 'react';
import { ToggleContext } from './contexts/ToggleContext';
import { Polarbear } from './components/polarbear';

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
          <Route path = "/polar-bear">
          <Navbar/>
              <Polarbear/>
     
          </Route>
          <Route path = "/forest-elephant">
          <LargeIconButton type='right'/>
          <LargeIconButton type='left'/>
          <ToggleSwitch/>
          <ToggleButtons type='toggle-orange'/>
          <TextButton type='light' text='Explore' colour='light'/>

          <TextButton type='button-orange' text='click to learn more' colour='dark'/>

          </Route>
          <Route path = "/whooping-crane">
            
          </Route>
          <Route path = "/turtle">
            
          </Route>
          <Route path = "/orangutan">
              
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;

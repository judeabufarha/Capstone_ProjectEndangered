import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
              <Navbar></Navbar>
          </Route>
          <Route path = "/polar-bear">
              <Navbar></Navbar>
          </Route>
          <Route path = "/forest-elephant">
              <Navbar></Navbar>
          </Route>
          <Route path = "/whooping-crane">
              <Navbar></Navbar>
          </Route>
          <Route path = "/turtle">
              <Navbar></Navbar>
          </Route>
          <Route path = "/orangutan">
              <Navbar></Navbar>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

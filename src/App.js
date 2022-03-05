
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { useContext } from "react";
import { ToggleContext } from "./contexts/ToggleContext";
import { HomePage } from "./components/homepage";
import { Polarbear } from "./components/polarbear";
import { Footer } from "./components/footer";
import { Statusbar } from "./components/statusBar";
import { PolarBearMobile } from "./components/mobile-pages/polar-bear-mobile";
import { Turtle } from "./components/turtle";
import { Elephant } from "./components/elephant";

function App() {
  const { bodyClick, pageState, setPageState } = useContext(ToggleContext);
  const { currentStep } = setPageState;

  const setCurrentStep = (stepNumber) => {
    const tmpPageState = { ...pageState }
    tmpPageState.currentStep = stepNumber;
    setPageState(tmpPageState);
  }

  // Hamburger menu open and close on click of screen feature 
  const handleClick = (e) => {
    //   console.log(e.target.className)
    // e.target.className === "" && bodyClick()
  };

  return (
    <div className="App" onClick={handleClick}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomePage/>
          </Route>
          <Route path="/polar-bear">
            <Navbar handleStepNavigation={setCurrentStep} />
            <Polarbear key="polar-bear-page" />
            <Footer />
          </Route>
          <Route path="/forest-elephant">
            <Navbar handleStepNavigation={setCurrentStep} />
            <Elephant key="forest-elephant-page" />
            <Footer />
          </Route>
          <Route path="/whooping-crane">
            <Navbar handleStepNavigation={setCurrentStep} />
            <Polarbear key="whooping-crane-page" />
            <Footer />
          </Route>
          <Route path="/sea-turtle">
            <Navbar handleStepNavigation={setCurrentStep} />
            <Turtle key="sea-turtle-page" />
            <Footer />
          </Route>
          <Route path="/polar-bear-mobile">
            <Navbar/>
            <PolarBearMobile/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

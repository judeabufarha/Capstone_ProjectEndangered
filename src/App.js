
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
import { Crane } from "./components/crane";
import { WhoopingCraneMobile } from "./components/mobile-pages/whooping-crane-mobile";
import { AsianElephantMobile } from "./components/mobile-pages/asian-elephant-mobile";
import { SeaTurtleMobile } from "./components/mobile-pages/sea-turtle-mobile";

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
          <Route path="/asian-elephant">
            <Navbar handleStepNavigation={setCurrentStep} />
            <Elephant key="forest-elephant-page" />
            <Footer />
          </Route>
          <Route path="/whooping-crane">
            <Navbar handleStepNavigation={setCurrentStep} />
            <Crane key="whooping-crane-page" />
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
          <Route path="/whooping-crane-mobile">
            <Navbar/>
            <WhoopingCraneMobile/>
          </Route>
          <Route path="/asian-elephant-mobile">
            <Navbar/>
            <AsianElephantMobile/>
          </Route>
          <Route path="/green-sea-turtle-mobile">
            <Navbar/>
            <SeaTurtleMobile/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

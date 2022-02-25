import logo from "./logo.svg";
import "./App.css";
import { LargeIconButton } from "../src/components/large-icon-button";
import { ToggleSwitch } from "../src/components/toggle-switch";
import { ToggleButtons } from "../src/components/toggle-buttons";
import { TextButton } from "./components/text-button";
import { MenuItem } from "./components/menu-item";
import { SubMenuItem } from "./components/sub-menu-item";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { useContext, useState } from "react";
import { ToggleContext } from "./contexts/ToggleContext";
import { Polarbear } from "./components/polarbear";
import { SideMenu } from "./components/side-menu";
import { Map } from "./components/interactive-map";
import { Footer } from "./components/footer";
import { Statusbar } from "./components/statusBar";
import { Turtle } from "./components/turtle";

function App() {
  const { bodyClick } = useContext(ToggleContext);
  const [currentStep, setCurrentStep] = useState(0);

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
          </Route>
          <Route exact path="/map">
            <Map></Map>
          </Route>
          <Route path="/polar-bear">
            <Navbar handleStepNavigation={setCurrentStep} />
            <Polarbear currentStep={currentStep} key="polar-bear-page"   handleStepNavigation={setCurrentStep}/>
            <Footer
              currentStep={currentStep}
              handleStepNavigation={setCurrentStep}
            />
          </Route>
          <Route path="/forest-elephant">
          <Navbar handleStepNavigation={setCurrentStep} />
            <Polarbear currentStep={currentStep} key="forest-elephant-page" handleStepNavigation={setCurrentStep}/>
            <Footer
              currentStep={currentStep}
              handleStepNavigation={setCurrentStep}
            />
          </Route>
          <Route path="/whooping-crane">
          <Navbar handleStepNavigation={setCurrentStep} />
            <Polarbear currentStep={currentStep} key="whooping-crane-page" handleStepNavigation={setCurrentStep}/>
            <Footer
              currentStep={currentStep}
              handleStepNavigation={setCurrentStep}
            />
          </Route>
          <Route path="/sea-turtle">
          <Navbar handleStepNavigation={setCurrentStep} />
            <Turtle currentStep={currentStep} key="sea-turtle-page" handleStepNavigation={setCurrentStep}/>
            <Footer
              currentStep={currentStep}
              handleStepNavigation={setCurrentStep}
            />
          </Route>
          <Route path="/orangutan">
            <Statusbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

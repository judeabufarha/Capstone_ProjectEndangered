// Title
// Paragraph 
// Info blob Trio component


import { ParallaxLayer } from "@react-spring/parallax";
import ToggleButtons from "../../toggle-buttons";
import "./styles.scss";

const Page8 = ({ offset, color }) => {
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

<ParallaxLayer offset={offset} speed={0}>
  <div className={`gradient ${color}`} />
</ParallaxLayer>

<ParallaxLayer offset={offset} speed={0.6}>
  <div className="wrapperCommonContainer conservationTitle">
    <div className="commonContainer">
      <h1>Conservation</h1>
    </div>
  </div>
</ParallaxLayer>

<ParallaxLayer offset={offset} speed={1.2}>
  <div className="wrapperCommonContainer conservationTextAreaContainer">
    <div className="commonContainer">
    <p>Without global change the polar bear will be extinct by 2100. It is up to us to change our ways in order to save the polar bear species. There are many ways each of us can help save the polar bears, including volunteering, fighting climate change, and raising money for conservation efforts. If you would like to learn more about how you can help the polar bear population, take a look at the conservation efforts below.</p> 
    </div>
  </div>
</ParallaxLayer>

    
    </>
  );
};

export default Page8;

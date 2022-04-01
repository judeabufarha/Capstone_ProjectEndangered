// Background Image
// Component - Orange dots + date
// Number line
// Text box

import { ParallaxLayer } from "@react-spring/parallax";
import DiscusDate from "../../DiscusDate";
import Tooltip from "../../Tooltip";
import TrioImg from "../../trioImg";
import "./styles.scss";

const Page6 = ({ offset, color }) => {
  const years = [
    <DiscusDate date="1940" />,
    <DiscusDate date="1960" />,
    <DiscusDate date="1980" />,
    <DiscusDate date="2000" />,
    <DiscusDate date="2020" />,
  ];

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer className="timelineGraph" offset={offset} speed={1.2}>
        
            <div
              className="pastBackground"
              style={{
                backgroundImage: "url('https://i.ibb.co/s16Q7xL/Group-48.png')",
              }}
            />
          
      </ParallaxLayer>
      

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>
 
      <ParallaxLayer offset={offset} speed={0.6}>
      <div className="wrapperCommonContainer pastTitle">
          <div className="commonContainerSpecial">
            <h3>The Past</h3>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="timelineBullets" offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <TrioImg images={years} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="tooltip1" offset={offset} speed={2} aria-label='tooltip 1'>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1971',description:'Polar bears are named Ursus maritimus.'}} width={239} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="tooltip2" offset={offset} speed={3} aria-label='tooltip 2'>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1973',description:'Commercial hunting of polar bears is now regulated.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="tooltip3" offset={offset} speed={3} aria-label='tooltip 2'>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'2005',description:'The polar bear’s status is upgraded to vulnerable.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="tooltip4" offset={offset} speed={3} aria-label='tooltip 2'>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'2008',description:'Polar bears are classifies as endangered.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>


      
    <ParallaxLayer className="mobileTimeline" offset={offset} speed={1.2}>
      <img
        className="mobileTimeline"
        src="https://i.ibb.co/GPbYKBx/Lines-1.png"
        alt="mobile timeline"
      />
    </ParallaxLayer>

    </>
  );
};

export default Page6;


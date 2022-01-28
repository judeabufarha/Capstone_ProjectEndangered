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
                backgroundImage: "url('https://i.ibb.co/bbJdGTS/timeline.png')",
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
      <ParallaxLayer className="tooltip1" offset={offset} speed={2}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1971',description:'Polar bears are named Ursus maritimus.'}} width={239} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="tooltip2" offset={offset} speed={3}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'2008',description:'Polar bears are classifies as endangered.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page6;

//
import { ParallaxLayer } from "@react-spring/parallax";
import DiscusDate from "../../DiscusDate";
import Tooltip from "../../Tooltip";
import TrioImg from "../../trioImg";
import "./style.scss";

const Page6 = ({ offset, color }) => {

  const urlOfImage = 'https://i.ibb.co/9p445Fk/Ellipse-12-1.png'

  const years = [
    <DiscusDate date="1940" image={urlOfImage} />,
    <DiscusDate date="1960"  image={urlOfImage}/>,
    <DiscusDate date="1980"  image={urlOfImage} />,
    <DiscusDate date="2000"  image={urlOfImage} />,
    <DiscusDate date="2020"  image={urlOfImage} />,
  ];

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer className="timelineGraph" offset={offset} speed={1.2}>
        
            <div
              className="pastBackground"
              style={{
                backgroundImage: "url('https://i.ibb.co/ZgVdrF3/Timeline-Turtle-1.png')",
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
      <ParallaxLayer className="tutleTooltip1" offset={offset} speed={2} aria-label="tooltip 1">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1978',description:'The green sea turtle is classified as endangered in the U.S'}} width={239} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="tutleTooltip2" offset={offset} speed={3}  aria-label="tooltip 2">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1982',description:'The green sea turtle is classified as endangered internationally.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="tutleTooltip3" offset={offset} speed={3} aria-label="tooltip 3">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'2004',description:'The wild population is said to face high risk of extiction.'}} width={250} />
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

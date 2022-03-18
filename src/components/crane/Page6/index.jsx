import { ParallaxLayer } from "@react-spring/parallax";
import DiscusDate from "../../DiscusDate";
import Tooltip from "../../Tooltip";
import TrioImg from "../../trioImg";
import "./style.scss";

const Page6 = ({ offset, color }) => {

  const urlOfImage = 'https://i.ibb.co/hYLr69R/Ellipse-12-2.png'

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
                backgroundImage: "url('https://i.ibb.co/QYtktRw/Timeline-2.png')",
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
      <ParallaxLayer className="craneTooltip1" offset={offset} speed={2}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1941',description:'The population drops to 15 living whooping cranes.'}} width={239} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="craneTooltip2" offset={offset} speed={3}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1967',description:'Breeding programs and reintroduction efforts begin.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="craneTooltip3" offset={offset} speed={3}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1978',description:'The whooping crane is classified as endangered.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer className="craneTooltip4" offset={offset} speed={3}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1993',description:'Whooping cranes are released into the wild in Florida.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="craneTooltip5" offset={offset} speed={3}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'2004',description:'A total of 221 whooping cranes are released into the wild.'}} width={250} />
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

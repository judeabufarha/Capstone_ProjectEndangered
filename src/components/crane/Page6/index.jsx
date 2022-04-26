import { ParallaxLayer } from "@react-spring/parallax";
import DiscusDate from "../../DiscusDate";
import Tooltip from "../../Tooltip";
import TrioImg from "../../trioImg";
import "./style.scss";

  /** Crane Page 6 */
const Page6 = ({ offset, color }) => {

  
  /** Passing the image for the disk icon*/
  const urlOfImage = 'https://i.ibb.co/hYLr69R/Ellipse-12-2.png'
  
  /** passing the years text for the date and imageURL  */
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

    
       {/** Timeline Image layer */}
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
 
      {/** Past title layer */}
      <ParallaxLayer offset={offset} speed={0.6}>
      <div className="wrapperCommonContainer pastTitle">
          <div className="commonContainerSpecial">
            <h3>The Past</h3>
          </div>
        </div>
      </ParallaxLayer>

      {/** Bullets layer with date and image */}
      <ParallaxLayer className="timelineBullets" offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            {/** pasing the years to image component takes the same styles */}
            <TrioImg images={years} />
          </div>
        </div>
      </ParallaxLayer>
      {/** Tooltip 1 layer */}
      <ParallaxLayer className="craneTooltip1" offset={offset} speed={2} aria-label="tooltip 1">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip  text={{title:'1941',description:'The population drops to 15 living whooping cranes.'}} width={239} />
          </div>
        </div>
      </ParallaxLayer>
      {/** Tooltip 2 layer */}
      <ParallaxLayer className="craneTooltip2" offset={offset} speed={3} aria-label="tooltip 2">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1967',description:'Captive breeding programs and reintroduction efforts begin.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>
      {/** Tooltip 3 layer */}
      <ParallaxLayer className="craneTooltip3" offset={offset} speed={3} aria-label="tooltip 3">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1978',description:'The whooping crane is classified as endangered.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>
      {/** Tooltip 4 layer */}
      <ParallaxLayer className="craneTooltip4" offset={offset} speed={3} aria-label="tooltip 4">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'1993',description:'Young whooping cranes were released into the wild in Florida.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>

     {/** Tooltip 5 layer */}
      <ParallaxLayer className="craneTooltip5" offset={offset} speed={3} aria-label="tooltip 5">
        <div className="wrapperCommonContainer">
          <div className="commonContainerSpecial">
            <Tooltip text={{title:'2004',description:' A total of 221 whooping cranes were released into the wild.'}} width={250} />
          </div>
        </div>
      </ParallaxLayer>

    </>
  );
};

export default Page6;

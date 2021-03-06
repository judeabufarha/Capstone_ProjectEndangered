import { ParallaxLayer } from "@react-spring/parallax";
import ToggleButtons from "../../toggle-buttons";
import { MapMarker } from "../../map-marker";
import "./style.scss";
import { useState } from "react";
import { MapLegend } from "../../map-legend";

 /** Crane Page 5 */
const Page5 = ({ offset, color }) => {

  const [now, setNow]= useState(true)

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

       {/** Population title layer*/}
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer populationTitle">
          <div className="commonContainerSpecial">
            <h3>Population</h3>
          </div>
        </div>
      </ParallaxLayer>

    {/** Toggle button layer*/}
      <ParallaxLayer
        className="p5toggleButtonsParent"
        offset={offset}
        speed={0.9}
        style={{ height: `100px` }}
        aria-label="then-now toggle"
      >
        <div className="wrapperCommonContainer ">
          <div className="commonContainerSpecial toggleButtons">
            <div className="flexContainer100">
              {/** Toggle button component, passing green colour*/}
              <ToggleButtons
                colour="toggle-green"
                base="base-green"
                onClick={() => {
                setNow(!now);
                }}
                text="then-now"       
              />
            </div>
          </div>
        </div>
      </ParallaxLayer>

       {/** Desktop legend layer */}
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="desktop-map-legend">
          <MapLegend colour="red-mobile" outline="red-outline-mobile"/>
        </div> 
      </ParallaxLayer>

      {/** Paragraph layer */}
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer populationText">
          <div className="commonContainerSpecial">
            <p className="populationParaPolar">
            Explore the population of whooping cranes in different areas of the world.
            </p>
          </div>
        </div>
      </ParallaxLayer>

     

      {/** Markers changing size layer, each marker comoponent is rendered and passed a size for then and now also passed text for the tooltip*/}
      <ParallaxLayer offset={offset} className={`page5 ${!now ? 'then' : 'now'}`} speed={0.8}>
        
       
        <div className="wrapperCommonContainer marker  marker-14">
          <div className="commonContainerSpecial">
          <div className={`${!now ? 'increase' : 'decrease'}`}>
              {/** Map marker component - example here starts at nothing which is size disapprear and grows to small upon toggle */}
            <MapMarker
              size={`${now ? 'disappear' : 'small'}`}
              colour="salmonCircle"
              className="map-marker-blue"
              text={mapItem('Florida','Increasing')}
              css={{width:'500px'}}
            />
          </div>
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-12">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'small' : 'medium'}`}
              colour="salmonCircle"
              className="map-marker-blue"
              text={mapItem('Wisconsin','Increasing')}
              css={{width:'500px'}}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker  marker-13">
          <div className="commonContainerSpecial">
          <div className={`${!now ? 'increase' : 'decrease'}`}>
            <MapMarker
              size={`${now ? 'disappear' : 'small'}`}
              colour="salmonCircle"
              className="map-marker-blue"
              text={mapItem('Louisiana','Increasing')}
              css={{width:'500px'}}
            />
            </div>
          </div>
        </div>
       
        <div className="wrapperCommonContainer marker marker-11">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'small' : 'medium'}`}
              colour="salmonCircle"
              className="map-marker-blue"
              text={now ? mapItem('Alberta','Increasing') : mapItem('Alberta','Increasing')}
            />
          </div>
        </div>
        
       
      </ParallaxLayer>
    </>
  );
};

const mapItem = (country, population) => <><h3>{country}:</h3><p>{population}</p></>

export default Page5;

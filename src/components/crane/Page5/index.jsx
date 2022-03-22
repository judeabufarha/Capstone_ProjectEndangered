import { ParallaxLayer } from "@react-spring/parallax";
import ToggleButtons from "../../toggle-buttons";
import { Map } from "../../interactive-map";
import { MapMarker } from "../../map-marker";
import "./style.scss";
import { useState } from "react";

const Page5 = ({ offset, color }) => {

  const [now, setNow]= useState(true)

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer populationTitle">
          <div className="commonContainerSpecial">
            <h3>Population</h3>
          </div>
        </div>
      </ParallaxLayer>

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

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer populationText">
          <div className="commonContainerSpecial">
            <p className="populationParaPolar">
            Explore the population of whooping cranes in different areas of the world.
            </p>
          </div>
        </div>
      </ParallaxLayer>

     

      <ParallaxLayer offset={offset} className={`page5 ${!now ? 'then' : 'now'}`} speed={0.8}>
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
            <MapMarker
              size={`${now ? 'disappear' : 'small'}`}
              colour="salmonCircle"
              className="map-marker-blue"
              text={mapItem('Louisana','Increasing')}
              css={{width:'500px'}}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-14">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'disappear' : 'small'}`}
              colour="salmonCircle"
              className="map-marker-blue"
              text={mapItem('Florida','Increasing')}
              css={{width:'500px'}}
            />
          </div>
        </div>
  
        
       
      </ParallaxLayer>
    </>
  );
};

const mapItem = (country, population) => <><h3>{country}:</h3><p>{population}</p></>

export default Page5;

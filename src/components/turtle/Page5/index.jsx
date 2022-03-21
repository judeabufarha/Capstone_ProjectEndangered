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
                colour="toggle-peach"
                base="base-peach"
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
              Explore the population of polar bears in different areas of the
              world.
            </p>
          </div>
        </div>
      </ParallaxLayer>

     

      <ParallaxLayer offset={offset} className={`page5 ${!now ? 'then' : 'now'}`} speed={0.8}>
        <div className="wrapperCommonContainer marker marker-15"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Mexico','Stable') : mapItem('Mexico','Stable')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-16"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'large'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Eastern Tropical Pacific','Stable') : mapItem('Eastern Tropical Pacific','Stable')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-17"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Insular Caribbean','Declining') : mapItem('Insular Caribbean','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-18"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Atlantic Ocean','Declining') : mapItem('Atlantic Ocean','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-19"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('West Africa ','Declining') : mapItem('Atlantic Ocean','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-20"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Mediterranean','Declining') : mapItem('Mediterranean','Declining')}
            />
          </div>
        </div>
        
    
        <div className="wrapperCommonContainer marker marker-22"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Southwest Indian Ocean','Declining') : mapItem('Southwest Indian Ocean','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-23"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Central Indian Ocean','Declining') : mapItem('Central Indian Ocean','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-24"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Central Indian Ocean','Declining') : mapItem('Central Indian Ocean','Declining')}
            />
          </div>
        </div>
        
        
        <div className="wrapperCommonContainer marker marker-25"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Southeast Asia','Declining') : mapItem('Southeast Asia','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-26"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'small' : 'small'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Japan','Stable') : mapItem('Japan','Stable')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-27"> 
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              colour="tealCircle"
              className="map-marker-blue"
              text={now ? mapItem('Northern Australia','Declining') : mapItem('Northern Australia','Declining')}
            />
          </div>
        </div>
        
        
        
      </ParallaxLayer>
    </>
  );
};

const mapItem = (country, population) => <><h3>{country}:</h3><p>{population}</p></>

export default Page5;

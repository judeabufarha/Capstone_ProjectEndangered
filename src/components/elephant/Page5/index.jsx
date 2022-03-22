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
                colour="toggle-pink"
                base="base-pink"
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
            Explore the population of Asian elephants in different areas of the world.
            </p>
          </div>
        </div>
      </ParallaxLayer>

     

      <ParallaxLayer offset={offset} className={`page5 ${!now ? 'then' : 'now'}`} speed={0.8}>
        <div className="wrapperCommonContainer marker marker-28">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('India','Declining') : mapItem('India','Declining')}
            />
          </div>
        </div>
       
        <div className="wrapperCommonContainer marker marker-29">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Sri Lanka','Declining') : mapItem('Sri Lanka','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-30">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('China','Declining') : mapItem('China','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-31">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Laos','Stable') : mapItem('Laos','Stable')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-32">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Myanmar','Declining') : mapItem('Myanmar','Declining')}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker marker-33">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Thailand','Declining') : mapItem('Thailand','Declining')}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker marker-34">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'small' : 'medium'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Cambodia','Increasing') : mapItem('Cambodia','Increasing')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-35">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Vietnam','Declining') : mapItem('Vietnam','Declining')}
            />
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-36">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Malaysia','Declining') : mapItem('Malaysia','Declining')}
            />
          </div>
        </div>




      </ParallaxLayer>
    </>
  );
};

const mapItem = (country, population) => <><h3>{country}:</h3><p>{population}</p></>

export default Page5;

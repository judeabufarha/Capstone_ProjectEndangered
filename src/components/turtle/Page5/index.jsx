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
        <div className="wrapperCommonContainer marker marker-1">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="greenCircle"
              className="map-marker-blue"
              text={now ? mapItem('Canada','5000 - 6000') : mapItem('Canada','2000 - 3000')}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-2">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              className="map-marker-blue"
              text={mapItem('Canada','3000 - 4000')}
              css={{width:'500px'}}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-3">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              className="map-marker-blue"
              text={mapItem('Greenland','3000 - 4000')}
              css={{width:'500px'}}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-4">
          <div className="commonContainerSpecial">
              <div className={`${!now ? 'decrease' : 'increase'}`}>
                <MapMarker
                  size={`small`}
                  className={`map-marker-blue`}
                  text={mapItem('Greenland','3000 - 4000')}
                  css={{width:'500px'}}
                />

              </div>

            
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-5">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              className="map-marker-blue"
              text={mapItem('USA','2 - 6000')}
              css={{width:'500px'}}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-6">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              className="map-marker-blue"
              text={mapItem('USA','2 - 99999')}
              css={{width:'500px'}}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-7">
          <div className="commonContainerSpecial">
              <div className={`${!now ? 'decrease' : 'increase'}`}>
                <MapMarker
                  size={`small`}
                  className={`map-marker-blue`}
                  text={mapItem('USA','2 - 3')}
                  css={{width:'500px'}}
                />

              </div>

            
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-8">
          <div className="commonContainerSpecial">
              <div className={`${!now ? 'decrease' : 'increase'}`}>
                <MapMarker
                  size={`small`}
                  className={`map-marker-blue`}
                  text={now ? mapItem('USA','500 - 600') : mapItem('USA','200 - 300')}
                  css={{width:'500px'}}
                />

              </div>

            
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-9">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              className="map-marker-blue"
              text={now ? mapItem('USA','2 - 3') : mapItem('USA','200 - 300')}
              css={{width:'500px'}}
            />
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-10">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'medium' : 'small'}`}
              className="map-marker-blue"
              text={now ? mapItem('USA','200 - 300') : mapItem('USA','400 - 900')}
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

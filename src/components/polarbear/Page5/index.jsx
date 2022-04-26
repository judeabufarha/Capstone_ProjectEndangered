import { ParallaxLayer } from "@react-spring/parallax";
import ToggleButtons from "../../toggle-buttons";
import { MapMarker } from "../../map-marker";
import "./styles.scss";
import { useState } from "react";
import { MapLegend } from "../../map-legend";

 /** Polarbear Page 5 */
const Page5 = ({ offset, color }) => {

  const [now, setNow] = useState(true)

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
        aria-label='then-now toggle'
      >
        <div className="wrapperCommonContainer ">
          <div className="commonContainerSpecial toggleButtons">
            <div className="flexContainer100">
              <ToggleButtons
                colour="toggle-orange"
                base="base-orange"
                onClick={() => {
                  setNow(!now);
                }}
                text="then-now"
              />
            </div>
          </div>
        </div>
      </ParallaxLayer>
{/** Paragraph layer */}
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
















        <div className="wrapperCommonContainer marker  marker-7">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Davis Straight', 'Stable') : mapItem('Davis Straight', 'Stable')}
            />

          </div>


        </div>

        <div className="wrapperCommonContainer marker  marker-2">
          <div className="commonContainerSpecial">
            <div className={`${!now ? 'decrease' : 'increase'}`}>
              <MapMarker
                size={`small`}
                colour="blueCircle"
                className={`map-marker-blue`}
                text={mapItem('Southern Beaufort Sea', 'Declining')}
                css={{ width: '500px' }}
              />

            </div>
          </div>
        </div>




        <div className="wrapperCommonContainer marker  marker-37">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'large'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Lancaster Sound', 'No data') : mapItem('Lancaster Sound', 'No data')}
            />

          </div>


        </div>





        <div className="wrapperCommonContainer marker  marker-40">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'small' : 'medium'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Kane Basin', 'Increasing') : mapItem('Kane Basin', 'Increasing')}
            />

          </div>


        </div>
        <div className="wrapperCommonContainer marker  marker-38">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'small' : 'small'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Norwegian Bay', 'No data') : mapItem('Norwegian Bay', 'No data')}
            />

          </div>


        </div>
        <div className="wrapperCommonContainer marker  marker-41">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="blueCircleOutlined"
              className="map-marker-blue"
              text={now ? mapItem('East Greenland', 'No data') : mapItem('East Greenland', 'No data')}
            />

          </div>


        </div>
        <div className="wrapperCommonContainer marker  marker-39">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'large' : 'large'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Buffin Bay', 'No data') : mapItem('Buffin Bay', 'No data')}
            />

          </div>


        </div>
        <div className="wrapperCommonContainer marker  marker-8">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'large' : 'large'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Foxe Basin', 'Stable') : mapItem('Foxe Basin', 'Stable')}
            />

          </div>


        </div>

        <div className="wrapperCommonContainer marker  marker-43">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'large'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Barents Sea', 'Stable') : mapItem('Barents Sea', 'Stable')}
            />

          </div>


        </div>

        <div className="wrapperCommonContainer marker  marker-9">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'small' : 'small'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Gulf of Boothia', 'Stable') : mapItem('Gulf of Boothia', 'Stable')}
            />

          </div>


        </div>
        <div className="wrapperCommonContainer marker  marker-6">
          <div className="commonContainerSpecial">
            <div className={`${!now ? 'decrease' : 'increase'}`}>
              <MapMarker
                size={`small`}
                colour="blueCircle"
                className={`map-marker-blue`}
                text={mapItem('Southern Hudson Bay', 'Declining')}
                css={{ width: '500px' }}
              />

            </div>
          </div>
        </div>
        <div className="wrapperCommonContainer marker  marker-42">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="blueCircleOutlined"
              className="map-marker-blue"
              text={now ? mapItem('Arctic Basin', 'No data') : mapItem('Arctic Basin', 'No data')}
            />

          </div>


        </div>


        <div className="wrapperCommonContainer marker  marker-37">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'large'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Lancaster Sound', 'No data') : mapItem('Lancaster Sound', 'No data')}
            />

          </div>


        </div>
        <div className="wrapperCommonContainer marker  marker-4">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'small' : 'medium'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('McClintock Channel', 'Increasing') : mapItem('McClintock Channel', 'Increasing')}
            />

          </div>


        </div>
        <div className="wrapperCommonContainer marker  marker-5">
          <div className="commonContainerSpecial">
            <div className={`${!now ? 'decrease' : 'increase'}`}>
              <MapMarker
                size={`small`}
                colour="blueCircle"
                className={`map-marker-blue`}
                text={mapItem('Western Hudson Bay', 'Declining')}
                css={{ width: '500px' }}
              />

            </div>
          </div>
        </div>



        <div className="wrapperCommonContainer marker  marker-45">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="blueCircleOutlined"
              className="map-marker-blue"
              text={now ? mapItem('Laptev Sea', 'No data') : mapItem('Laptev Sea', 'No data')}
            />

          </div>


        </div>

        <div className="wrapperCommonContainer marker  marker-44">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'medium' : 'medium'}`}
              colour="blueCircleOutlined"
              className="map-marker-blue"
              text={now ? mapItem('Kara Sea', 'No data') : mapItem('Kara Sea', 'No data')}
            />

          </div>


        </div>



        <div className="wrapperCommonContainer marker  marker-10">
          <div className="commonContainerSpecial">

            <MapMarker
              size={`${now ? 'small' : 'small'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Viscount Melville Sound', 'No data') : mapItem('Viscount Melville Sound', 'No data')}
            />

          </div>


        </div>

        <div className="wrapperCommonContainer marker  marker-3">
          <div className="commonContainerSpecial">
            <div className={`${!now ? 'decrease' : 'increase'}`}>
              <MapMarker
                size={`small`}
                colour="blueCircle"
                className={`map-marker-blue`}
                text={mapItem('Northern Beaufort Sea', 'Declining')}
                css={{ width: '500px' }}
              />

            </div>
          </div>
        </div>

        <div className="wrapperCommonContainer marker marker-1">
          <div className="commonContainerSpecial">
            <MapMarker
              size={`${now ? 'large' : 'medium'}`}
              colour="blueCircle"
              className="map-marker-blue"
              text={now ? mapItem('Chukchi Sea', 'Stable') : mapItem('Chukchi Sea', 'Stable')}
            />
          </div>
        </div>


      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="desktop-map-legend">
          <MapLegend colour="blue-mobile" outline="blue-outline-mobile" />
        </div>
      </ParallaxLayer>

    </>
  );
};

const mapItem = (country, population) => <><h3>{country}:</h3><p>{population}</p></>

export default Page5;

import "./styles.css";
import PropTypes from "prop-types";
import ToggleButtons from "../../../toggle-buttons";
import { MapMarkerMobile } from "../../../map-marker-mobile";
import { useState } from "react";

export const MobilePage05 = (props) => {
    const [animal, setAnimal]= useState(props.animal);
    const [now, setNow]= useState(true);

    return (
        <div className="mobile-page-05">
            <div className="mobile-population">
                <div className="mobile-population-text">
                    <h1 className="mobile-population-title">Population</h1>
                    <p className="mobile-population-details">{props.text}</p>
                </div>

                <div className="mobile-population-visual">
                    <img
                        className="mobile-population-map"
                        src={props.map}
                        alt={props.alt}
                    />

                    {animal === "polarBear" && (
                        <div className="mobile-population-points">
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'large-mobile'}`} colour="blue-mobile" top="15%" left="0%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'none-mobile'}`} colour="blue-mobile" top="16%" left="5%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'none-mobile'}`} colour="blue-mobile" top="12%" left="6%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'medium-mobile'}`} colour="blue-mobile" top="17%" left="13%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'none-mobile'}`} colour="blue-mobile" top="22%" left="13%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'none-mobile'}`} colour="blue-mobile" top="27%" left="19%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'medium-mobile'}`} colour="blue-mobile" top="26%" left="28%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'large-mobile'}`} colour="blue-mobile" top="21%" left="20%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'small-mobile'}`} colour="blue-mobile" top="16%" left="17%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'small-mobile'}`} colour="blue-mobile" top="10%" left="11%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'large-mobile'}`} colour="blue-mobile" top="10%" left="16%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'small-mobile'}`} colour="blue-mobile" top="3%" left="19%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'medium-mobile'}`} colour="blue-mobile" top="14%" left="30%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'medium-mobile'}`} colour="blue-mobile" top="5%" left="25%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'medium-mobile'}`} colour="blue-outline-mobile" top="14%" left="40%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'medium-mobile'}`} colour="blue-outline-mobile" top="0%" left="50%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'large-mobile'}`} colour="blue-mobile" top="3%" left="59%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'medium-mobile'}`} colour="blue-outline-mobile" top="10%" left="75%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'medium-mobile'}`} colour="blue-outline-mobile" top="3%" left="90%"/>
                        </div>
                    )}
                </div>

                <div className="mobile-population-toggle">
                    <ToggleButtons
                        colour="toggle-orange"
                        base="base-orange"
                        text="then-now"
                        onClick={() => {
                            setNow(!now);
                        }}
                    />
                </div>
                
            </div>
      </div>
    );
  };

MobilePage05.propTypes = {
    text: PropTypes.func.isRequired,
    map: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired,
    animal: PropTypes.func.isRequired
}
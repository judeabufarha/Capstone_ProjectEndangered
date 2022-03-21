import "./styles.css";
import PropTypes from "prop-types";
import ToggleButtons from "../../../toggle-buttons";
import { MapMarkerMobile } from "../../../map-marker-mobile";
import { useState } from "react";
import { MapLegend } from "../../../map-legend";

export const MobilePage05 = (props) => {
    const [animal, setAnimal]= useState(props.animal);
    const [now, setNow]= useState(true);

    return (
        <div className="mobile-page-05">
            <div className="mobile-population">
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

                    {animal === "whoopingCrane" && (
                        <div className="mobile-population-points">
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'medium-mobile'}`} colour="red-mobile" top="22%" left="6%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'medium-mobile'}`} colour="red-mobile" top="27%" left="16%"/>
                            <MapMarkerMobile size={`${now ? 'none-mobile' : 'small-mobile'}`} colour="red-mobile" top="41%" left="14%"/>
                            <MapMarkerMobile size={`${now ? 'none-mobile' : 'small-mobile'}`} colour="red-mobile" top="42%" left="18%"/>
                        </div>
                    )}

                    {animal === "asianElephant" && (
                        <div className="mobile-population-points">
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="green-mobile" top="48%" left="39%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="green-mobile" top="55%" left="41%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'small-mobile'}`} colour="green-mobile" top="33%" left="50%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'small-mobile'}`} colour="green-mobile" top="46%" left="52%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'small-mobile'}`} colour="green-mobile" top="46%" left="47%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'small-mobile'}`} colour="green-mobile" top="55%" left="50%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'medium-mobile'}`} colour="green-mobile" top="53%" left="53%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'small-mobile'}`} colour="green-mobile" top="50%" left="53%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="green-mobile" top="56%" left="58%"/>
                        </div>
                    )}

                    {animal === "seaTurtle" && (
                        <div className="mobile-population-points">
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'medium-mobile'}`} colour="turquoise-mobile" top="33%" left="10%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'large-mobile'}`} colour="turquoise-mobile" top="43%" left="17%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="turquoise-mobile" top="34%" left="23%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="turquoise-mobile" top="50%" left="36%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'small-mobile'}`} colour="turquoise-mobile" top="36%" left="38%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'small-mobile'}`} colour="turquoise-mobile" top="28%" left="50%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="turquoise-mobile" top="55%" left="58%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="turquoise-mobile" top="40%" left="62%"/>
                            <MapMarkerMobile size={`${now ? 'large-mobile' : 'medium-mobile'}`} colour="turquoise-mobile" top="44%" left="73%"/>
                            <MapMarkerMobile size={`${now ? 'small-mobile' : 'small-mobile'}`} colour="turquoise-mobile" top="28%" left="80%"/>
                            <MapMarkerMobile size={`${now ? 'medium-mobile' : 'small-mobile'}`} colour="turquoise-mobile" top="51%" left="82%"/>
                        </div>
                    )}
                </div>

                <div className="mobile-population-text">
                    <h1 className="mobile-population-title">Population</h1>
                    <p className="mobile-population-details">{props.text}</p>
                </div>

                {animal === "polarBear" && (
                    <div className="mobile-map-legend">
                        <MapLegend colour="blue-mobile" outline="blue-outline-mobile"/>
                    </div> 
                )} 

                {animal === "whoopingCrane" && (
                    <div className="mobile-map-legend">
                        <MapLegend colour="red-mobile" outline="red-outline-mobile"/>
                    </div> 
                )} 

                {animal === "asianElephant" && (
                    <div className="mobile-map-legend">
                        <MapLegend colour="green-mobile" outline="green-outline-mobile"/>
                    </div> 
                )} 

                {animal === "seaTurtle" && (
                    <div className="mobile-map-legend">
                        <MapLegend colour="turquoise-mobile" outline="turquoise-outline-mobile"/>
                    </div> 
                )}  

                {animal === "polarBear" && (
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
                )}

                {animal === "whoopingCrane" && (
                    <div className="mobile-population-toggle">
                        <ToggleButtons
                            colour="toggle-green"
                            base="base-green"
                            text="then-now"
                            onClick={() => {
                                setNow(!now);
                            }}
                        />
                    </div>
                )}     

                {animal === "asianElephant" && (
                    <div className="mobile-population-toggle">
                        <ToggleButtons
                            colour="toggle-pink"
                            base="base-pink"
                            text="then-now"
                            onClick={() => {
                                setNow(!now);
                            }}
                        />
                    </div>
                )}   

                {animal === "seaTurtle" && (
                    <div className="mobile-population-toggle">
                        <ToggleButtons
                            colour="toggle-peach"
                            base="base-peach"
                            text="then-now"
                            onClick={() => {
                                setNow(!now);
                            }}
                        />
                    </div>
                )}             
                
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
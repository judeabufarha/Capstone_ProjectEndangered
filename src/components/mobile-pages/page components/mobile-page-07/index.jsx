import "./styles.css";
import PropTypes from "prop-types";
import ToggleButtons from "../../../toggle-buttons";
import { useState } from "react";

export const MobilePage07 = (props) => {
    //define variable for hiding and showing image
    const [showImage, setShowImage] = useState(true);

    return (
        <div className="mobile-page-07" id={`${showImage ? props.colour1 : props.colour2}`}>
            <div className="mobile-future-background">
                    {/*positive image of future*/}
                    <img
                        id="mobile-future-positive"
                        src={props.image1}
                        alt={props.alt}
                    />

                    {/*negative image of future*/}
                    <img
                        className={`${showImage ? "fade-out-mobile" : "fade-in-mobile"}`} 
                        id="mobile-future-negative"
                        src={props.image2}
                        alt={props.alt}
                    />
            </div>
            <div className="mobile-future">
                {/*title of page*/}
                <h1 className="mobile-future-title">The Future</h1>

                <div className="mobile-future-content">
                    <div className="mobile-future-toggle">
                        {/*display specific toggle depending on current animal*/}
                        {props.animal === "polarBear" && (
                            <ToggleButtons
                                colour="toggle-orange"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage); //on click, display/hide negative image
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}

                        {/*display specific toggle depending on current animal*/}
                        {props.animal === "whoopingCrane" && (
                            <ToggleButtons
                                colour="toggle-green"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage); //on click, display/hide negative image
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}

                        {/*display specific toggle depending on current animal*/}
                        {props.animal === "asianElephant" && (
                            <ToggleButtons
                                colour="toggle-pink"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage); //on click, display/hide negative image
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}

                        {/*display specific toggle depending on current animal*/}
                        {props.animal === "seaTurtle" && (
                            <ToggleButtons
                                colour="toggle-peach"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage); //on click, display/hide negative image
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}
                    </div>

                    {/*paragraph text*/}
                    <div className="mobile-future-text-box">
                        <p className="mobile-future-text">{props.text}</p>
                    </div>

                </div>
                
                {/*extra space for mobile scrolling*/}
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage07.propTypes = {
    animal: PropTypes.func.isRequired,
    image1: PropTypes.func.isRequired,
    image2: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired,
    text: PropTypes.func.isRequired,
    colour1: PropTypes.func.isRequired,
    colour2: PropTypes.func.isRequired,
}
import "./styles.css";
import PropTypes from "prop-types";
import ToggleButtons from "../../../toggle-buttons";
import { useState } from "react";

export const MobilePage07 = (props) => {
    const [showImage, setShowImage] = useState(true);

    return (
        <div className="mobile-page-07" id={`${showImage ? props.colour1 : props.colour2}`}>
            <div className="mobile-future-background">
                    <img
                        id="mobile-future-positive"
                        src={props.image1}
                        alt={props.alt}
                    />

                    <img
                        className={`${showImage ? "fade-out" : "fade-in"}`} 
                        id="mobile-future-negative"
                        src={props.image2}
                        alt={props.alt}
                    />
            </div>
            <div className="mobile-future">
                <h1 className="mobile-future-title">The Future</h1>

                <div className="mobile-future-content">
                    <div className="mobile-future-toggle">
                        {props.animal === "polarBear" && (
                            <ToggleButtons
                                colour="toggle-orange"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage);
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}

                        {props.animal === "whoopingCrane" && (
                            <ToggleButtons
                                colour="toggle-green"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage);
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}

                        {props.animal === "asianElephant" && (
                            <ToggleButtons
                                colour="toggle-pink"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage);
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}

                        {props.animal === "seaTurtle" && (
                            <ToggleButtons
                                colour="toggle-peach"
                                base="base-white"
                                onClick={() => {
                                    setShowImage(!showImage);
                                    console.log("toggle");
                                }}
                                text="positive-negative"
                            />
                        )}
                    </div>

                    <div className="mobile-future-text-box">
                        <p className="mobile-future-text">{props.text}</p>
                    </div>

                </div>
                
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
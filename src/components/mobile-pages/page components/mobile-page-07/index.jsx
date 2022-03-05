import "./styles.css";
import PropTypes from "prop-types";
import ToggleButtons from "../../../toggle-buttons";
import { useState } from "react";

export const MobilePage07 = (props) => {
    const [showImage, setShowImage] = useState(true);

    return (
        <div className="mobile-page-07">
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
                        <ToggleButtons
                            colour="toggle-orange"
                            base="base-white"
                            onClick={() => {
                                setShowImage(!showImage);
                                console.log("toggle");
                            }}
                            text="positive-negative"
                        />
                    </div>

                    <div className="mobile-future-text-box">
                        <p className="mobile-future-text">Scientists predict that polar bears will be extinct by the end of the century if greenhouse gas emissions continue to increase. Greenhouse gas emissions have caused climate change on our planet, and this is affecting the polar bears’ environment. As the Arctic becomes warmer, the ice begins to melt. However, there are two possible future outcomes. Reducing greenhouse gas emissions globally would significantly help save the arctic environment. If we change our ways, the Arctic could be saved, and polar bears would be able to feed and nourish themselves, which would help regrow the population.</p>
                    </div>

                </div>
                
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage07.propTypes = {
    image1: PropTypes.func.isRequired,
    image2: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired
}
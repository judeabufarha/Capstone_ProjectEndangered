import "./styles.css";
import PropTypes from "prop-types";
import ToggleButtons from "../../../toggle-buttons";

export const MobilePage05 = (props) => {

    return (
        <div className="mobile-page-05">
            <div className="mobile-population">
                <div className="mobile-population-text">
                    <h1 className="mobile-population-title">Population</h1>
                    <p className="mobile-population-details">{props.text}</p>
                </div>

                <div className="mobile-population-toggle">
                    <ToggleButtons
                    colour="toggle-orange"
                    base="base-orange"
                    text="then-now"
                    />
                </div>

                <div className="mobile-population-visual">
                    <img
                        className="mobile-population-map"
                        src={props.map}
                        alt={props.alt}
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
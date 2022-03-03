import "./styles.css";
import PropTypes from "prop-types";

export const MobilePage02 = (props) => {

    return (
        <div className="mobile-page-02">
            <div className="mobile-about">
                <div className="mobile-about-info">
                    <h1 className="mobile-about-label">Scientific Name</h1>
                    <p className="mobile-about-details">{props.name}</p>
                </div>

                <div id="about-divider"></div>

                <div className="mobile-about-info">
                    <h1 className="mobile-about-label">Location</h1>
                    <p className="mobile-about-details">{props.location}</p>
                </div>

                <div id="about-divider"></div>

                <div className="mobile-about-info">
                    <h1 className="mobile-about-label">Population</h1>
                    <p className="mobile-about-details">{props.population}</p>
                </div>

                <div id="about-divider"></div>

                <div className="mobile-about-info">
                    <h1 className="mobile-about-label">Life Span</h1>
                    <p className="mobile-about-details">{props.lifespan}</p> 
                </div>
            </div>
      </div>
    );
  };

MobilePage02.propTypes = {
    name: PropTypes.func.isRequired,
    location: PropTypes.func.isRequired,
    population: PropTypes.func.isRequired,
    lifespan: PropTypes.func.isRequired,
}
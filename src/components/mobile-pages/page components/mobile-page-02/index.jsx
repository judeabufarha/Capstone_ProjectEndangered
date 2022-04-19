import "./styles.css";
import PropTypes from "prop-types";

export const MobilePage02 = (props) => {

    return (
        <div className="mobile-page-02">
            {/*details about animal*/}
            <div className="mobile-about">
                {/*scientific name of animal*/}
                <div className="mobile-about-info">
                    <h1 className="mobile-about-label">Scientific Name</h1>
                    <p className="mobile-about-details">{props.name}</p>
                </div>

                {/*divider between content*/}
                <div id="about-divider"></div>

                {/*location of animal*/}
                <div className="mobile-about-info">
                    <h1 className="mobile-about-label">Location</h1>
                    <p className="mobile-about-details">{props.location}</p>
                </div>

                {/*divider between content*/}       
                <div id="about-divider"></div>

                {/*population of animal*/}
                <div className="mobile-about-info">
                    <h1 className="mobile-about-label">Population</h1>
                    <p className="mobile-about-details">{props.population}</p>
                </div>

                {/*divider between content*/}
                <div id="about-divider"></div>

                {/*life span of animal*/}
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
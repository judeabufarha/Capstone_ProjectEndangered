import "./styles.css";
import PropTypes from "prop-types";

export const MobilePage03 = (props) => {

    return (
        <div className="mobile-page-03">
            <div className="mobile-importance">
                {/*page title and paragraph text*/}
                <div className="mobile-importance-text">
                    <h1 className="mobile-importance-title">The Importance of the {props.title}</h1>
                    <p className="mobile-importance-details">{props.para1}</p>
                    <div id="importance-divider"></div>
                    <p className="mobile-importance-details">{props.para2}</p>
                </div>

                <div className="mobile-importance-images">
                    {/*first image*/}
                    <img
                        className="mobile-importance-image"
                        src={props.image1}
                        alt={props.alt1}
                    />
                    {/*second image*/}
                    <img
                        className="mobile-importance-image"
                        src={props.image2}
                        alt={props.alt2}
                    />
                    {/*third image*/}
                    <img
                        className="mobile-importance-image"
                        src={props.image3}
                        alt={props.alt3}
                    />
                </div>
                
                {/*extra space for mobile scrolling*/}
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage03.propTypes = {
    title: PropTypes.func.isRequired,
    para1: PropTypes.func.isRequired,
    para2: PropTypes.func.isRequired,
    image1: PropTypes.func.isRequired,
    alt1: PropTypes.func.isRequired,
    image2: PropTypes.func.isRequired,
    alt2: PropTypes.func.isRequired,
    image3: PropTypes.func.isRequired,
    alt3: PropTypes.func.isRequired
}
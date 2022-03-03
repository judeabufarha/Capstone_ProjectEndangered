import "./styles.css";
import PropTypes from "prop-types";

export const MobilePage04 = (props) => {

    return (
        <div className="mobile-page-04">
            <div className="mobile-status">
                <div className="mobile-status-heading">
                    <h1 className="mobile-status-title">Status: </h1>
                    <h1 className="mobile-status-status">{props.status}</h1>
                </div>

                <div className="mobile-status-images">
                    <img
                        className="mobile-status-image"
                        src={props.image}
                        alt={props.alt}
                    />
                </div>

                <div className="mobile-status-text">
                    <p className="mobile-status-paragraph">{props.text1}</p>
                    <p className="mobile-status-paragraph">{props.text2}</p>
                    <p className="mobile-status-paragraph">{props.text3}</p>
                </div>

                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage04.propTypes = {
    status: PropTypes.func.isRequired,
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired,
    text1: PropTypes.func.isRequired,
    text2: PropTypes.func.isRequired,
    text3: PropTypes.func.isRequired
}
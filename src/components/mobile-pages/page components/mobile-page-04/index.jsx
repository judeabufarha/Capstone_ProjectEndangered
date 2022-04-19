import "./styles.css";
import PropTypes from "prop-types";

export const MobilePage04 = (props) => {

    return (
        <div className="mobile-page-04">
            <div className="mobile-status">
                {/*title of page, including status of animal*/}
                <div className="mobile-status-heading">
                    <h1 className="mobile-status-title">Status: </h1>
                    <h1 className="mobile-status-status">{props.status}</h1>
                </div>

                {/*image of animal's environment*/}
                <div className="mobile-status-images">
                    <img
                        className="mobile-status-image"
                        src={props.image}
                        alt={props.alt}
                    />
                </div>

                {/*paragraph text*/}
                <div className="mobile-status-text">
                    <p className="mobile-status-paragraph">{props.text1}</p>
                    <p className="mobile-status-paragraph">{props.text2}</p>
                    <p className="mobile-status-paragraph">{props.text3}</p>
                </div>

                {/*extra space for mobile scrolling*/}
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
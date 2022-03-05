import "./styles.css";
import PropTypes from "prop-types";
import { TextButton } from "../../../text-button";

export const MobilePage09 = (props) => {

    return (
        <div className="mobile-page-09">
            <div className="mobile-explore">
                <div className="mobile-explore-text">
                    <p className="mobile-explore-details">{props.text}</p>
                </div>

                <div className="mobile-explore-content">
                    <div className="mobile-explore-images">
                        <img
                            className="mobile-explore-image"
                            src={props.image}
                            alt={props.alt}
                        />
                    </div>

                    <div className="mobile-explore-button">
                        <TextButton
                            text="Begin Exploring"
                            colour="dark"
                            type={props.button}
                            onClick={() => {
                                window.open(props.link, "_blank");
                            }}
                        />
                    </div>
                </div>
                
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage09.propTypes = {
    text: PropTypes.func.isRequired,
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired,
    button: PropTypes.func.isRequired,
    link: PropTypes.func.isRequired
}
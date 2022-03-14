import "./styles.css";
import PropTypes from "prop-types";

export const MobilePage01 = (props) => {

    return (
        <div className="mobile-page-01">
             <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
            <div className="mobile-swipe-info">
                <span className="material-icons swipe-icon">chevron_left</span>
                <span className="material-icons swipe-icon">chevron_left</span>
                <p className="mobile-swipe-text">Swipe</p>
            </div>
            <img
                className="mobile-page01-image"
                src={props.image}
                alt={props.alt}
            />

            <h1 className="mobile-page01-title">The <br/>{props.title}</h1>
      </div>
    );
  };

MobilePage01.propTypes = {
    title: PropTypes.func.isRequired,
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired,
};
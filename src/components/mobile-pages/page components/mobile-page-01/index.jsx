import "./styles.css";
import PropTypes from "prop-types";

export const MobilePage01 = (props) => {

    return (
        <div className="mobile-page-01">
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
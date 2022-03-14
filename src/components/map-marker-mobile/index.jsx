import PropTypes from "prop-types";
import "./styles.css";
import { css } from "styled-components";

export const MapMarkerMobile = (props) => {
  return (
    <div className={`centered ${props.size}}`}>
        <div style={{position: "absolute", top: props.top, left: props.left}} className={`circle-mobile ${props.size} ${props.colour}`}></div>
    </div>
  );
};

MapMarkerMobile.propTypes = {
  size: PropTypes.string.isRequired,
  colour:  PropTypes.string.isRequired,
  top:  PropTypes.string.isRequired,
  left:  PropTypes.string.isRequired
};

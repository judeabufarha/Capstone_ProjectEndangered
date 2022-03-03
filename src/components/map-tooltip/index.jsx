import PropTypes from "prop-types";
import "./styles.css";
import React from "react"

export const MapTooltip = (props) => {

    return (
        <div className="tooltip">Hover over me
            <span className="tooltiptext">Tooltip text</span>
        </div>
    );
}

MapTooltip.propTypes = {
  
}

import PropTypes from "prop-types";
import "./styles.css";
import React from "react"

export const MapTooltip = (props) => {

    return (
        <div class="tooltip">Hover over me
            <span class="tooltiptext">Tooltip text</span>
        </div>
    );
}

MapTooltip.propTypes = {
  
}
import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import Tooltip from "react-simple-tooltip";
import { css } from "styled-components";
import { MapTooltip } from "../map-tooltip";

export const MapMarker = (props) => {
  return (
    <div className={`centered ${props.size}}`}>
      <Tooltip
        customCss={css`
          top: 35px;
          white-space: nowrap;`
        }
        className='shadowTooltip'
        content={props.text}
        background="#c4e1e4"
        border="#013440"
        placement="right"
        padding={20}
        offset={70}
        radius={8}
        color="#013440"
        arrow={15}
      >
        <div style={{ top: "-30px" }} className={`circle ${props.size} ${props.colour}`}></div>
      </Tooltip>
    </div>
  );
};

MapMarker.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  colour:  PropTypes.string.isRequired,
};

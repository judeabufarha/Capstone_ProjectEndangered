import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import Ripples from "react-ripples";

export const LargeIconButton = (props) => {
  const [direction, setDirection] = useState(props.type);

  useEffect(() => {
    setDirection(props.type);
  }, [props.type]);

  const HandleOnClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };
  return (
    <div className="button-container" style={{ ...props.style }}>
      <div
        style={{ display: "inline-flex", borderRadius: 50, overflow: "hidden" }}
      >
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <Ripples color={"#013440CC"} during={1200}>
          <button className="large-icon-button" onClick={HandleOnClick}>
            {direction === "right" && (
              <span className="material-icons chevron-icon">chevron_right</span>
            )}

            {direction === "left" && (
              <span className="material-icons chevron-icon">chevron_left</span>
            )}
          </button>
        </Ripples>
      </div>
    </div>
  );
};

LargeIconButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

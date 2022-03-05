import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";

export const TimelineMarkerMobile = (props) => {
  const [type, setType] = useState(props.type);

  return (
    <div className="timeline-marker">
        {type === "single" && (
            <div className="timeline-marker-container">
                <div className="timeline-marker-base">
                    <img
                        className="timeline-marker-image"
                        src={props.base}
                        alt="Timeline marker."
                    />
                </div>

                <div className="timeline-marker-contents">
                    <p className="timeline-marker-date">{props.date1}</p>
                    <p className="timeline-marker-text">{props.text1}</p>
                </div>
            </div>
        )}

        {type === "double" && (
            <div className="timeline-marker-container">
                <div className="timeline-marker-base">
                    <img
                        className="timeline-marker-image"
                        src={props.base}
                        alt="Timeline marker."
                    />
                </div>

                <div className="timeline-marker-contents">
                    <div className="timeline-marker-event1">
                        <p className="timeline-marker-date">{props.date1}</p>
                        <p className="timeline-marker-text">{props.text1}</p>
                    </div>
                    <div className="timeline-marker-event2">
                        <p className="timeline-marker-date">{props.date2}</p>
                        <p className="timeline-marker-text1">{props.text2}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

TimelineMarkerMobile.propTypes = {
  type: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  date1: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  date2: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired
};

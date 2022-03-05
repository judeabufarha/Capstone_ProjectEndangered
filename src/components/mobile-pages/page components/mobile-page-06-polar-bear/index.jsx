import "./styles.css";
import PropTypes from "prop-types";
import DiscusDate from "../../../DiscusDate";
import { TimelineMarkerMobile } from "../../../timeline-marker-mobile";

export const MobilePage06PolarBear = (props) => {

    return (
        <div className="mobile-page-06">
            <div className="mobile-past-background">
                    <img
                        className="mobile-past-image"
                        src={props.image}
                        alt={props.alt}
                    />
            </div>
            <div className="mobile-past">
                <h1 className="mobile-past-title">The Past</h1>

                <div className="mobile-past-timeline">
                    <div className="mobile-past-timeline-base">
                        <div className="mobile-past-points">
                            <div className="mobile-past-point1">
                                <DiscusDate date="1960"/>
                            </div>
                            <div className="mobile-past-point2">
                                <DiscusDate date="1980"/>
                            </div>
                            <div className="mobile-past-point3">
                                <DiscusDate date="2000"/>
                            </div>
                            <div className="mobile-past-point4">
                                <DiscusDate date="2020"/>
                            </div>
                        </div>
                        <img
                            className="mobile-past-lines"
                            src="https://i.ibb.co/jRBsFZg/Lines.png"
                            alt="Timeline"
                        />
                    </div>

                    <div className="mobile-past-event1">
                        <TimelineMarkerMobile
                            type="double"
                            base="https://i.ibb.co/hLrGVyN/Rectangle-3.png"
                            date1="1971"
                            text1="Polar bears are named Ursus maritimus."
                            date2="1973"
                            text2="Commercial hunting of polar bears is now regulated."
                        />
                    </div>
                    <div className="mobile-past-event2">
                        <TimelineMarkerMobile
                            type="double"
                            base="https://i.ibb.co/CnyPNwh/Rectangle-3.png"
                            date1="2005"
                            text1="The polar bear’s status is upgraded to vulnerable."
                            date2="2008"
                            text2="Polar bears are classified as endangered."
                        />
                    </div>
                </div>
                
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage06PolarBear.propTypes = {
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired
}
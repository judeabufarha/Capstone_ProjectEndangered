import "./styles.css";
import PropTypes from "prop-types";
import DiscusDate from "../../../DiscusDate";
import { TimelineMarkerMobile } from "../../../timeline-marker-mobile";

export const MobilePage06PolarBear = (props) => {

    return (
        <div className="mobile-page-06-polar-bear">
            {/*background image of timeline*/}
            <div className="pb-past-background">
                    <img
                        className="pb-past-image"
                        src={props.image}
                        alt={props.alt}
                    />
            </div>
            <div className="pb-past">
                {/*page title*/}
                <h1 className="pb-past-title">The Past</h1>

                <div className="pb-past-timeline">
                    <div className="pb-past-timeline-base">
                        <div className="pb-past-points">
                            <div className="pb-past-point1">
                                {/*use discus date component*/}
                                <DiscusDate date="1960"/>
                            </div>
                            <div className="pb-past-point2">
                                {/*use discus date component*/}
                                <DiscusDate date="1980"/>
                            </div>
                            <div className="pb-past-point3">
                                {/*use discus date component*/}
                                <DiscusDate date="2000"/>
                            </div>
                            <div className="pb-past-point4">
                                {/*use discus date component*/}
                                <DiscusDate date="2020"/>
                            </div>
                        </div>
                        {/*lines of timeline*/}
                        <img
                            className="pb-past-lines"
                            src="https://i.ibb.co/jRBsFZg/Lines.png"
                            alt="Timeline"
                        />
                    </div>

                    {/*timeline event marker*/}     
                    <div className="pb-past-event1">
                        <TimelineMarkerMobile
                            type="double"
                            base="https://i.ibb.co/hLrGVyN/Rectangle-3.png"
                            date1="1971"
                            text1="Polar bears are named Ursus maritimus."
                            date2="1973"
                            text2="Commercial hunting of polar bears is now regulated."
                        />
                    </div>
                    {/*timeline event marker*/}
                    <div className="pb-past-event2">
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
                
                {/*extra space for mobile scrolling*/}
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage06PolarBear.propTypes = {
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired
}
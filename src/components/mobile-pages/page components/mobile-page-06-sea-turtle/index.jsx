import "./styles.css";
import PropTypes from "prop-types";
import DiscusDate from "../../../DiscusDate";
import { TimelineMarkerMobile } from "../../../timeline-marker-mobile";

export const MobilePage06SeaTurtle = (props) => {
    //define image for timeline points
    const urlOfImage = 'https://i.ibb.co/9p445Fk/Ellipse-12-1.png';

    return (
        <div className="mobile-page-06-sea-turtle">
            {/*background image of timeline*/}
            <div className="st-past-background">
                    <img
                        className="ae-past-image"
                        src={props.image}
                        alt={props.alt}
                    />
            </div>
            <div className="st-past">
                {/*page title*/}
                <h1 className="st-past-title">The Past</h1>

                <div className="st-past-timeline">
                    <div className="st-past-timeline-base">
                        <div className="st-past-points">
                            <div className="st-past-point1">
                                {/*use discus date component*/}
                                <DiscusDate date="1960" image={urlOfImage}/>
                            </div>
                            <div className="st-past-point2">
                                {/*use discus date component*/}
                                <DiscusDate date="1980" image={urlOfImage}/>
                            </div>
                            <div className="st-past-point3">
                                {/*use discus date component*/}
                                <DiscusDate date="2000" image={urlOfImage}/>
                            </div>
                            <div className="st-past-point4">
                                {/*use discus date component*/}
                                <DiscusDate date="2020" image={urlOfImage}/>
                            </div>
                        </div>
                        {/*lines of timeline*/}
                        <img
                            className="st-past-lines"
                            src="https://i.ibb.co/jRBsFZg/Lines.png"
                            alt="Timeline"
                        />
                    </div>

                    {/*timeline event marker*/}
                    <div className="st-past-event1">
                        <TimelineMarkerMobile
                            type="double"
                            base="https://i.ibb.co/SQGTTZ5/Rectangle-3.png"
                            date1="1978"
                            text1="The green sea turtle is classified as endangered in U.S.A."
                            date2="1982"
                            text2="The green sea turtle is classified as endangered internationally."
                        />
                    </div>
                    {/*timeline event marker*/}
                    <div className="st-past-event2">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="2004"
                            text1="The wild population is said to face high risk of extinction."
                        />
                    </div>
                </div>
                
                {/*extra space for mobile scrolling*/}
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

  MobilePage06SeaTurtle.propTypes = {
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired
}
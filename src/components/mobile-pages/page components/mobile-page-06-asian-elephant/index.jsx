import "./styles.css";
import PropTypes from "prop-types";
import DiscusDate from "../../../DiscusDate";
import { TimelineMarkerMobile } from "../../../timeline-marker-mobile";

export const MobilePage06AsianElephant = (props) => {
    const urlOfImage = 'https://i.ibb.co/HTgn4T7/Group-4.png';

    return (
        <div className="mobile-page-06-asian-elephant">
            <div className="ae-past-background">
                    <img
                        className="ae-past-image"
                        src={props.image}
                        alt={props.alt}
                    />
            </div>
            <div className="ae-past">
                <h1 className="ae-past-title">The Past</h1>

                <div className="ae-past-timeline">
                    <div className="ae-past-timeline-base">
                        <div className="ae-past-points">
                            <div className="ae-past-point1">
                                <DiscusDate date="1980" image={urlOfImage}/>
                            </div>
                            <div className="ae-past-point1">
                                <DiscusDate date="2000" image={urlOfImage}/>
                            </div>
                            <div className="ae-past-point2">
                                <DiscusDate date="2020" image={urlOfImage}/>
                            </div>
                        </div>
                        <img
                            className="ae-past-lines"
                            src="https://i.ibb.co/rwxC0mt/Lines.png"
                            alt="Timeline"
                        />
                    </div>

                    <div className="ae-past-event1">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="1986"
                            text1="The Asian elephant is classified as endangered."
                        />
                    </div>
                    <div className="ae-past-event2">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="1997"
                            text1="The Asian Elephant Conservation Act is passed."
                        />
                    </div>
                    <div className="ae-past-event3">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="2008"
                            text1="Asian elephant poaching increases significantly."
                        />
                    </div>
                </div>
                
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

  MobilePage06AsianElephant.propTypes = {
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired
}
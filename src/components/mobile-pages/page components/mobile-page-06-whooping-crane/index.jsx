import "./styles.css";
import PropTypes from "prop-types";
import DiscusDate from "../../../DiscusDate";
import { TimelineMarkerMobile } from "../../../timeline-marker-mobile";

export const MobilePage06WhoopingCrane = (props) => {
    //define image for timeline points
    const urlOfImage = 'https://i.ibb.co/hYLr69R/Ellipse-12-2.png';

    return (
        <div className="mobile-page-06-whooping-crane">
            {/*background image of timeline*/}
            <div className="wc-past-background">
                    <img
                        className="wc-past-image"
                        src={props.image}
                        alt={props.alt}
                    />
            </div>
            <div className="wc-past">
                {/*page title*/}
                <h1 className="wc-past-title">The Past</h1>

                <div className="wc-past-timeline">
                    <div className="wc-past-timeline-base">
                        <div className="wc-past-points">
                            <div className="wc-past-point1">
                                {/*use discus date component*/}
                                <DiscusDate date="1940" image={urlOfImage}/>
                            </div>
                            <div className="wc-past-point1">
                                {/*use discus date component*/}
                                <DiscusDate date="1960" image={urlOfImage}/>
                            </div>
                            <div className="wc-past-point2">
                                {/*use discus date component*/}
                                <DiscusDate date="1980" image={urlOfImage}/>
                            </div>
                            <div className="wc-past-point3">
                                {/*use discus date component*/}
                                <DiscusDate date="2000" image={urlOfImage}/>
                            </div>
                            <div className="wc-past-point4">
                                {/*use discus date component*/}
                                <DiscusDate date="2020" image={urlOfImage}/>
                            </div>
                        </div>
                        <img
                            className="wc-past-lines"
                            src="https://i.ibb.co/qjm9G4d/Lines.png"
                            alt="Timeline"
                        />
                    </div>

                    {/*timeline event marker*/}
                    <div className="wc-past-event1">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/znzHTsR/Rectangle-3.png"
                            date1="1941"
                            text1="The population drops to 15 living whooping cranes."
                        />
                    </div>
                    {/*timeline event marker*/}
                    <div className="wc-past-event2">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="1967"
                            text1="Breeding programs and reintroduction efforts begin."
                        />
                    </div>
                    {/*timeline event marker*/}
                    <div className="wc-past-event3">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="1978"
                            text1="The whooping crane is classified as endangered."
                        />
                    </div>
                    {/*timeline event marker*/}
                    <div className="wc-past-event4">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="1993"
                            text1="Whooping cranes are released into the wild in Florida."
                        />
                    </div>
                    {/*timeline event marker*/}
                    <div className="wc-past-event5">
                        <TimelineMarkerMobile
                            type="single"
                            base="https://i.ibb.co/52r8g3Q/Rectangle-3.png"
                            date1="2004"
                            text1="A total of 221 whooping cranes are released into the wild."
                        />
                    </div>
                </div>
                
                {/*extra space for mobile scrolling*/}
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

  MobilePage06WhoopingCrane.propTypes = {
    image: PropTypes.func.isRequired,
    alt: PropTypes.func.isRequired
}
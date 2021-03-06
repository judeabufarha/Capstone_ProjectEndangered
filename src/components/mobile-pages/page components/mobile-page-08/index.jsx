import "./styles.css";
import PropTypes from "prop-types";
import InfoBlob from "../../../infoBlob";

export const MobilePage08 = (props) => {

    return (
        <div className="mobile-page-08">
            <div className="mobile-conservation">
                <div className="mobile-conservation-content">
                    {/*title of page and paragraph text*/}
                    <h1 className="mobile-conservation-title">Conservation</h1>
                    <p className="mobile-conservation-details">{props.text}</p>
                    {/*conservation information*/}
                    <div className="mobile-conservation-blobs">
                        <div className="mobile-conservation-blob">
                            {/*use info blob component*/}
                            <InfoBlob
                                BgImage={props.blob1}
                                linkText="Learn More"
                                title={props.title1}
                                text={props.text1}
                                butnColour={props.colour1}
                                linkFn={() => {
                                    window.open(props.link1, "_blank"); //on click, open new tab to linked conservation resource 
                                }}
                            />
                        </div>

                        <div className="mobile-conservation-blob">
                            {/*use info blob component*/}
                            <InfoBlob
                                BgImage={props.blob2}
                                linkText="Learn More"
                                title={props.title2}
                                text={props.text2}
                                butnColour={props.colour2}
                                linkFn={() => {
                                    window.open(props.link2, "_blank"); //on click, open new tab to linked conservation resource 
                                }}
                            />
                        </div>

                        <div className="mobile-conservation-blob">
                            {/*use info blob component*/}
                            <InfoBlob
                                BgImage={props.blob3}
                                linkText="Learn More"
                                title={props.title3}
                                text={props.text3}
                                butnColour={props.colour3}
                                linkFn={() => {
                                    window.open(props.link3, "_blank"); //on click, open new tab to linked conservation resource 
                                }}
                            />
                        </div>
                        
                    </div>
                </div>
                
                {/*extra space for mobile scrolling*/}
                <div className="mobile-space"></div>
            </div>
      </div>
    );
  };

MobilePage08.propTypes = {
    text: PropTypes.func.isRequired,
    blob1: PropTypes.func.isRequired,
    title1: PropTypes.func.isRequired,
    text1: PropTypes.func.isRequired,
    link1: PropTypes.func.isRequired,
    blob2: PropTypes.func.isRequired,
    title2: PropTypes.func.isRequired,
    text2: PropTypes.func.isRequired,
    link2: PropTypes.func.isRequired,
    blob3: PropTypes.func.isRequired,
    title3: PropTypes.func.isRequired,
    text3: PropTypes.func.isRequired,
    link3: PropTypes.func.isRequired,
    colour1: PropTypes.func.isRequired,
    colour2: PropTypes.func.isRequired,
    colour3: PropTypes.func.isRequired
}
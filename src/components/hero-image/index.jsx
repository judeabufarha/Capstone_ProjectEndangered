import "./styles.css";
import { TextButton } from "../text-button";
import PropTypes from "prop-types";

export const HeroImage = (props) => {
    
    return (
      <div className="hero-container">

        {/*hero image for desktop*/}
        <img
            className="hero-image-desktop"
            src="https://i.ibb.co/2FHZS6B/Poster-03.png"
            alt="hero image with four environments, wet prairies, arctic, grasslands, and tropical island."
        />

        {/*hero image for mobile*/}
        <img
            className="hero-image-mobile"
            src="https://i.ibb.co/Fg1Z2C0/Poster-02.png"
            alt="hero image with four environments, wet prairies, arctic, grasslands, and tropical island."
        />

        {/*text for hero image - title and summary*/}
        <div className="hero-text">
            <h1 className="homepage-title">Project Endangered</h1>
            <p className="homepage-description">
                Learn about four endangered animals and explore their habitats.
            </p>
        </div>

        {/*enter button*/}
        <div className="hero-button">
            <TextButton 
                onClick={props.scrollFn} //on click triggers scroll function
                type="light" 
                text="Enter" 
                colour="light" 
            />
        </div>
    </div>
    );
  };

HeroImage.propTypes = {
    scrollFn: PropTypes.func.isRequired
};
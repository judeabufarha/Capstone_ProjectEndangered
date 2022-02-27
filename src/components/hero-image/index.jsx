import "./styles.css";
import { TextButton } from "../text-button";

export const HeroImage = (props) => {
    
    return (
      <div className="hero-container">
        <img
            className="hero-image-desktop"
            src="https://i.ibb.co/2FHZS6B/Poster-03.png"
            alt="hero image with four environments, wet prairies, arctic, grasslands, and tropical island."
        />
            <img
            className="hero-image-mobile"
            src="https://i.ibb.co/Fg1Z2C0/Poster-02.png"
            alt="hero image with four environments, wet prairies, arctic, grasslands, and tropical island."
        />
        <div className="hero-text">
            <h1 className="homepage-title">Project Endangered</h1>
            <p className="homepage-description">
                Learn about four endangered animals and explore their habitats.
            </p>
        </div>
        <div className="hero-button">
            <TextButton onclick="document.getElementById('content-container').scrollIntoView()" type="light" text="Enter" colour="light" />
        </div>
    </div>
    );
  };
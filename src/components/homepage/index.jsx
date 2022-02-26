import "./styles.css";
import { TextButton } from "../text-button";

export const HomePage = (props) => {
    
    return (
      <div className="homepage-container">
          <div className="hero-container">
            <img
                className="hero-image"
                src="https://i.ibb.co/2FHZS6B/Poster-03.png"
                alt="hero image with four environments, wet prairies, arctic, grasslands, and tropical island."
            />
            <div className="hero-text">
                <h1 className="homepage-title">Project Endangered</h1>
                <p className="homepage-description">
                    Learn about four endangered animals and explore their habitats.
                </p>
            </div>
            <div className="hero-button">
                <TextButton type="light" text="Enter" colour="light" />
            </div>
          </div>
          <div className="homepage-content">
              <div className="homepage-polarbear">
                  <div className="content-left">

                  </div>
                  <div className="content-right">
                      <h1 className="homepage-animal-title">Polar Bear</h1>
                  </div>
              </div>
          </div>
      </div>
    );
  };
import "./styles.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { TextButton } from "../text-button";

export const HomePageAnimal = (props) => {
    const [placement, setPlacement] = useState(props.type);

    useEffect(() => {
    setPlacement(props.type);
    }, [props.type]);
    
    return (
        <div className="homepage-content">
            <div className="homepage-animal" id={props.bg}>
                {placement === "odd" && (
                    <div className="content-odd">
                        <div className="content-left">
                            <img
                                className="homepage-animal-image"
                                src={props.image}
                                alt={props.alt}
                            />
                        </div>
                        <div className="content-right">
                            <div className="homepage-animal-info">
                                <h1 className="homepage-animal-title">{props.title}</h1>
                                <p className="homepage-animal-text">{props.description}</p>
                                <div className="learn-more-button">
                                    <TextButton type="button-homepage" text="Learn More" colour="light" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {placement === "even" && (
                    <div className="content-even">
                        <div className="content-left">
                            <div className="homepage-animal-info">
                                <h1 className="homepage-animal-title">{props.title}</h1>
                                <p className="homepage-animal-text">{props.description}</p>
                                <div className="learn-more-button">
                                    <TextButton type="button-homepage" text="Learn More" colour="light" />
                                </div>
                            </div>
                        </div>
                        <div className="content-right">
                            <img
                                className="homepage-animal-image"
                                src={props.image}
                                alt={props.alt}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
  };

  HomePageAnimal.propTypes = {
    type: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };
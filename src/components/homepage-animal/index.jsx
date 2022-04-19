import "./styles.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { TextButton } from "../text-button";

export const HomePageAnimal = (props) => {
    //define constant variable
    const [placement, setPlacement] = useState(props.type);

    //set placement variable to inputted prop type
    useEffect(() => {
        setPlacement(props.type);
    }, [props.type]);
    
    return (
        <div className="homepage-content">
            <div className="homepage-animal" id={props.bg}>
                {/*specify component details when the component placement is odd*/}
                {placement === "odd" && (
                    <div className="content-odd">
                        {/*left content area contains image*/}
                        <div className="content-left">
                            <img
                                className="homepage-animal-image"
                                src={props.image}
                                alt={props.alt}
                            />
                        </div>
                        {/*right content area contains details and button*/}
                        <div className="content-right">
                            <div className="homepage-animal-info">
                                {/*animal name and description*/}
                                <h1 className="homepage-animal-title" tabindex="0" >{props.title}</h1>
                                <p className="homepage-animal-text" tabindex="0">{props.description}</p>
                                {/*button to launch into animal page*/}
                                <div className="learn-more-button">
                                    <TextButton 
                                        onClick={props.linkFn} //on click triggers function to link to new page
                                        type="button-homepage" 
                                        text="Learn More" 
                                        colour="light"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/*specify component details when the component placement is even*/}
                {placement === "even" && (
                    <div className="content-even">
                        {/*left content area contains details and button*/}
                        <div className="content-left">
                            <div className="homepage-animal-info">
                                {/*animal name and description*/}
                                <h1 className="homepage-animal-title" tabindex="0">{props.title}</h1>
                                <p className="homepage-animal-text" tabindex="0">{props.description}</p>
                                {/*button to launch into animal page*/}
                                <div className="learn-more-button">
                                    <TextButton 
                                        onClick={props.linkFn} //on click triggers function to link to new page
                                        type="button-homepage" 
                                        text="Learn More" 
                                        colour="light"
                                    />
                                </div>
                            </div>
                        </div>
                        {/*right content area contains image*/}
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
    alt: PropTypes.string.isRequired,
    linkFn: PropTypes.func.isRequired
  };
import "./styles.css";
import { HeroImage } from "../hero-image";
import { HomePageAnimal } from "../homepage-animal";
import {  useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

export const HomePage = (props) => {
    const history = useHistory(); 
    const scrollAnchor = useRef(null);

    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;

    return (
        <div className="homepage-container">
            <HeroImage
                scrollFn={() => {
                    scrollAnchor.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                }}
            />

            <div className="scroll-content"  ref={scrollAnchor}>
                <div className="homepage-animals-desktop">
                    <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Polar Bear"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/X20RgwQ/Vector.png"
                        alt="3d image of polar bears in habitat."
                        linkFn={() => {
                            history.push("/polar-bear");
                        }}
                    />

                    <HomePageAnimal
                        type="even"
                        bg="grey-bg"
                        title="Asian Elephant"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                        alt="3d image of Asian elephant in habitat."
                        linkFn={() => {
                            history.push("/forest-elephant");
                        }}
                    />

                    <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Whooping Crane"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/whooping-crane");
                        }}
                    />

                    <HomePageAnimal
                        type="even"
                        bg="grey-bg"
                        title="Green Sea Turtle"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/sea-turtle");
                        }}
                    />

                </div>

                <div className="homepage-animals-mobile">
                <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Polar Bear"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/X20RgwQ/Vector.png"
                        alt="3d image of polar bears in habitat."
                        linkFn={() => {
                            history.push("/polar-bear");
                        }}
                    />

                    <HomePageAnimal
                        type="odd"
                        bg="grey-bg"
                        title="Asian Elephant"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                        alt="3d image of Asian elephant in habitat."
                        linkFn={() => {
                            history.push("/forest-elephant");
                        }}
                    />

                    <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Whooping Crane"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/whooping-crane");
                        }}
                    />

                    <HomePageAnimal
                        type="odd"
                        bg="grey-bg"
                        title="Green Sea Turtle"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                        image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/sea-turtle");
                        }}
                    />

                </div>

            </div>
    
      </div>
    );
  };
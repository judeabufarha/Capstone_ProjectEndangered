import "./styles.css";
import { HeroImage } from "../hero-image";
import { HomePageAnimal } from "../homepage-animal";
import {  useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

export const HomePage = (props) => {
    //define constant variables
    const history = useHistory(); 
    const scrollAnchor = useRef(null);

    //allow for smooth scroll down page
    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;

    return (
        <div className="homepage-container">
            {/*use hero image component*/}
            <HeroImage
                //on click, scroll to first animal on page
                scrollFn={() => {
                    scrollAnchor.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                }}
            />

            <div className="scroll-content"  ref={scrollAnchor}>
                {/*display for desktop*/}
                <div className="homepage-animals-desktop">
                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Polar Bear"
                        description="The polar bear is a keystone species and at the top of the food chain, which makes them an apex predator. Because of this, they have an important role in balancing the Arctic food chain. Without polar bears, the entire Arctic ecosystem would be thrown out of balance. Unfortunately, the polar bear population is currently at risk due to climate change, which has caused the Arctic ice to melt."
                        image="https://i.ibb.co/X20RgwQ/Vector.png"
                        alt="3d image of polar bears in habitat."
                        linkFn={() => {
                            history.push("/polar-bear"); //on click, push to animal page
                        }}
                    />

                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="even"
                        bg="grey-bg"
                        title="Asian Elephant"
                        description="The Asian forest elephant is the largest land mammal on the continent of Asia. They live in dry to wet forests and grasslands. The biggest threat to this species is habitat loss and fragmentation. Due to human development, the homes of these elephants have been destroyed, putting the entire population at risk."
                        image="https://i.ibb.co/HgJyygS/Vector.png"
                        alt="3d image of Asian elephant in habitat."
                        linkFn={() => {
                            history.push("/asian-elephant"); //on click, push to animal page
                        }}
                    />

                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Whooping Crane"
                        description="The whooping crane is the tallest bird in North America. It is also one of the rarest. This bird has survived millions of years of change but became extremely endangered after European settlement in North America. In the mid-1900s, the population was down to only fifteen birds. Fortunately, through human intervention and conservation efforts, the whooping crane population is slowly growing."
                        image="https://i.ibb.co/3dLGy0s/Vector-38.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/whooping-crane"); //on click, push to animal page
                        }}
                    />

                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="even"
                        bg="grey-bg"
                        title="Green Sea Turtle"
                        description="The green sea turtle is one of the largest sea turtles and the only herbivore among the different sea turtle species. This turtle has been classified as endangered due to overharvesting, illegal trade, and habitat loss. Unfortunately, the green sea turtle plays a key role in its habitat, by maintaining the seagrass beds, and the loss of this animal would harm the entire ecosystem."
                        image="https://i.ibb.co/ssM24wh/Vector-39.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/sea-turtle"); //on click, push to animal page
                        }}
                    />

                </div>

                {/*display for mobile*/}
                <div className="homepage-animals-mobile">
                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Polar Bear"
                        description="The polar bear is a keystone species and at the top of the food chain, which makes them an apex predator. Because of this, they have an important role in balancing the Arctic food chain. Without polar bears, the entire Arctic ecosystem would be thrown out of balance. Unfortunately, the polar bear population is currently at risk due to climate change, which has caused the Arctic ice to melt."
                        image="https://i.ibb.co/X20RgwQ/Vector.png"
                        alt="3d image of polar bears in habitat."
                        linkFn={() => {
                            history.push("/polar-bear"); //on click, push to animal page
                        }}
                    />

                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="odd"
                        bg="grey-bg"
                        title="Asian Elephant"
                        description="The Asian forest elephant is the largest land mammal on the continent of Asia. They live in dry to wet forests and grasslands. The biggest threat to this species is habitat loss and fragmentation. Due to human development, the homes of these elephants have been destroyed, putting the entire population at risk. "
                        image="https://i.ibb.co/HgJyygS/Vector.png"
                        alt="3d image of Asian elephant in habitat."
                        linkFn={() => {
                            history.push("/asian-elephant"); //on click, push to animal page
                        }}
                    />

                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="odd"
                        bg="white-bg"
                        title="Whooping Crane"
                        description="The whooping crane is the tallest bird in North America. It is also one of the rarest. This bird has survived millions of years of change but became extremely endangered after European settlement in North America. In the mid-1900s, the population was down to only fifteen birds. Fortunately, through human intervention and conservation efforts, the whooping crane population is slowly growing."
                        image="https://i.ibb.co/3dLGy0s/Vector-38.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/whooping-crane"); //on click, push to animal page
                        }}
                    />

                    {/*use homepage animal component*/}
                    <HomePageAnimal
                        type="odd"
                        bg="grey-bg"
                        title="Green Sea Turtle"
                        description="The green sea turtle is one of the largest sea turtles and the only herbivore among the different sea turtle species. This turtle has been classified as endangered due to overharvesting, illegal trade, and habitat loss. Unfortunately, the green sea turtle plays a key role in its habitat, by maintaining the seagrass beds, and the loss of this animal would harm the entire ecosystem."
                        image="https://i.ibb.co/ssM24wh/Vector-39.png"
                        alt="3d image of whooping crane in habitat."
                        linkFn={() => {
                            history.push("/sea-turtle"); //on click, push to animal page
                        }}
                    />

                    {/*info image to rotate screen when in landscape*/}
                    <img className="rotate-img" src="https://i.ibb.co/rtQrTgT/Rotate-Landscape.png"/> 

                </div>

            </div>
    
      </div>
    );
  };
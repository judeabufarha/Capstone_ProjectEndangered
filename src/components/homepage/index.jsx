import "./styles.css";
import { TextButton } from "../text-button";
import { HeroImage } from "../hero-image";
import { HomePageAnimal } from "../homepage-animal";

export const HomePage = (props) => {
    
    return (
        <div className="homepage-container">
            <HeroImage></HeroImage>

            <div className="homepage-animals-desktop">
                <HomePageAnimal
                    type="odd"
                    bg="white-bg"
                    title="Polar Bear"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                    image="https://i.ibb.co/X20RgwQ/Vector.png"
                    alt="3d image of polar bears in habitat."
                />

                <HomePageAnimal
                    type="even"
                    bg="grey-bg"
                    title="Whooping Crane"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                    image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                    alt="3d image of whooping crane in habitat."
                />

                <HomePageAnimal
                    type="odd"
                    bg="white-bg"
                    title="Polar Bear"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                    image="https://i.ibb.co/X20RgwQ/Vector.png"
                    alt="3d image of polar bears in habitat."
                />

                <HomePageAnimal
                    type="even"
                    bg="grey-bg"
                    title="Whooping Crane"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                    image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                    alt="3d image of whooping crane in habitat."
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
                />

                <HomePageAnimal
                    type="odd"
                    bg="grey-bg"
                    title="Whooping Crane"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                    image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                    alt="3d image of whooping crane in habitat."
                />

                <HomePageAnimal
                    type="odd"
                    bg="white-bg"
                    title="Polar Bear"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                    image="https://i.ibb.co/X20RgwQ/Vector.png"
                    alt="3d image of polar bears in habitat."
                />

                <HomePageAnimal
                    type="odd"
                    bg="grey-bg"
                    title="Whooping Crane"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
                    image="https://i.ibb.co/YXc09z7/Vector-crane.png"
                    alt="3d image of whooping crane in habitat."
                />

            </div>
    
      </div>
    );
  };
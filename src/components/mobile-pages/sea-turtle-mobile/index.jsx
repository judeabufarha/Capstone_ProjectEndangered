import "./styles.css";
import { MobilePage01 } from "../page components/mobile-page-01";
import { MobilePage02 } from "../page components/mobile-page-02";
import { MobilePage03 } from "../page components/mobile-page-03";
import { MobilePage04 } from "../page components/mobile-page-04";
import { MobilePage05 } from "../page components/mobile-page-05";
import { MobilePage06SeaTurtle } from "../page components/mobile-page-06-sea-turtle";
import { MobilePage07 } from "../page components/mobile-page-07";
import { MobilePage08 } from "../page components/mobile-page-08";
import { MobilePage09 } from "../page components/mobile-page-09";
import { useEffect, useRef, useContext } from "react";
import { ToggleContext } from "../../../contexts/ToggleContext";
import { useSwipeable } from 'react-swipeable';

export const SeaTurtleMobile = (props) => {
    //define constant variables
    const { mobilePage, initializePage } = useContext(ToggleContext);
    const { pageState, setPageState, animal, AnimalDictionary, subMenuItems ,setsubMenuItems, templateMenu } = useContext(ToggleContext);

    var currentPage = mobilePage;

    //detect swipe
    const handlers = useSwipeable({
        onSwipedLeft: () => swipeLeft(), //call function for left swipe
        onSwipedRight: () => swipeRight(), //call function for right swipe
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    //on swipe left
    const swipeLeft = () => {
        //first check if on the last page
        if (currentPage != 8) {
            currentPage ++; //add to current page count
            initializePage(currentPage); //set current page in context
            console.log("swipe left" + currentPage);
            handleStepNavigation(currentPage); //update side menu
        }
    };

    //on swipe right
    const swipeRight = () => {
        //first check if on the first page
        if (currentPage != 0) {
            currentPage --; //remove from current page count
            initializePage(currentPage); //set current page in context
            console.log("swipe right" + currentPage);
            handleStepNavigation(currentPage); //update side menu
        }

    };

    //update side menu and pass current page to function
    const handleStepNavigation = (index) => {
        //define temporary page state
        const tmpState = { ...pageState };
        //set temporary state to index
        tmpState.currentStep = index;
        //set page state in context
        setPageState(tmpState)
    
        //define temporary sub menu items
        const tmpSubMenuItems = {...subMenuItems}

        //use temporary variable to determine what sub menu items are displayed in side menu
        tmpSubMenuItems.animals[AnimalDictionary[animal]] = [...templateMenu];
        tmpSubMenuItems.animals[AnimalDictionary[animal]][index].isEnabled = true;
        setsubMenuItems({...tmpSubMenuItems})
    };

    //define all refs
    const page1 = useRef(null);
    const page2 = useRef(null);
    const page3 = useRef(null);
    const page4 = useRef(null);
    const page5 = useRef(null);
    const page6 = useRef(null);
    const page7 = useRef(null);
    const page8 = useRef(null);
    const page9 = useRef(null);

    //use current page value to determine what page is displayed
    useEffect(() => {
        if (currentPage == 0) {
            page1.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 1
        }

        else if (currentPage == 1) {
            page2.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 2
        }

        else if (currentPage == 2) {
            page3.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 3
        }

        else if (currentPage == 3) {
            page4.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 4
        }

        else if (currentPage == 4) {
            page5.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 5
        }

        else if (currentPage == 5) {
            page6.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 6
        }

        else if (currentPage == 6) {
            page7.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 7
        }

        else if (currentPage == 7) {
            page8.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 8
        }

        else if (currentPage == 8) {
            page9.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scroll to page 9
        }
    }, [currentPage]);

    return (

        <div className="sea-turtle-mobile-container" {...handlers}>
            {/*use mobile page component 1 and pass animal specific props*/}
            <div className="mobile-page page 01" ref={page1}>
                <MobilePage01 
                    title="Green Sea Turtle" 
                    image="https://i.ibb.co/VTXvrh7/01-The-Sea-Turtle.png" 
                    alt="Illustration of green sea turtle in ocean."
                />
            </div>

            <div className="mobile-page page02" ref={page2}>
                {/*use mobile page component 2 and pass animal specific props*/}
                <MobilePage02
                    name="Chelonia Mydas"
                    location="Oceans"
                    population="85,000 - 90,000"
                    lifespan="60 years"
                />
            </div>

            <div className="mobile-page page03" ref={page3}>
                {/*use mobile page component 3 and pass animal specific props*/}
                <MobilePage03
                    title="Green Sea Turtle"
                    para1="The green sea turtle plays an important role in the ocean’s ecosystem. Their job is to be the lawnmowers of the ocean and eat the seagrass on the ocean floor. By maintaining the seagrass beds, the plants stay healthy and productive. This is important because many animals rely on seagrass beds for their homes. When green sea turtles eat seagrass, they quickly digest and release it, which provides many nutrients to the plants and animals in the ecosystem. Without green sea turtles, the health of their ecosystem would be put at risk."
                    para2="Green sea turtles also play an important role in oceans around the world. This is because they migrate large distances with different organisms living on their shells. Because of this, they help to create and maintain diverse oceans."
                    image1="https://i.ibb.co/BfvmmB9/Vector1.png"
                    alt1="Underwater illustration of sea grass."
                    image2="https://i.ibb.co/PYttZW4/Vector2.png"
                    alt2="Green sea turtle on beach illustration."
                    image3="https://i.ibb.co/pydpxkM/Vector3.png"
                    alt3="Underwater illustration of lobster, shrimp, and fish."
                />
            </div>

            <div className="mobile-page page04" ref={page4}>
                {/*use mobile page component 4 and pass animal specific props*/}
                <MobilePage04
                    status="Endangered"
                    image="https://i.ibb.co/g91dSHL/Vector.png"
                    alt="Ocean environment illustration."
                    text1="The current status of the green sea turtle population is endangered. This means that they face a very high risk of extinction in the wild. Green sea turtles are endangered because of overharvesting and habitat loss on land and in water."
                    text2="The green sea turtle depends on beaches to lay their eggs, and seagrass beds in the ocean for food. However, coastal development has destroyed the green sea turtle’s nesting grounds and polluted the seagrass beds. Now, green sea turtles struggle to eat and reproduce."
                    text3="Because of extreme harvesting, the entire green sea turtle population is at even greater risk. Thousands of green sea turtles are hunted and killed each year. Their eggs are also harvested by humans for trade, which makes it even harder for the population to grow."
                />
            </div>

            <div className="mobile-page page05" ref={page5}>
                {/*use mobile page component 5 and pass animal specific props*/}
                <MobilePage05
                    animal="seaTurtle"
                    text="Explore the population of green sea turtles in different areas of the world."
                    map="https://i.ibb.co/t86F749/Frame-3.png"
                    alt="Map of the world."
                />
            </div>

            <div className="mobile-page page06" ref={page6}>
                {/*use mobile page component 6 for sea turtle and pass animal specific props*/}
                <MobilePage06SeaTurtle
                    animal="whoopingCrane"
                    image="https://i.ibb.co/dGpJpF9/06-History.png"
                    alt="Ocean environment illustration."
                />
            </div>

            <div className="mobile-page page07" ref={page7}>
                {/*use mobile page component 7 and pass animal specific props*/}
                <MobilePage07
                    animal="seaTurtle"
                    image1="https://i.ibb.co/sjS56Yv/07-Future-Positive.png"
                    image2="https://i.ibb.co/HGTKLh3/07-Future-Negative.png"
                    alt="Ocean environment illustration with green sea turtles, shrimp, lobsters, and fish."
                    text="The population of green sea turtles is at great risk if there is no human intervention. The uncontrolled coastal building has destroyed many beaches, and this is affecting the green sea turtle’s environment. As the building continues, the ocean environment becomes more polluted. However, there are two possible future outcomes. Reducing coastal building and protecting the green sea turtle’s habitat would significantly help save the population and ocean environment. If we change our ways, the green sea turtle’s home could be saved, which would help regrow the population."
                    colour1="seaTurtle1"
                    colour2="seaTurtle1"
                />
            </div>

            <div className="mobile-page page08" ref={page8}>
                {/*use mobile page component 8 and pass animal specific props*/}
                <MobilePage08
                    animal="seaTurtle"
                    text="Without global change, the green sea turtle is in danger of extinction in the near future. It is up to us to take action in order to save the green sea turtle species. There are many ways each of us can help save the green sea turtles, including volunteering, recycling, and spreading awareness.  If you would like to learn more about how you can help the green sea turtle population, take a look at the conservation efforts below."
                    blob1="https://i.ibb.co/Xp0kHBt/Vector1.png"
                    title1="Sea Turtle Conservancy"
                    text1="“The Sea Turtle Conservancy is the oldest and most accomplished sea turtle organization in the world and is committed to research and conservation initiatives, with over 60 years of experience.”"
                    link1="https://conserveturtles.org/"
                    blob2="https://i.ibb.co/pLmvmW4/Vector2.png"
                    title2="Turtle Foundation"
                    text2="“The Turtle Foundation is an international initiative for the protection of the endangered sea turtles and their habitats, by preventing hunting, coastal building, and ocean pollution.”"
                    link2="https://www.turtle-foundation.org/en/"
                    blob3="https://i.ibb.co/LDFQ6rj/Vector3.png"
                    title3="World Wildlife Fund"
                    text3="“WWF works around the world to establish marine protected areas both on land and in the ocean, reduce turtle bycatch, and educate local communities on over-harvesting and illegal trade.”"
                    link3="https://www.worldwildlife.org/species/green-turtle"
                    colour1="button-peach"
                    colour2="button-peach"
                    colour3="button-peach"
                />
            </div>

            <div className="mobile-page page09" ref={page9}>
                {/*use mobile page component 9 and pass animal specific props*/}
                <MobilePage09
                    text="Launch into the green sea turtles’s habitat to explore their home and play activities to learn more about them."
                    image="https://i.ibb.co/X4kvhWp/Vector.png"
                    alt="Image of 3D ocean environment."
                    button="button-peach"
                    link="https://project-endangered-experience.com/public/ocean/"
                />
            </div>

            {/*info image to rotate screen when in landscape*/}
            <img className="rotate-img" src="https://i.ibb.co/rtQrTgT/Rotate-Landscape.png"/>
        </div>
    );
  };
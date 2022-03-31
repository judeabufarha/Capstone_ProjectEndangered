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
    const { mobilePage, initializePage  } = useContext(ToggleContext);
    const { pageState, setPageState, animal, AnimalDictionary, subMenuItems ,setsubMenuItems, templateMenu } = useContext(ToggleContext);

    var currentPage = mobilePage;

    const handlers = useSwipeable({
        onSwipedLeft: () => swipeLeft(),
        onSwipedRight: () => swipeRight(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const swipeLeft = () => {
        if (currentPage != 8) {
            currentPage ++;
            initializePage(currentPage);
            console.log("swipe left" + currentPage);
            handleStepNavigation(currentPage);
        }
    };

    const swipeRight = () => {
        if (currentPage != 0) {
            currentPage --;
            initializePage(currentPage);
            console.log("swipe right" + currentPage);
            handleStepNavigation(currentPage);
        }

    };

    const handleStepNavigation = (index) => {
        const tmpState = { ...pageState };
        tmpState.currentStep = index;
        setPageState(tmpState)
    
        const tmpSubMenuItems = {...subMenuItems}
        tmpSubMenuItems.animals[AnimalDictionary[animal]] = [...templateMenu];
        tmpSubMenuItems.animals[AnimalDictionary[animal]][index].isEnabled = true;
        setsubMenuItems({...tmpSubMenuItems})
    };

    const page1 = useRef(null);
    const page2 = useRef(null);
    const page3 = useRef(null);
    const page4 = useRef(null);
    const page5 = useRef(null);
    const page6 = useRef(null);
    const page7 = useRef(null);
    const page8 = useRef(null);
    const page9 = useRef(null);

    useEffect(() => {
        if (currentPage == 0) {
            page1.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 1) {
            page2.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 2) {
            page3.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 3) {
            page4.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 4) {
            page5.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 5) {
            page6.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 6) {
            page7.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 7) {
            page8.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }

        else if (currentPage == 8) {
            page9.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    }, [currentPage]);

    return (

        <div className="sea-turtle-mobile-container" {...handlers}>
            <div className="mobile-page page 01" ref={page1}>
                <MobilePage01 
                    title="Green Sea Turtle" 
                    image="https://i.ibb.co/VTXvrh7/01-The-Sea-Turtle.png" 
                    alt="Illustration of green sea turtle in ocean."
                />
            </div>

            <div className="mobile-page page02" ref={page2}>
                <MobilePage02
                    name="Chelonia Mydas"
                    location="Oceans"
                    population="85,000 - 90,000"
                    lifespan="60 years"
                />
            </div>

            <div className="mobile-page page03" ref={page3}>
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
                <MobilePage05
                    animal="seaTurtle"
                    text="Explore the population of green sea turtles in different areas of the world."
                    map="https://i.ibb.co/t86F749/Frame-3.png"
                    alt="Map of the world."
                />
            </div>

            <div className="mobile-page page06" ref={page6}>
                <MobilePage06SeaTurtle
                    animal="whoopingCrane"
                    image="https://i.ibb.co/dGpJpF9/06-History.png"
                    alt="Ocean environment illustration."
                />
            </div>

            <div className="mobile-page page07" ref={page7}>
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
                <MobilePage09
                    text="Launch into the green sea turtles’s habitat to explore their home and play activities to learn more about them."
                    image="https://i.ibb.co/X4kvhWp/Vector.png"
                    alt="Image of 3D ocean environment."
                    button="button-peach"
                    link="https://project-endangered-experience.com/public/ocean/"
                />
            </div>

            <img className="rotate-img" src="https://i.ibb.co/rtQrTgT/Rotate-Landscape.png"/>
        </div>
    );
  };
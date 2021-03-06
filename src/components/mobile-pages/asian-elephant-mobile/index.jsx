import "./styles.css";
import { MobilePage01 } from "../page components/mobile-page-01";
import { MobilePage02 } from "../page components/mobile-page-02";
import { MobilePage03 } from "../page components/mobile-page-03";
import { MobilePage04 } from "../page components/mobile-page-04";
import { MobilePage05 } from "../page components/mobile-page-05";
import { MobilePage06AsianElephant } from "../page components/mobile-page-06-asian-elephant";
import { MobilePage07 } from "../page components/mobile-page-07";
import { MobilePage08 } from "../page components/mobile-page-08";
import { MobilePage09 } from "../page components/mobile-page-09";
import { useEffect, useRef, useContext } from "react";
import { ToggleContext } from "../../../contexts/ToggleContext";
import { useSwipeable } from 'react-swipeable';

export const AsianElephantMobile = (props) => {
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
        <div className="asian-elephant-mobile-container" {...handlers}>
            <div className="mobile-page page 01" ref={page1}>
                {/*use mobile page component 1 and pass animal specific props*/}
                <MobilePage01 
                    title="Asian Elephant" 
                    image="https://i.ibb.co/c22ftyx/01.png" 
                    alt="Illustration of Asian elephant in grass."
                />
            </div>

            <div className="mobile-page page02" ref={page2}>
                {/*use mobile page component 2 and pass animal specific props*/}
                <MobilePage02
                    name="Elephas Maximus"
                    location="Asia"
                    population="20,000 - 40,000"
                    lifespan="48 years"
                />
            </div>

            <div className="mobile-page page03" ref={page3}>
                {/*use mobile page component 3 and pass animal specific props*/}
                <MobilePage03
                    title="Asian Elephant"
                    para1="The Asian elephant plays an important role in the forest and grasslands ecosystem. This is because they help to maintain the health of these habitats. Asian elephants eat many different plants, and as they travel around, their dung is dropped, which is filled with many different seeds. They help spread plants around the environment, which helps to keep the ecosystem diverse. This is important because it keeps the habitat healthy which benefits the many animals that live there."
                    para2="Asian elephants also play an important role in maintaining the grasslands. The grass in this environment can get very long, which makes it hard for small animals to travel through. Because of the Asian elephant???s large size, they are able to create paths in the grass for smaller animals."
                    image1="https://i.ibb.co/HP4HsFP/Vector1.png"
                    alt1="Grass illustration."
                    image2="https://i.ibb.co/pbJ2s1f/Vector2.png"
                    alt2="Asian elephant illustration."
                    image3="https://i.ibb.co/02rtR2H/Vector3.png"
                    alt3="Path in grass illustration."
                />
            </div>

            <div className="mobile-page page04" ref={page4}>
                {/*use mobile page component 4 and pass animal specific props*/}
                <MobilePage04
                    status="Endangered"
                    image="https://i.ibb.co/pQyPS6p/Vector.png"
                    alt="Asian grasslands environment illustration."
                    text1="The current status of the Asian elephant population is endangered. This means that they face a very high risk of extinction in the wild. Asian elephants are endangered because of habitat loss, fragmentation, poaching, and illegal trade."
                    text2="The biggest threat Asian elephants face is habitat loss and fragmentation. Because of human developments, including homes, plantations, factories, and transportation the Asian elephant's habitat has been destroyed. This has caused the population to be split into small groups, causing fragmentation, which puts them at great risk."
                    text3="Because of habitat loss and fragmentation, the Asian elephant population can no longer access important feeding areas and migratory routes. This is because they are blocked by human developments.
                    "
                />
            </div>

            <div className="mobile-page page05" ref={page5}>
                {/*use mobile page component 5 and pass animal specific props*/}
                <MobilePage05
                    animal="asianElephant"
                    text="Explore the population of Asian elephants in different areas of the world."
                    map="https://i.ibb.co/RHHwGVp/Map.png"
                    alt="Map of the world."
                />
            </div>

            <div className="mobile-page page06" ref={page6}>
                {/*use mobile page component 6 for asian elephant and pass animal specific props*/}
                <MobilePage06AsianElephant
                    animal="asianElephant"
                    image="https://i.ibb.co/mXYxC5d/06-History.png"
                    alt="Asian grasslands environment illustration."
                />
            </div>

            <div className="mobile-page page07" ref={page7}>
                {/*use mobile page component 7 and pass animal specific props*/}
                <MobilePage07
                    animal="asianElephant"
                    image1="https://i.ibb.co/BNn6mSf/07-Future-Positive.png"
                    image2="https://i.ibb.co/5cTtjjJ/07-Future-Negative.png"
                    alt="Asian grasslands environment illustration with elephants."
                    text="The population of Asian elephants is at great risk if there is no human intervention. Uncontrolled human developments in the Asian elephant???s habitat have put the population in danger. As the developments continue, the population becomes smaller and more fragmented. However, there are two possible future outcomes. Reducing industrial developments and protecting the Asian elephant???s habitat would significantly help save the population and their environment. If we change our ways, the Asian elephant's home could be saved, which would help the population recover."
                    colour1="asianElephant1"
                    colour2="asianElephant2"
                />
            </div>

            <div className="mobile-page page08" ref={page8}>
                {/*use mobile page component 8 and pass animal specific props*/}
                <MobilePage08
                    animal="asianElephant"
                    text="Without change, the Asian elephant is in danger of extinction in the near future. It is up to us to take action in order to save the Asian elephant species. Many people are not aware of how humans are hurting the population, and you can help by spreading the word and sharing your knowledge. If you would like to learn more about how you can help the Asian elephant population, take a look at the conservation efforts below."
                    blob1="https://i.ibb.co/Gc9tBDn/Vector1.png"
                    title1="Asian Elephant Support"
                    text1="???Asian Elephant Support is dedicated to the care and conservation of Asian elephants in their range countries, and to the people whose lives are intertwined with this magnificent and endangered species.???"
                    link1="https://www.asianelephantsupport.org/"
                    blob2="https://i.ibb.co/jDMd0Jz/Vector2.png"
                    title2="Elephant Family"
                    text2="???Elephant Family works with home grown, in-country conservation experts o protect Asia???s magnificent wildlife through conservation, to enable successful coexistence between all living things.???"
                    link2="https://elephant-family.org/"
                    blob3="https://i.ibb.co/3dVnBrT/Vector3.png"
                    title3="Save the Asian Elephants"
                    text3="???Save The Asian Elephants works to end the terrible cruelty and brutal conditions suffered by the wondrous and ancient species that is the Asian elephant to help restore the population.???"
                    link3="https://stae.org/"
                    colour1="button-pink"
                    colour2="button-pink"
                    colour3="button-pink"
                />
            </div>

            <div className="mobile-page page09" ref={page9}>
                {/*use mobile page component 9 and pass animal specific props*/}
                <MobilePage09
                    text="Launch into the Asian elephants???s habitat to explore their home and play activities to learn more about them."
                    image="https://i.ibb.co/jwm1hfw/Vector.png"
                    alt="Image of 3D Asian grasslands environment."
                    button="button-pink"
                    link="https://project-endangered-experience.com/public/grassland/"
                />
            </div>

            {/*info image to rotate screen when in landscape*/}
            <img className="rotate-img" src="https://i.ibb.co/rtQrTgT/Rotate-Landscape.png"/>
        </div>
    );
  };
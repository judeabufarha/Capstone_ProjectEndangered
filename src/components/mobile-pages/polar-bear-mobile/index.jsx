import "./styles.css";
import { MobilePage01 } from "../page components/mobile-page-01";
import { MobilePage02 } from "../page components/mobile-page-02";
import { MobilePage03 } from "../page components/mobile-page-03";
import { MobilePage04 } from "../page components/mobile-page-04";
import { MobilePage05 } from "../page components/mobile-page-05";
import { MobilePage06PolarBear } from "../page components/mobile-page-06-polar-bear";
import { MobilePage07 } from "../page components/mobile-page-07";
import { MobilePage08 } from "../page components/mobile-page-08";
import { MobilePage09 } from "../page components/mobile-page-09";
import { useEffect, useRef, useContext } from "react";
import { ToggleContext } from "../../../contexts/ToggleContext";
import { useSwipeable } from 'react-swipeable';

export const PolarBearMobile = (props) => {
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
        <div className="polar-bear-mobile-container" {...handlers}>
            <div className="mobile-page page 01" ref={page1}>
                {/*use mobile page component 1 and pass animal specific props*/}
                <MobilePage01 
                    title="Polar Bear" 
                    image="https://i.ibb.co/37WjKvs/01-The-Polar-Bear.png" 
                    alt="Illustration of polar bear on ice."
                />
            </div>

            <div className="mobile-page page02" ref={page2}>
                {/*use mobile page component 2 and pass animal specific props*/}
                <MobilePage02
                    name="Ursus Maritimus"
                    location="Arctic Circle"
                    population="22,000 - 31,000"
                    lifespan="25 years"
                />
            </div>

            <div className="mobile-page page03" ref={page3}>
                {/*use mobile page component 3 and pass animal specific props*/}
                <MobilePage03
                    title="Polar Bear"
                    para1="The polar bear is a keystone species, which means they have an important role in balancing the Arctic ecosystem.  They are also at the top of the food chain, which makes them an apex predator. Without polar bears, the population of their prey would begin to grow, and the entire Arctic ecosystem would be thrown out of balance. Because the polar bear is a keystone species, they are a reflection of the health of their ecosystem. If the keystone species is endangered, the entire ecosystem is put at risk."
                    para2="Polar bears also play an important part in the cultures and economies of indigenous Arctic peoples. Because of the decline in the polar bear population, indigenous Arctic peoples have experienced significant cultural changes and economic issues."
                    image1="https://i.ibb.co/RQfM4ck/fish.png"
                    alt1="Arctic cod illustration."
                    image2="https://i.ibb.co/rGz54Tj/seal.png"
                    alt2="Seal illustration."
                    image3="https://i.ibb.co/kq9NHvj/polar.png"
                    alt3="Polar bear illustration."
                />
            </div>

            <div className="mobile-page page04" ref={page4}>
                {/*use mobile page component 4 and pass animal specific props*/}
                <MobilePage04
                    status="Vulnerable"
                    image="https://i.ibb.co/zxn68hP/Vector.png"
                    alt="Arctic environment illustration."
                    text1="The current status of the polar bear population is vulnerable. This means that they face a high risk of extinction in the wild. Polar bears are endangered because of the effects climate change has on the Arctic, which is where polar bears live."
                    text2="Climate change has caused the Arctic to heat up twice as fast as it used to. This makes it harder for polar bears to hunt seals, rest, and breed because they use the ice to do these things. Now that there is less ice, the polar bears have trouble finding food, and this can lead to malnutrition and starvation."
                    text3="Because of being underfed, it also makes it harder for polar bears to reproduce. Even when a polar bear is able to have cubs, many die due to a lack of food or because their mother was malnourished. This has caused extinction in certain areas of the Arctic."
                />
            </div>

            <div className="mobile-page page05" ref={page5}>
                {/*use mobile page component 5 and pass animal specific props*/}
                <MobilePage05
                    animal="polarBear"
                    text="Explore the population of polar bears in different areas of the world."
                    map="https://i.ibb.co/hF7N1cF/Map.png"
                    alt="Map of the world."
                />
            </div>

            <div className="mobile-page page06" ref={page6}>
                {/*use mobile page component 6 for polar bear and pass animal specific props*/}
                <MobilePage06PolarBear
                    animal="polarBear"
                    image="https://i.ibb.co/x3Y69ZC/06-History.png"
                    alt="Arctic environment illustration."
                />
            </div>

            <div className="mobile-page page07" ref={page7}>
                {/*use mobile page component 7 and pass animal specific props*/}
                <MobilePage07
                    animal="polarBear"
                    image1="https://i.ibb.co/6ynLGGX/07-Future-Positive.png"
                    image2="https://i.ibb.co/Pz3rpD9/07-Future-Negative.png"
                    alt="Arctic environment illustration with polar bears and seals."
                    text="Scientists predict that polar bears will be extinct by the end of the century if greenhouse gas emissions continue to increase. Greenhouse gas emissions have caused climate change on our planet, and this is affecting the polar bears??? environment. As the Arctic becomes warmer, the ice begins to melt. However, there are two possible future outcomes. Reducing greenhouse gas emissions globally would significantly help save the arctic environment. If we change our ways, the arctic could be saved, and polar bears would be able to feed and nourish themselves, which would help regrow the population."
                    colour1="polarBear1"
                    colour2="polarBear1"
                />
            </div>

            <div className="mobile-page page08" ref={page8}>
                {/*use mobile page component 8 and pass animal specific props*/}
                <MobilePage08
                    animal="polarBear"
                    text="Without global change, the polar bear will be extinct by 2100. It is up to us to change our ways in order to save the polar bear species. There are many ways each of us can help save the polar bears, including volunteering, fighting climate change, and raising money for conservation efforts. If you would like to learn more about how you can help the polar bear population, take a look at the conservation efforts below."
                    blob1="https://i.ibb.co/9cKpF7q/blob1.png"
                    title1="Polar Bears International"
                    text1="???Polar Bears International is made up of a passionate team of conservationists, scientists, and volunteers???working to secure a future for polar bears across the Arctic.???"
                    link1="https://polarbearsinternational.org/"
                    blob2="https://i.ibb.co/TB5HGCp/Vector.png"
                    title2="World Wildlife Fund"
                    text2="???Polar bears have long been a focus in WWF???s on-the-ground research and conservation projects in the Arctic, going back to 1972 ??? and climate change is a primary focus of our global conservation efforts.???"
                    link2="https://arcticwwf.org/species/polar-bear/"
                    blob3="https://i.ibb.co/gFSNnSB/Vector.png"
                    title3="Canadian Polar Bear Habitat"
                    text3="???The Canadian Polar Bear Habitat is committed to advancing the conservation of wild polar bears and elevating the standard of care for polar bears in human care through research and education.???"
                    link3="https://canadianpolarbearhabitat.com/"
                    colour1="button-orange"
                    colour2="button-orange"
                    colour3="button-orange"
                />
            </div>

            <div className="mobile-page page09" ref={page9}>
                {/*use mobile page component 9 and pass animal specific props*/}
                <MobilePage09
                    text="Launch into the polar bear???s habitat to explore their home and play activities to learn more about them."
                    image="https://i.ibb.co/Q6wzNSn/Vector.png"
                    alt="Image of 3D Arctic environment."
                    button="button-orange"
                    link="https://project-endangered-experience.com/public/arctic/"
                />
            </div>
            
            {/*info image to rotate screen when in landscape*/}
            <img className="rotate-img" src="https://i.ibb.co/rtQrTgT/Rotate-Landscape.png"/>
        </div>
    );
  };
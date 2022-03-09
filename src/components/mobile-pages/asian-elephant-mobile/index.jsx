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
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect, useRef } from "react";

export const AsianElephantMobile = (props) => {
    const scrollAnchor = useRef(null);

    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;

    //useEffect(() => {
        //scrollAnchor.current.scrollIntoView({block: "start", inline: "nearest"});
      //}, [scrollAnchor]);

    return (

        <div className="asian-elephant-mobile-container">
            <div className="mobile-page page 01">
                <MobilePage01 
                    title="Asian Elephant" 
                    image="https://i.ibb.co/c22ftyx/01.png" 
                    alt="Illustration of Asian elephant in grass."
                />
            </div>

            <div className="mobile-page page02">
                <MobilePage02
                    name="Elephas Maximus"
                    location="Asia"
                    population="20,000 - 40,000"
                    lifespan="48 years"
                />
            </div>

            <div className="mobile-page page03">
                <MobilePage03
                    title="Asian Elephant"
                    para1="The Asian elephant plays an important role in the forest and grasslands ecosystem. This is because they help to maintain the health of these habitats. Asian elephants eat many different plants, and as they travel around their dung is dropped, which is filled with many different seeds. They help spread plants around the environment, which helps to keep the ecosystem diverse. This is important because it keeps the habitat healthy which benefits the many animals that live there."
                    para2="Asian elephants also play an important role in maintaining the grasslands. The grass in this environment can get very long, which makes it hard for small animals to travel through. Because of the Asian elephant’s large size, they are able to create paths in the grass for smaller animals."
                    image1="https://i.ibb.co/HP4HsFP/Vector1.png"
                    alt1="Grass illustration."
                    image2="https://i.ibb.co/pbJ2s1f/Vector2.png"
                    alt2="Asian elephant illustration."
                    image3="https://i.ibb.co/02rtR2H/Vector3.png"
                    alt3="Path in grass illustration."
                />
            </div>

            <div className="mobile-page page04" ref={scrollAnchor}>
                <MobilePage04
                    status="Endangered"
                    image="https://i.ibb.co/pQyPS6p/Vector.png"
                    alt="Asian grasslands environment illustration."
                    text1="The current status of the Asian elephant population is endangered. This means that they face a very high risk of extinction in the wild. Asian elephants are endangered because of habitat loss, fragmentation, poaching, and illegal trade."
                    text2="The biggest threat Asian elephants face is habitat loss and fragmentation. Because of human developments, including homes, plantations, factories, and transportation the Asian elephant's habitat has been destroyed. This has caused the population to be split into small groups, putting them at great risk."
                    text3="Because of habitat loss and fragmentation, the Asian elephant population can no longer access important feeding areas and migratory routes. This is because they are blocked by human developments."
                />
            </div>

            <div className="mobile-page page05">
                <MobilePage05
                    animal="asianElephant"
                    text="Explore the population of Asian elephants in different areas of the world."
                    map="https://i.ibb.co/RHHwGVp/Map.png"
                    alt="Map of the world."
                />
            </div>

            <div className="mobile-page page06">
                <MobilePage06AsianElephant
                    animal="asianElephant"
                    image="https://i.ibb.co/mXYxC5d/06-History.png"
                    alt="Asian grasslands environment illustration."
                />
            </div>

            <div className="mobile-page page07">
                <MobilePage07
                    animal="asianElephant"
                    image1="https://i.ibb.co/BNn6mSf/07-Future-Positive.png"
                    image2="https://i.ibb.co/5cTtjjJ/07-Future-Negative.png"
                    alt="Asian grasslands environment illustration with elephants."
                    text="The population of Asian elephants is at great risk if there is no human intervention. Uncontrolled human developments in the Asian elephant’s habitat have put the population in danger. As the developments continue, the population becomes smaller and more fragmented. However, there are two possible future outcomes. Reducing industrial developments and protecting the Asian elephant’s habitat would significantly help say the population and their environment. If we change our ways, the Asian elephant's home could be saved, which would help the population recover."
                    colour1="asianElephant1"
                    colour2="asianElephant2"
                />
            </div>

            <div className="mobile-page page08">
                <MobilePage08
                    animal="asianElephant"
                    text="Without change, the Asian elephant is in danger of extinction in the near future. It is up to us to take action in order to save the Asian elephant species. Many people are not aware of how humans are hurting the population, and you can help by spreading the word and sharing your knowledge. If you would like to learn more about how you can help the Asian elephant population, take a look at the conservation efforts below."
                    blob1="https://i.ibb.co/Gc9tBDn/Vector1.png"
                    title1="Asian Elephant Support"
                    text1="“Asian Elephant Support is dedicated to the care and conservation of Asian elephants, and to the people whose lives are intertwined with this magnificent and endangered species.”"
                    link1="https://www.asianelephantsupport.org/"
                    blob2="https://i.ibb.co/jDMd0Jz/Vector2.png"
                    title2="Elephant Family"
                    text2="“Elephant Family works with home grown, in-country conservation experts o protect Asia’s magnificent wildlife through conservation, to enable successful coexistence between all living things.”"
                    link2="https://elephant-family.org/"
                    blob3="https://i.ibb.co/3dVnBrT/Vector3.png"
                    title3="Save the Asian Elephants"
                    text3="“Save The Asian Elephants works to end the terrible cruelty and brutal conditions suffered by the wondrous and ancient species that is the Asian elephant to help restore the population.”"
                    link3="https://stae.org/"
                />
            </div>

            <div className="mobile-page page09">
                <MobilePage09
                    text="Launch into the Asian elephants’s habitat to explore their home and play activities to learn more about them."
                    image="https://i.ibb.co/jwm1hfw/Vector.png"
                    alt="Image of 3D Asian grasslands environment."
                    button="button-pink"
                    link="https://vickeychee.github.io/Project_Endangered/public/arctic/"
                />
            </div>
        </div>
    );
  };
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
                <MobilePage06PolarBear
                    animal="polarBear"
                    image="https://i.ibb.co/84wfNjw/06-History.png"
                    alt="Arctic environment illustration."
                />
            </div>

            <div className="mobile-page page07">
                <MobilePage07
                    animal="polarBear"
                    image1="https://i.ibb.co/1K1DvwS/07-Future.png"
                    image2="https://i.ibb.co/3sr8BXT/07-Future-negative.png"
                    alt="Arctic environment illustration with polar bears and seals."
                    text="Scientists predict that polar bears will be extinct by the end of the century if greenhouse gas emissions continue to increase. Greenhouse gas emissions have caused climate change on our planet, and this is affecting the polar bears’ environment. As the Arctic becomes warmer, the ice begins to melt. However, there are two possible future outcomes. Reducing greenhouse gas emissions globally would significantly help save the arctic environment. If we change our ways, the Arctic could be saved, and polar bears would be able to feed and nourish themselves, which would help regrow the population."
                    colour1="polarBear1"
                    colour2="polarBear1"
                />
            </div>

            <div className="mobile-page page08">
                <MobilePage08
                    animal="polarBear"
                    text="Without global change the polar bear will be extinct by 2100. It is up to us to change our ways in order to save the polar bear species. There are many ways each of us can help save the polar bears, including volunteering, fighting climate change, and raising money for conservation efforts. If you would like to learn more about how you can help the polar bear population, take a look at the conservation efforts below."
                    blob1="https://i.ibb.co/9cKpF7q/blob1.png"
                    title1="Polar Bears International"
                    text1="“Polar Bears International is made up of a passionate team of conservationists, scientists, and volunteers—working to secure a future for polar bears across the Arctic.”"
                    link1="https://polarbearsinternational.org/"
                    blob2="https://i.ibb.co/TB5HGCp/Vector.png"
                    title2="World Wildlife Fund"
                    text2="“Polar bears have long been a focus in WWF’s on-the-ground research and conservation projects in the Arctic, going back to 1972 – and climate change is a primary focus of our global conservation efforts.”"
                    link2="https://arcticwwf.org/species/polar-bear/"
                    blob3="https://i.ibb.co/gFSNnSB/Vector.png"
                    title3="Canadian Polar Bear Habitat"
                    text3="“The Canadian Polar Bear Habitat is committed to advancing the conservation of wild polar bears and elevating the standard of care for polar bears in human care through research and education.”"
                    link3="https://canadianpolarbearhabitat.com/"
                />
            </div>

            <div className="mobile-page page09">
                <MobilePage09
                    text="Launch into the polar bear’s habitat to explore their home and play activities to learn more about them."
                    image="https://i.ibb.co/Q6wzNSn/Vector.png"
                    alt="Image of 3D Arctic environment."
                    button="button-orange"
                    link="https://vickeychee.github.io/Project_Endangered/public/arctic/"
                />
            </div>
        </div>
    );
  };
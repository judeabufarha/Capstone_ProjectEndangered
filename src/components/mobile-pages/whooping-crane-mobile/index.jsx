import "./styles.css";
import { MobilePage01 } from "../page components/mobile-page-01";
import { MobilePage02 } from "../page components/mobile-page-02";
import { MobilePage03 } from "../page components/mobile-page-03";
import { MobilePage04 } from "../page components/mobile-page-04";
import { MobilePage05 } from "../page components/mobile-page-05";
import { MobilePage06WhoopingCrane } from "../page components/mobile-page-06-whooping-crane";
import { MobilePage07 } from "../page components/mobile-page-07";
import { MobilePage08 } from "../page components/mobile-page-08";
import { MobilePage09 } from "../page components/mobile-page-09";
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect, useRef } from "react";

export const WhoopingCraneMobile = (props) => {
    const scrollAnchor = useRef(null);

    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;

    //useEffect(() => {
        //scrollAnchor.current.scrollIntoView({block: "start", inline: "nearest"});
      //}, [scrollAnchor]);

    return (

        <div className="whooping-crane-mobile-container">
            <div className="mobile-page page 01">
                <MobilePage01 
                    title="Whooping Crane" 
                    image="https://i.ibb.co/2896Vbm/01-The-Polar-Bear.png" 
                    alt="Illustration of whooping crane in wet prairies."
                />
            </div>

            <div className="mobile-page page02">
                <MobilePage02
                    name="Grus Americana"
                    location="Canada's Northwest Territories"
                    population="600"
                    lifespan="2-4 years"
                />
            </div>

            <div className="mobile-page page03">
                <MobilePage03
                    title="Whooping Crane"
                    para1="The whooping crane is an omnivore, which means it eats both plants and animals. They are also prey for foxes, wolves, coyotes, lynxes, bobcats, and raccoons. Because of this, the whooping crane plays an important role in its ecosystem. They maintain the species population of the animals they eat and also provide food to the animals that hunt them. Without the whooping crane, the entire ecosystem would be thrown out of balance, and other species of animals would be put at risk of endangerment."
                    para2="Whooping cranes are unique because they play an important role in two different ecosystems. This is because they migrate south during the winter to escape the cold. If the population of whooping cranes is lost, it would have double the impact."
                    image1="https://i.ibb.co/z7zw6hJ/Vector1.png"
                    alt1="Underwater illustration of a crab, snail, and fish."
                    image2="https://i.ibb.co/CVdQSHG/Vector2.png"
                    alt2="Whooping crane illustration."
                    image3="https://i.ibb.co/RyXmJpr/Vector3.png"
                    alt3="Fox illustration."
                />
            </div>

            <div className="mobile-page page04" ref={scrollAnchor}>
                <MobilePage04
                    status="Endangered"
                    image="https://i.ibb.co/v17vKT1/Vector.png"
                    alt="Wet prairies environment illustration."
                    text1="The current status of the whooping crane population is endangered. This means that they face a very high risk of extinction in the wild. Whooping cranes are endangered because of habitat loss and human interference on their breeding grounds."
                    text2="Human settlements in the North American prairies has had severe effects on whooping cranes. The marshes whooping cranes lived in were drained for buildings and farms, leaving them with no home. Now that there is almost no habitat left, it makes it difficult for them to find food and breed."
                    text3="In 1941, there were only 21 whooping cranes left, meaning the species was in critical condition and near extinction. However, through conservation efforts, the population is increasing. Today there are about 600 whooping cranes in the wild and captivity."
                />
            </div>

            <div className="mobile-page page05">
                <MobilePage05
                    animal="whoopingCrane"
                    text="Explore the population of whooping cranes in different areas of the world."
                    map="https://i.ibb.co/hF7N1cF/Map.png"
                    alt="Map of the world."
                />
            </div>

            <div className="mobile-page page06">
                <MobilePage06WhoopingCrane
                    animal="polarBear"
                    image="https://i.ibb.co/WvSxKV1/06-History.png"
                    alt="Arctic environment illustration."
                />
            </div>

            <div className="mobile-page page07">
                <MobilePage07
                    animal="whoopingCrane"
                    image1="https://i.ibb.co/cr1sYJn/07-Future-Pos.png"
                    image2="https://i.ibb.co/G5HgRJN/07-Future-Neg.png"
                    alt="Wet prairies environment illustration with whooping crane."
                    text="Several factors put the whooping crane population at risk, including habitat loss and human disturbance, including airplanes, hunting, and ATV traffic. Although the population of whooping cranes is slowly increasing, conservation efforts must continue or the population is still at severe risk. There are two possible future outcomes the whooping crane faces. Continuing to persevere the whooping crane’s habitat would significantly help save the population. If we continue to conserve and protect the wetlands and prairies the whooping cranes live in, the population would continue to grow, until it is no longer at risk."
                    colour1="whoopingCrane1"
                    colour2="whoopingCrane2"
                />
            </div>

            <div className="mobile-page page08">
                <MobilePage08
                    animal="whoopingCrane"
                    text="Without the drastic conservation efforts that have occurred in the last 100 years, the whooping crane would be extinct. Many people are not aware of this endangered species, and you can help by spreading the word and sharing your knowledge. If you would like to learn more about how you can help the whooping crane population, take a look at the conservation efforts below."
                    blob1="https://i.ibb.co/m57tjrR/Vector1.png"
                    title1="Nature Conservancy Canada"
                    text1="“The Nature Conservancy of Canada (NCC) is the country’s unifying force for nature, working to deliver large-scale, permanent land conservation. With nature, we are building a thriving world.”"
                    link1="https://polarbearsinternational.org/"
                    blob2="https://i.ibb.co/stR0vBP/Vector2.png"
                    title2="International Crane Foundation"
                    text2="“The mission of the International Crane Foundation is to work worldwide to conserve cranes and the ecosystems, watersheds, and flyways on which they depend to survive.”"
                    link2="https://arcticwwf.org/species/polar-bear/"
                    blob3="https://i.ibb.co/9s4CdMn/Vector3.png"
                    title3="Friends of the Wild Whoopers"
                    text3="“Friends of the Wild Whoopers is a nonprofit conservation organization whose mission is to help preserve and protect the Aransas/Wood Buffalo population of wild whooping cranes and their habitat.”"
                    link3="https://canadianpolarbearhabitat.com/"
                />
            </div>

            <div className="mobile-page page09">
                <MobilePage09
                    text="Launch into the whooping crane’s habitat to explore their home and play activities to learn more about them."
                    image="https://i.ibb.co/xscpKg5/Vector.png"
                    alt="Image of 3D wet prairies environment."
                    button="button-green"
                    link="https://vickeychee.github.io/Project_Endangered/public/arctic/"
                />
            </div>
        </div>
    );
  };
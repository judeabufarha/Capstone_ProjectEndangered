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

export const PolarBearMobile = (props) => {
    const scrollAnchor = useRef(null);

    smoothscroll.polyfill();
    window.__forceSmoothScrollPolyfill__ = true;

    //useEffect(() => {
        //scrollAnchor.current.scrollIntoView({block: "start", inline: "nearest"});
      //}, [scrollAnchor]);

    return (

        <div className="polar-bear-mobile-container">
            <div className="mobile-page page 01">
                <MobilePage01 
                    title="Polar Bear" 
                    image="https://i.ibb.co/37WjKvs/01-The-Polar-Bear.png" 
                    alt="Illustration of polar bear on ice."
                />
            </div>

            <div className="mobile-page page02">
                <MobilePage02
                    name="Ursus Maritimus"
                    location="Arctic Circle"
                    population="22,000 - 31,000"
                    lifespan="25 years"
                />
            </div>

            <div className="mobile-page page03">
                <MobilePage03
                    title="Polar Bear"
                    para1="The polar bear is a keystone species, at the top of the food chain, which makes them an apex predator. Because of this, they have an important role in balancing the Arctic food chain. Without polar bears, the population of their prey would begin to grow, and the entire Arctic ecosystem would be thrown out of balance. Because the polar bear is a keystone species, they are a reflection of the health of their ecosystem. If the keystone species is endangered, the entire ecosystem is put at risk."
                    para2="Polar bears also play an important part in the cultures and economies of indigenous Arctic peoples. Because of the decline in the polar bear population, indigenous peoples have experienced significant cultural changes and economic issues."
                    image1="https://i.ibb.co/RQfM4ck/fish.png"
                    alt1="Arctic cod illustration."
                    image2="https://i.ibb.co/rGz54Tj/seal.png"
                    alt2="Seal illustration."
                    image3="https://i.ibb.co/kq9NHvj/polar.png"
                    alt3="Polar bear illustration."
                />
            </div>

            <div className="mobile-page page04" ref={scrollAnchor}>
                <MobilePage04
                    status="Vulnerable"
                    image="https://i.ibb.co/zxn68hP/Vector.png"
                    alt="Arctic environment illustration."
                    text1="The current status of the polar bear population is vulnerable. This means that they face a high risk of extinction in the wild. Polar bears are endangered because of the effects climate change has on the Arctic, which is where polar bears live."
                    text2="Climate change has caused the Arctic to heat up twice as fast as it used to. This makes it harder for polar bears to hunt seals, rest, and breed because they use the ice to do these things. Now that there is less ice, the polar bears have trouble finding food, and this can lead to malnutrition and starvation."
                    text3="Because of malnutrition, it also makes it harder for polar bears to reproduce. Even when a polar bear is able to have cubs, many die due to a lack of food or because their mother was malnourished. This has caused extinction in certain areas of the Arctic."
                />
            </div>

            <div className="mobile-page page05">
                <MobilePage05
                    animal="polarBear"
                    text="Explore the population of polar bears in different areas of the world."
                    map="https://i.ibb.co/hF7N1cF/Map.png"
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
                />
            </div>

            <div className="mobile-page page08">
                <MobilePage08
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
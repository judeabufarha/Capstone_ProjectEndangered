import "./styles.css";
import { MobilePage01 } from "../page components/mobile-page-01";
import { MobilePage02 } from "../page components/mobile-page-02";
import { MobilePage03 } from "../page components/mobile-page-03";

export const PolarBearMobile = (props) => {

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
        </div>
    );
  };
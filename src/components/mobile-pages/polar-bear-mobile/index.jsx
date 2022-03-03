import "./styles.css";
import { MobilePage01 } from "../page components/mobile-page-01";
import { MobilePage02 } from "../page components/mobile-page-02";

export const PolarBearMobile = (props) => {

    return (

        <div className="polar-bear-mobile-container">
            <div className="mobile-page">
                <MobilePage01 
                    title="Polar Bear" 
                    image="https://i.ibb.co/37WjKvs/01-The-Polar-Bear.png" 
                    alt="Illustration of polar bear on ice."
                />
            </div>

            <div className="mobile-page">
                <MobilePage02
                    name="Ursus Maritimus"
                    location="Arctic Circle"
                    population="22,000 - 31,000"
                    lifespan="25 years"
                />
            </div>
        </div>
    );
  };
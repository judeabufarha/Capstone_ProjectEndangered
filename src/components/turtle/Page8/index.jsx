import { ParallaxLayer } from "@react-spring/parallax";
import InfoBlob from "../../infoBlob";
import TrioImg from "../../trioImg";
import "./style.scss";

const Page8 = ({ offset, color }) => {

  const linkSections = [
    <InfoBlob
      BgImage="https://i.ibb.co/7KnCVSw/Vector-28.png"
      linkText="Learn More"
      title={
        <>
          Sea Turtle <br />
          Conservancy 
        </>
      }
      text="“The Sea Turtle Conservancy is the oldest and most accomplished sea turtle organization in the world and is committed to research and conservation initiatives, with over 60 years of experience.”"
      linkFn={() => {
        window.open("https://polarbearsinternational.org/", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/7KnCVSw/Vector-28.png"
      linkText="Learn More"
      title={
        <>
        Turtle <br />
        Foundation  <br />
        
      </>
      }
      text="“The Turtle Foundation is an international initiative for the protection of the endangered sea turtles and their habitats, by preventing hunting, coastal building, and ocean pollution.”"
      linkFn={() => {
        window.open("https://arcticwwf.org/species/polar-bear/", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/7KnCVSw/Vector-28.png"
      linkText="Learn More"
      title={
        <>
        World Wildlife  <br />
        Fund  
      </>
      }
      text="“WWF works around the world to establish marine protected areas both on land and in the ocean, reduce turtle bycatch, and educate local communities on over-harvesting and illegal trade.”"
      linkFn={() => {
        window.open("https://canadianpolarbearhabitat.com/", "_blank");
      }}
    />,
  ];

  return (
    <>
      <ParallaxLayer
        className="page8"
        offset={offset}
        speed={0.2}
      ></ParallaxLayer>

      <ParallaxLayer className="page8" offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer className="page8" offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer conservationTitle">
          <div className="commonContainer">
            <h3>Conservation</h3>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="page8" offset={offset} speed={1.2}>
        <div className="wrapperCommonContainer conservationText">
          <div className="commonContainer">
            <p>
            Without global change, the green sea turtle is in danger of extinction in the near future. It is up to us to take action in order to save the green sea turtle species. There are many ways each of us can help save the green sea turtles, including volunteering, recycling, and spreading awareness.  If you would like to learn more about how you can help the green sea turtle population, take a look at the conservation efforts below.
            </p>
          </div>
        </div>
      </ParallaxLayer>


      <ParallaxLayer className="page8" offset={offset} speed={1.2}>
        <div className="wrapperCommonContainer polarInfoImg">
          <div className="commonContainerSpecial">
            <TrioImg images={linkSections} />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page8;


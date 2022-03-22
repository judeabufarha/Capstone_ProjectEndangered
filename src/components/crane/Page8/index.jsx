import { ParallaxLayer } from "@react-spring/parallax";
import InfoBlob from "../../infoBlob";
import TrioImg from "../../trioImg";
import "./style.scss";

const Page8 = ({ offset, color }) => {

  const linkSections = [
    <InfoBlob
      BgImage="https://i.ibb.co/Jz37FjQ/Vector-34.png"
      linkText="Learn More"
      title={
        <>
          Nature <br />
          Conservancy <br />
          Canada
        </>
      }
      text="“The Nature Conservancy of Canada (NCC) is the country’s unifying force for nature, working to deliver large-scale, permanent land conservation. With nature, we are building a thriving world.”"
      linkFn={() => {
        window.open("https://polarbearsinternational.org/", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/Jz37FjQ/Vector-34.png"
      linkText="Learn More"
      title={
        <>
        International <br />
        Crane  <br />
        Foundation  
        
      </>
      }
      text="“The mission of the International Crane Foundation is to work worldwide to conserve cranes and the ecosystems, watersheds, and flyways on which they depend to survive.”"
      linkFn={() => {
        window.open("https://arcticwwf.org/species/polar-bear/", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/Jz37FjQ/Vector-34.png"
      linkText="Learn More"
      title={
        <>
        Friends of the <br />
        Wild  <br />
        Whoopers 
      </>
      }
      text="“Friends of the Wild Whoopers is a nonprofit conservation organization whose mission is to help preserve and protect the Aransas/Wood Buffalo population of wild whooping cranes and their habitat.”"
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
            Without the drastic conservation efforts that have occurred in the last 100 years, the whooping crane would be extinct. Many people are not aware of this endangered species, and you can help by spreading the word and sharing your knowledge. If you would like to learn more about how you can help the whooping crane population, take a look at the conservation efforts below.
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


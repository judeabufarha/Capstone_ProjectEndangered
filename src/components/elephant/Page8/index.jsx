import { ParallaxLayer } from "@react-spring/parallax";
import InfoBlob from "../../infoBlob";
import TrioImg from "../../trioImg";
import "./style.scss";

const Page8 = ({ offset, color }) => {

  const linkSections = [
    <InfoBlob
      BgImage="https://i.ibb.co/4Tt1Mrr/Vector-27.png"
      linkText="Learn More"
      title={
        <>
          Asian <br />
          Elephant <br />
          Support
        </>
      }
      text="“Asian Elephant Support is dedicated to the care and conservation of Asian elephants in their range countries, and to the people whose lives are intertwined with this magnificent and endangered species.”"
      linkFn={() => {
        window.open("https://www.asianelephantsupport.org/", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/4Tt1Mrr/Vector-27.png"
      linkText="Learn More"
      title={
        <>
        The<br />
        Elephant <br />
        Family  <br />
        
      </>
      }
      text="“Elephant Family works to protect Asia’s magnificent wildlife through conservation, to enable successful coexistence between all living things.”"
      linkFn={() => {
        window.open("https://elephant-family.org/ ", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/4Tt1Mrr/Vector-27.png"
      linkText="Learn More"
      title={
        <>
        Save the <br />
        Asian  <br />
        Elephants 
      </>
      }
      text="“Save The Asian Elephants works to end the terrible cruelty and brutal conditions suffered by the wondrous and ancient species that is the Asian elephant.”"
      linkFn={() => {
        window.open("https://stae.org/", "_blank");
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
            Without change, the Asian elephant is in danger of extinction in the near future. It is up to us to take action in order to save the Asian elephant species. Many people are not aware of how humans are hurting the population, and you can help by spreading the word and sharing your knowledge. If you would like to learn more about how you can help the Asian elephant population, take a look at the conservation efforts below.
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


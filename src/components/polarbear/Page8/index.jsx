import { ParallaxLayer } from "@react-spring/parallax";
import InfoBlob from "../../infoBlob";
import TrioImg from "../../trioImg";
import "./styles.scss";

const Page8 = ({ offset, color }) => {

  const linkSections = [
    <InfoBlob
      BgImage="https://i.ibb.co/9cKpF7q/blob1.png"
      linkText="Learn More"
      title="Polar Bears International"
      text="“Polar Bears International is made up of a passionate team of conservationists, scientists, and volunteers—working to secure a future for polar bears across the Arctic.”"
      linkFn={() => {
        window.open("https://polarbearsinternational.org/", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/9cKpF7q/blob1.png"
      linkText="Learn More"
      title={
        <>
          World <br />
          Wildlife Fund
        </>
      }
      text="“Polar bears have long been a focus in WWF’s on-the-ground research and conservation projects in the Arctic, going back to 1972 – and climate change is a primary focus of our global conservation efforts.”"
      linkFn={() => {
        window.open("https://arcticwwf.org/species/polar-bear/", "_blank");
      }}
    />,
    <InfoBlob
      BgImage="https://i.ibb.co/9cKpF7q/blob1.png"
      linkText="Learn More"
      title={
        <>
          Canadian Polar <br /> Bear Habitat
        </>
      }
      text="“The Canadian Polar Bear Habitat is committed to advancing the conservation of wild polar bears and elevating the standard of care for polar bears in human care through research and education.”"
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
              Without global change the polar bear will be extinct by 2100. It
              is up to us to change our ways in order to save the polar bear
              species. There are many ways each of us can help save the polar
              bears, including volunteering, fighting climate change, and
              raising money for conservation efforts. If you would like to learn
              more about how you can help the polar bear population, take a look
              at the conservation efforts below.
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer className="page8" offset={offset} speed={1.2}>
        <div className="wrapperCommonContainer conservationText">
          <div className="commonContainer">
            <p>
              Without global change the polar bear will be extinct by 2100. It
              is up to us to change our ways in order to save the polar bear
              species. There are many ways each of us can help save the polar
              bears, including volunteering, fighting climate change, and
              raising money for conservation efforts. If you would like to learn
              more about how you can help the polar bear population, take a look
              at the conservation efforts below.
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

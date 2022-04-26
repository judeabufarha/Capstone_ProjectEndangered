import { ParallaxLayer } from "@react-spring/parallax";
import TrioImg from "../../trioImg";
import "./style.scss";


/** Elephant Page 3 **/
const Page3 = ({ offset, color }) => {
   /** group of 3 images on the imporatance page **/
  const groupAnimalsEleph = [
    <img src="https://i.ibb.co/jGS0qJ4/Vector-22.png" alt="long grass" />,
    <img src="https://i.ibb.co/G3M4302/Vector-23.png" alt="elephant"  />,
    <img src="https://i.ibb.co/8jR2rVF/Vector-25.png" alt="trail" />,
  ];
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

 {/** Imporatance title layer **/}
      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer importanceTitle">
          <div className="commonContainer">
            <h1>The Importance of the Asian Elephant</h1>
          </div>
        </div>
      </ParallaxLayer>

 {/** Paragraph text section, line break between both - entire section moves at the same speed **/}
      <ParallaxLayer offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer textAreaContainer">
          <div className="commonContainer">
            <p>
            The Asian elephant plays an important role in the forest and grasslands ecosystem. This is because they help to maintain the health of these habitats. Asian elephants eat many different plants, and as they travel around, their dung is dropped, which is filled with many different seeds. They help spread plants around the environment, which helps to keep the ecosystem diverse. This is important because it keeps the habitat healthy which benefits the many animals that live there.
            </p>
            <hr />
            <p>
            Asian elephants also play an important role in maintaining the grasslands. The grass in this environment can get very long, which makes it hard for small animals to travel through. Because of the Asian elephant’s large size, they are able to create paths in the grass for smaller animals.
            </p>
          </div>
        </div>
      </ParallaxLayer>

 {/** Group of 3 images moving together within the layer **/}
      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="wrapperCommonContainer polarAnimImg">
          <div className="commonContainerSpecial">
            <TrioImg images={groupAnimalsEleph} />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page3;

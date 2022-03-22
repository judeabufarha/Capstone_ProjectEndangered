// Title
// Paragraph 1
// Line
// Paragraph 2
// Image Trio
import { ParallaxLayer } from "@react-spring/parallax";
import TrioImg from "../../trioImg";
import "./styles.scss";

const Page3 = ({ offset, color }) => {
  const groupAnimals = [
    <img src="https://i.ibb.co/RQfM4ck/fish.png" alt= 'fish' />,
    <img src="https://i.ibb.co/rGz54Tj/seal.png" alt= 'seal'/>,
    <img src="https://i.ibb.co/kq9NHvj/polar.png" alt= 'polar bear'/>,
  ];
  return (
    <>
      <ParallaxLayer offset={offset} speed={0.2}></ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6}>
        <div className="wrapperCommonContainer importanceTitle">
          <div className="commonContainer">
            <h1>The Importance of the Polar Bear</h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer textAreaContainer">
          <div className="commonContainer">
            <p>
              The polar bear is a keystone species, at the top of the food
              chain, which makes them an apex predator. Because of this, they
              have an important role in balancing the Arctic food chain. Without
              polar bears, the population of their prey would begin to grow, and
              the entire Arctic ecosystem would be thrown out of balance.
              Because the polar bear is a keystone species, they are a
              reflection of the health of their ecosystem. If the keystone
              species is endangered, the entire ecosystem is put at risk.
            </p>
            <hr />
            <p>
              Polar bears also play an important part in the cultures and
              economies of indigenous Arctic peoples. Because of the decline in
              the polar bear population, indigenous peoples have experienced
              significant cultural changes and economic issues.
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="wrapperCommonContainer polarAnimImg">
          <div className="commonContainerSpecial">
            <TrioImg images={groupAnimals} />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page3;

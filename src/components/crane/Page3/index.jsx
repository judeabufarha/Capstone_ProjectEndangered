import { ParallaxLayer } from "@react-spring/parallax";
import TrioImg from "../../trioImg";
import "./style.scss";

const Page3 = ({ offset, color }) => {
  const groupAnimalsCrane = [
    <img src="https://i.ibb.co/DMQt098/Vector-30.png" alt="Crab in Water" />,
    <img src="https://i.ibb.co/X3YBpLH/Vector-31.png" alt="Crane"/>,
    <img src="https://i.ibb.co/dLSWbtR/Vector-32.png" alt="Fox"/>,
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
            <h1>The Importance of the Whooping Crane</h1>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.9}>
        <div className="wrapperCommonContainer textAreaContainer">
          <div className="commonContainer">
            <p>
            The whooping crane is an omnivore, which means it eats both plants and animals. They are also prey for foxes, wolves, coyotes, lynxes, bobcats, and raccoons. Because of this, the whooping crane plays an important role in its ecosystem. They maintain the species population of the animals they eat and also provide food to the animals that hunt them. Without the whooping crane, the entire ecosystem would be thrown out of balance, and other species of animals would be put at risk of endangerment. 
            </p>
            <hr />
            <p>
            Whoopings cranes are unique because they play an important role in two different ecosystems. This is because they migrate south during the winter to escape the cold. If the population of whooping cranes is lost, it would have double the impact.
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={1.2}>
        <div className="wrapperCommonContainer polarAnimImg">
          <div className="commonContainerSpecial">
            <TrioImg images={groupAnimalsCrane} />
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};

export default Page3;

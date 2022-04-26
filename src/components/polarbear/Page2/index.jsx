
import { ParallaxLayer } from "@react-spring/parallax";
import TextTitle from "../../textTitle";
import "./styles.scss";

/** Page 2 for the PolarBear  **/
const Page2 = ({ offset, color }) => {
  
  /** Structure holding polarbear about information **/
  const pageItemList = [
    {
      title: "Scientific Name",
      description: "Ursus Maritimus"
    },
    {

      title: "Location",
      description: "Arctic Circle"
    },
    {
      title: "Population",
      description: "22,000 - 31,000"
    },
    {

      title: "Life Span",
      description: "25 Years"
    }
  ]

  return (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

     {/** About information layer  **/}
    <ParallaxLayer className="itemlists" offset={offset} speed={0.6}>
      <div className="textListContainer">
        <div className="textListContainer_flex">
          <TextTitle list={pageItemList} />
        </div>
      </div>
    </ParallaxLayer>
    
 {/** standing polarbear layer  **/}
    <ParallaxLayer className="standingPolarbear" offset={offset} speed={0.6}>
      <img
        className="standPolar"
        src="https://i.ibb.co/qD465kv/standing-Polar.png"
        alt="Standing Polarbear"
      />
    </ParallaxLayer>

{/** birds layer  **/}
    <ParallaxLayer className="birdsSkyImg" offset={offset} speed={1.0}>
      <img
        className="birdsSky"
        src="https://i.ibb.co/xmWNfr7/birds.png"
        alt="Birds"
      />
    </ParallaxLayer>

  </>
);
}

export default Page2;

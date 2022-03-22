import { ParallaxLayer } from "@react-spring/parallax";
import TextTitle from "../../textTitle";
import "./style.scss";

const Page2 = ({ offset, color }) => {
  
  const pageItemListCrane = [
    {
      title: "Scientific Name",
      description: "Grus Americana"
    },
    {
      title: "Location",
      description: "Canada's Northwest Territories"
    },
    {
      title: "Population",
      description: "600"
    },
    {
      title: "Life Span",
      description: "2-4 years"
    }
  ]

  return (
  <>
   <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer className="transitionGradient" offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

    <ParallaxLayer className="itemlists" offset={offset} speed={0.6}>
      <div className="textListContainer">
        <div className="textListContainer_flex">
          <TextTitle list={pageItemListCrane} />
        </div>
      </div>
    </ParallaxLayer>
    

    <ParallaxLayer className="flyingCrane" offset={offset} speed={0.6}>
      <img
        className="flyingCraneImg"
        src="https://i.ibb.co/7zmjvhd/flying-bird.png"
        alt="Flying Crane"
      />
    </ParallaxLayer>

    <ParallaxLayer className="AboutWaterDetails" offset={offset} speed={0.8}>
      <img
        className="AboutWaterDetailsImg"
        src="https://i.ibb.co/pfmn5XK/Group-41.png"
        alt="Water Details"
      />
    </ParallaxLayer>

 

  </>
);
}

export default Page2;

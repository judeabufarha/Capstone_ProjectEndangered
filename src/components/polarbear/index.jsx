import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScriptTag from 'react-script-tag';
import { Navbar } from "../navbar";
import Page1 from "./Page1";

const Page2 = ({ offset, color }) => ( //for all pages
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

   
    
  </>
);

const Page3 = ({ offset, color }) => {
  console.log({offset})
  return ( //for all pages
  <>
 
    <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>


  
    <ParallaxLayer className="importance" offset={offset} speed={0.6}>
    <div className="titleContainer"> 
      <img className="importanceTitle" src="https://i.ibb.co/v12VHb7/importance-Title.png" alt="polar"/>  
      </div> 
    </ParallaxLayer>

    <ParallaxLayer className="textAreaContainer" offset={offset} speed={0.9}>
      <div className="textArea"> 
      <p className="polarPara1">The polar bear is a keystone species, at the top of the food chain, which makes them an apex predator. Because of this, they have an important role in balancing the Arctic food chain. Without polar bears, the population of their prey would begin to grow, and the entire Arctic ecosystem would be thrown out of balance. Because the polar bear is a keystone species, they are a reflection of the health of their ecosystem. If the keystone species is endangered, the entire ecosystem is put at risk.</p>
      <img className="sepLine" src="https://i.ibb.co/p3Hz2r0/line.png" alt="polar"/>  
      <p className="polarPara2" >Polar bears also play an important part in the cultures and economies of indigenous Arctic peoples. Because of the decline in the polar bear population, indigenous peoples have experienced significant cultural changes and economic issues.</p>
      </div> 
    </ParallaxLayer>

    <ParallaxLayer className="polarAnimImg" offset={offset} speed={1.2}>
      <div className="groupAnimals">
        <div className="groupAnimalsItem">
          <img src="https://i.ibb.co/RQfM4ck/fish.png" alt="polar"/>  
        </div>
        <div className="groupAnimalsItem">
          <img src="https://i.ibb.co/rGz54Tj/seal.png" alt="polar"/>  
        </div>
        <div className="groupAnimalsItem">
          <img src="https://i.ibb.co/kq9NHvj/polar.png" alt="polar"/>  
        </div>
      </div> 
    </ParallaxLayer>



  </>
)};

const Page4 = ({ offset, color }) => ( //for all pages
  <>
 
    <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

  <div className="statusContainer">
    <ParallaxLayer className="statusTitle" offset={offset} speed={0.6}>
    <div className="statTitleContainer"> 
      <h2 className="statTitle" >Status</h2>  
      <h3 className="statTitle" >Vulnerable</h3>  
      </div> 
    </ParallaxLayer>

    <ParallaxLayer className="statusTextArea" offset={offset} speed={0.9}>
      <div> 
      <p className="statusPara1">The current status of the polar bear population is vulnerable. This means that they face a high risk of extinction in the wild. Polar bears are endangered because of the effects climate change has on the Arctic, which is where polar bears live. </p>
      <p className="statusPara1">Climate change has caused the Arctic to heat up twice as fast as it used to. This makes it harder for polar bears to hunt seals, rest, and breed because they use the ice to do these things. Now that there is less ice, the polar bears have trouble finding food, and this can lead to malnutrition and starvation. </p>
      <p className="statusPara1">Because of malnutrition, it also makes it harder for polar bears to reproduce. Even when a polar bear is able to have cubs, many die due to a lack of food or because their mother was malnourished. This has caused extinction in certain areas of the Arctic. </p>
      </div> 
    </ParallaxLayer>

    <ParallaxLayer className="sideArcticImage" offset={offset} speed={1.2}>
    
      <img className="arcticSnap" src="https://i.ibb.co/txT70v8/arctic-Snap.png" alt="arcticSnap"/>  

 
    </ParallaxLayer>
  </div>



  </>
);


 {/* <img className="polarIce" src="https://i.ibb.co/fMtZSVX/polarbear-Ice.png" alt="polar" />
        <img className="bird" src="https://i.ibb.co/xmWNfr7/birds.png" alt="birds" />
        <img className="mountain1" src=" https://i.ibb.co/syxV6Pj/mountain1.png" alt="mountain1" />
        <img className="sun" src=" https://i.ibb.co/C0ggdGP/sun.png " alt="sun" />
        <img className="mountain2" src=" https://i.ibb.co/4p2g6J4/mountain2.png" alt="mountain2"/>
        <img className="mountain3" src="https://i.ibb.co/dM6z6qN/mountain3.png " alt="mountain3" />
        <img className="lightdetail" src="https://i.ibb.co/vsqYpWc/waterdetail-Light.png" alt="lightdetail"/>
        <img className="darkdetail" src="https://i.ibb.co/fFxbrr2/waterdetail-Dark.png" alt="darkdetail"/>  */}

export const Polarbear = () => {
  return (
    <>
   
    <ScriptTag type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
    <ScriptTag type="text/javascript" src="https://rawgit.com/jquery/jquery-mousewheel/master/jquery.mousewheel.js" />

    <ScriptTag type="text/javascript" src="./scripts/scroll.js" />
    
    <div>
  
      <Parallax className="container" pages={9} horizontal={true}>
        <Page1 offset={0} color="orange" />
        <Page2 offset={1} color="teal" />
        <Page3 offset={2} color="orange" />
        <Page4 offset={3} color="teal" />
        <Page2 offset={4} color="pink" />
        <Page2 offset={5} color="pink" />
        <Page2 offset={6} color="pink" />
        <Page2 offset={7} color="pink" />
        <Page2 offset={8} color="pink" />
        
      </Parallax>

    </div>
    </>
  );
      {/* <img
        className="scrollImage"
        src="https://i.ibb.co/fSKqN42/Scroll.png"
        alt="scroll"
      /> */}
      {/* <img
        className="title"
        src="https://i.ibb.co/rM1GN44/title.png"
        alt="title"
      />
      <img
        className="waterbase"
        src="https://i.ibb.co/tx0FqC2/water-Base.png"
        alt="waterbase"
      />
      <img className="ice" src="https://i.ibb.co/dGJyCqr/ice.png" alt="ice" />
      <img
        className="polarIce"
        src="https://i.ibb.co/fMtZSVX/polarbear-Ice.png"
        alt="polar"
      />
      <img
        className="bird"
        src="https://i.ibb.co/xmWNfr7/birds.png"
        alt="birds"
      />
      <img
        className="mountain1"
        src=" https://i.ibb.co/syxV6Pj/mountain1.png"
        alt="mountain1"
      />
      <img className="sun" src=" https://i.ibb.co/C0ggdGP/sun.png " alt="sun" />
      <img
        className="mountain2"
        src=" https://i.ibb.co/4p2g6J4/mountain2.png"
        alt="mountain2"
      />
      <img
        className="mountain3"
        src="https://i.ibb.co/dM6z6qN/mountain3.png "
        alt="mountain3"
      />
      <img
        className="lightdetail"
        src="https://i.ibb.co/vsqYpWc/waterdetail-Light.png"
        alt="lightdetail"
      />
      <img
        className="darkdetail"
        src="https://i.ibb.co/fFxbrr2/waterdetail-Dark.png"
        alt="darkdetail"
      /> */}
      

};

import "./styles.css";

import React, { Fragment } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScriptTag from 'react-script-tag';
import { Navbar } from "../navbar";
import { Div } from "../Div";




const Page1 = ({ offset, color }) => ( //for all pages
  <>
   
      <ParallaxLayer offset={offset} speed={0.2}>
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0}>
        <div className={`gradient ${color}`} />
      </ParallaxLayer>

      <ParallaxLayer className="title" offset={offset} speed={0.6}>
        <div> 
          <img className="title" src="https://i.ibb.co/rM1GN44/title.png" alt="title"/>
        </div> 
      </ParallaxLayer>
      
      <ParallaxLayer className="backgroundMountains" offset={offset} speed={0.6}>
        <div> 
        {/* <img className="mountain1" src=" https://i.ibb.co/syxV6Pj/mountain1.png" alt="mountain1" />
          <img className="mountain2" src=" https://i.ibb.co/4p2g6J4/mountain2.png" alt="mountain2"/> */}
          {/* <img className="mountain3" src="https://i.ibb.co/dM6z6qN/mountain3.png " alt="mountain3" /> */}
        </div> 
      </ParallaxLayer>

      <ParallaxLayer className="water" offset={offset} speed={0.6}>
        <div> 
          {/* <img className="waterbase" src="https://i.ibb.co/tx0FqC2/water-Base.png" alt="waterbase"/>    */}
          <img className="ice" src="https://i.ibb.co/dGJyCqr/ice.png" alt="ice" />
        
        </div> 
      </ParallaxLayer>

    
      <ParallaxLayer className="polarbearOnIce" offset={offset} speed={0.6}>
        <div> 
        <img className="polarIce" src="https://i.ibb.co/fMtZSVX/polarbear-Ice.png" alt="polar"/>  
        </div> 
      </ParallaxLayer>
 



  </>
);

const Page2 = ({ offset, color }) => ( //for all pages
  <>
 
    <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>

  

    <div>
            <ParallaxLayer className="importance" offset={offset} speed={0.6}>
          
              <h1 className="importanceTitle">Importance</h1>  
            
            </ParallaxLayer>

            <ParallaxLayer className="textArea" offset={offset} speed={0.9}>
              <div> 
                <p className="polarPara1">The polar bear is a keystone species, at the top of the food chain, which makes them an apex predator. Because of this, they have an important role in balancing the Arctic food chain. Without polar bears, the population of their prey would begin to grow, and the entire Arctic ecosystem would be thrown out of balance. Because the polar bear is a keystone species, they are a reflection of the health of their ecosystem. If the keystone species is endangered, the entire ecosystem is put at risk.</p>
                <hr></hr>
                <p className="polarPara2" >Polar bears also play an important part in the cultures and economies of indigenous Arctic peoples. Because of the decline in the polar bear population, indigenous peoples have experienced significant cultural changes and economic issues.</p>
              </div> 
            </ParallaxLayer>

    </div>

    <div>
      <ParallaxLayer className="polarAnimImg" offset={offset} speed={1.2}>
        <div className="groupAnimals"> 
        <img className="fishBlob" src="https://i.ibb.co/RQfM4ck/fish.png" alt="polar"/>  
        <img className="sealBlob" src="https://i.ibb.co/rGz54Tj/seal.png" alt="polar"/>  
        <img className="polarBlob" src="https://i.ibb.co/kq9NHvj/polar.png" alt="polar"/>  
        </div> 
      </ParallaxLayer>
    </div>
     
    

  



  </>
);

const Page3 = ({ offset, color }) => ( //for all pages
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0}>
      <div className={`gradient ${color}`} />
    </ParallaxLayer>
    

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
   
    <Navbar></Navbar>
    <ScriptTag type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
    <ScriptTag type="text/javascript" src="https://rawgit.com/jquery/jquery-mousewheel/master/jquery.mousewheel.js" />

    <ScriptTag type="text/javascript" src="./scripts/scroll.js" />
    
    <div>
 
      <Parallax className="container" pages={3} horizontal={true}>
        <Page1 offset={0} color="orange" />
        <Page2 offset={1} color="teal" />
        <Page3 offset={2} color="pink" />
        
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

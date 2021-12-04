import "./styles.css";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import useScript from "../useScript";


const Page = ({ offset, color }) => ( //for all pages
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "lightblue",
          backgroundSize: "contain"
        }}
      >
      </div>
    </ParallaxLayer>



  </>
);

export default function Polarbear() { //for each page
  useScript("https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js");
  useScript("https://rawgit.com/jquery/jquery-mousewheel/master/jquery.mousewheel.js");
  useScript("./scripts/scroll.js");

  return (
    <>
    <div>

      <Parallax className="container" pages={5} horizontal={true}>
        <Page offset={0} color="orange" />
        <Page offset={1} color="teal" />
        <Page offset={2} color="pink" />
        <Page offset={3} color="pink" />
        <Page offset={4} color="pink" />
        
      </Parallax>

    </div>
    </>
  );
  
}

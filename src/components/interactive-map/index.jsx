import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
  } from "react-simple-maps";

import "./styles.css";
import { scaleDown } from "react-burger-menu";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const Map = (props) => {

    return (
        <div className="flex-map">
            <ComposableMap projectionConfig={{}}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                geographies.map(geo => (
                    <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#d3dbe0"
                    stroke="#FFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.2}
                    />
                ))
                }
            </Geographies>
            <Marker coordinates={[-74.006, 40.7128]} style={{
         default: {
            fill: "#72C2E4",
            stroke: "#94D2ED",
            strokeWidth: 24,
            strokeOpacity: 0.4,
            outline: "none",
            strokeDashoffset: 100,
            transition: "ease-in-out",
         },
         hover: {
            fill:"#c8e0c8",
            fillOpacity:0.6,
            stroke: "#2D6C73",
            strokeWidth: 1.5,
            outline: "none",
         },
         
      }}>
                <circle r={12}/>
               
            </Marker>
            <Marker coordinates={[20, 10]} style={{
         default: {
            fill: "#72C2E4",
            stroke: "#94D2ED",
            strokeWidth: 18,
            strokeOpacity: 0.4,
            outline: "none",
            strokeDashoffset: 100,
            transition: "ease-in-out",
         },
         hover: {
            //transform: `scale(1.5, 1.5)`,
            origin: {x: 'center', y:'center'},
            fill:"#c8e0c8",
            fillOpacity:0.6,
            stroke: "#2D6C73",
            strokeWidth: 1.5,
            outline: "none",
         },
         
      }}>
                <circle r={9}/>
               
            </Marker>
            </ComposableMap>
        </div>
    );
}

Map.propTypes = {

}
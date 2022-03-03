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
import { MapMarker } from "../map-marker";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export const Map = (props) => {

    return (
        <>
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
            </ComposableMap>
           
        </div>
        </>
        
    );
}

Map.propTypes = {

}
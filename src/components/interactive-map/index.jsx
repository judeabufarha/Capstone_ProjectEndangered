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
            <div className="map-marker-01-container">
                <MapMarker className="map-marker-blue" text="Canada 5000-7000"></MapMarker>
            </div>
            <div className="map-marker-02-container">
                <MapMarker className="map-marker-blue-02" text="Southern Arctic"></MapMarker>
            </div>
        </div>
        </>
        
    );
}

Map.propTypes = {

}
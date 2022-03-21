import PropTypes from "prop-types";
import "./styles.css";
import { MapMarkerMobile } from "../map-marker-mobile";

export const MapLegend = (props) => {

    return (
        <div className="map-legend-container">
            <div className="map-legend-row1">
                <MapMarkerMobile size={'large-mobile'} colour={props.colour} top=".25rem" left=".25rem"/>
                <p className="map-legend-label1" >Population known</p>
            </div>
            <div className="map-legend-row2">
                <MapMarkerMobile size={'large-mobile'} colour={props.outline} top="2rem" left=".25rem"/>
                <p className="map-legend-label2" >Population unknown</p>
            </div>
        </div>
    );
}

MapLegend.propTypes = {
    colour: PropTypes.string.isRequired,
    outline: PropTypes.string.isRequired
}

import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";

export const ToggleButtons = () => {

    const [toggled, setToggled] = useState(true); 
    
    const handleChange = () => { 
        setToggled(!toggled); 
        console.log('Toggle change: ' + toggled); 
    }; 

    return (
        <section class="model-14">
  <div class="checkbox">
    <input type="checkbox"/>
    <label></label>
  </div>
</section>
    );
}

ToggleButtons.propTypes = {
    type: PropTypes.string.isRequired
}
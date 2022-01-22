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
        <div>
            <input type="checkbox" id="switch" className="switch" onChange={handleChange}/>
            <div class="app">
                <div class="content">
                    <label for="switch" className="text-switch">
                        <div class="toggle"></div>
                        <div class="names">
                            <p class="then">Then</p>
                            <p class="now">Now</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

ToggleButtons.propTypes = {
    type: PropTypes.string.isRequired
}
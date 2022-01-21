import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect} from "react";

export const ToggleSwitch = () => {

    const [toggled, setToggled] = useState(true); 
    
    const handleChange = () => { 
        setToggled(!toggled); 
        console.log('Toggle change: ' + toggled); 
    }; 

    return (
        <section class="toggle-component">
            <form>
                <div class="toggle-switch">
                    <input type="checkbox" onChange={handleChange}/>
                    <label></label>
                </div>
            </form>
        </section>
    );
}
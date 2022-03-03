import "./styles.css";
import { useState } from "react";

export const ToggleSwitch = () => {

    const [toggled, setToggled] = useState(true); 
    
    const handleChange = () => { 
        setToggled(!toggled); 
        console.log('Toggle change: ' + toggled); 
    }; 

    return (
        <section className="toggle-component">
            <form>
                <div className="toggle-switch">
                    <input type="checkbox" onChange={handleChange}/>
                    <label className="label"></label>
                </div>
            </form>
        </section>
    );
}

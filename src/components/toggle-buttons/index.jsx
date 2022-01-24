import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect} from "react";

export const ToggleButtons = (props) => {

    const [toggled, setToggled] = useState(true); 
    const [text, setText] = useState(props.text);

    useEffect(() => {
        setText(props.text);
    }, [props.text])
    
    const handleChange = () => { 
        setToggled(!toggled); 
        console.log('Toggle change: ' + toggled); 
    }; 

    return (
        <div>
            { text === "then-now" && (
                <div>
                    <input type="checkbox" id="switch" className="switch" onChange={handleChange}/>
                    <div class="app">
                        <div class="content">
                            <label for="switch" className="text-switch-then-now" id={props.base}>
                                <div class="toggle-then-now" id={props.colour}></div>
                                <div class="names">
                                    <p class="then">Then</p>
                                    <p class="now">Now</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            )}

            { text === "positive-negative" && (
                <div>
                    <input type="checkbox" id="switch" className="switch" onChange={handleChange}/>
                    <div class="app">
                        <div class="content">
                            <label for="switch" className="text-switch-positive-negative" id={props.base}>
                                <div class="toggle-positive-negative" id={props.colour}></div>
                                <div class="names">
                                    <p class="positive">Positive</p>
                                    <p class="negative">Negative</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

ToggleButtons.propTypes = {
    colour: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    base: PropTypes.string.isRequired
}
import PropTypes from "prop-types";
import "./styles.scss";
import { useState } from "react";
import { useEffect} from "react";

export const ToggleButtons = (props) => {

    const [toggled, setToggled] = useState(false); 
    const [text, setText] = useState(props.text);

    useEffect(() => {
        setText(props.text);
    }, [props.text])
    
    const handleChange = () => { 
        setToggled(!toggled); 
        console.log('Toggle change: ' + toggled); 
        
        if(props.onClick){
          props.onClick();
        }
    }; 

    return (
        <div className={ toggled ? 'toggleButtonActivated' : 'toggleButtonNormal'} onClick={handleChange}>
            { text === "then-now" && (
                <div>
                    
                    <div className="app">
                        <div className="content">
                            <label for="switch" className={`text-switch-then-now ${props.base}`}>
                                <div className={`toggle-then-now ${props.colour}`}/>
                                <div className="names">
                                    <p className="then">Then</p>
                                    <p className="now">Now</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            )}

            { text === "positive-negative" && (
                <div>
                    
                    <div className="app">
                        <div className="content">
                            <label for="switch" className={`text-switch-positive-negative ${props.base}`}>
                                <div className={`toggle-positive-negative ${props.colour}`}></div>
                                <div className="names">
                                    <p className="positive">Positive</p>
                                    <p className="negative">Negative</p>
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
    base: PropTypes.string.isRequired,
    onClick: PropTypes.func
    
}

export default ToggleButtons

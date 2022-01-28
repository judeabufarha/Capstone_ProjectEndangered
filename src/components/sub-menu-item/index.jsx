import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect} from "react";

export const SubMenuItem = (props) => {
    const [state, setState] = useState(props.state);
    const [count, setCount] = useState('0');

    useEffect(() => {
        setState(props.state);
        setCount('0');
    }, [props.state])

    const handleClick = () => {
        if (count === '0') {
            setState('selected');
            setCount('1');
        }
        
        else if (count === '1') {
            setState('normal');
            setCount('0');
        }
        console.log(count); 
    }

    return (
        <div className="sub-menu-item-container">
            <button onClick={handleClick} className="sub-menu-item" id={state}>
            {props.text}
        </button>
        </div>
    );
}

SubMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}
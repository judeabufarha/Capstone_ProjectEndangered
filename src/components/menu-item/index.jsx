import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect} from "react";

export const MenuItem = (props) => {
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
        <div className="menu-item-container">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <button onClick={handleClick} className="menu-item" id={state}>
            <img src={(props.icon)} className="menu-item-icon"/>
            {props.text}
            <span class="material-icons expand-icon">expand_more</span>
        </button>
        </div>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
}
import PropTypes from "prop-types";
import "./styles.scss";
import { useState } from "react";
import { useEffect} from "react";

export const MenuItem = ({icon,text,state,expand,onClick,displayExpandIcon}) => {
    
    const [ selectedState, setSelectedState ] = useState(state)
    const [ expandState, setExpandState] = useState(expand);
    const [count, setCount] = useState('0');
    

    const displayIcon = typeof displayExpandIcon !== 'undefined' ? displayExpandIcon : true;
   
    console.log({state})

    useEffect(() => {
        
        console.log({
            text, expandState, selectedState
        })
        
    }, [])

    const handleClick = () => {

        if(onClick){
            onClick()
        }

        if (count === '0') {
            setSelectedState(true);
            setCount('1');
        }
        
        else if (count === '1') {
            setSelectedState(false);
            setCount('0');
        }
        console.log(count); 
    }

    return (
        <div className="menu-item-container">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <button onClick={handleClick} className={`menu-item ${state ? 'selected' : 'normal'}`}>
                        <img src={icon} className="menu-item-icon"/>
                        {text}
                        { displayIcon ? (<>
                            { state ? (
                            <span className="material-icons expand-icon expand-less">expand_less</span>
                        ) : (
                            <span className="material-icons expand-icon expand-more">expand_less</span>
                        )}
                        </>) : (null)}
                        
                        
            </button>
        </div>
        
    );
}

MenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    expand: PropTypes.string.isRequired
}

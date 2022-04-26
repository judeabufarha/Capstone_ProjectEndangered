import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect} from "react";
import Ripples from 'react-ripples';

/** text button component*/
export const TextButton = (props) => {
    const [colour, setColour] = useState(props.colour);
    const [hex, setHex] = useState('#01344033');

    useEffect(() => {
        setColour(props.colour);

        /**light colour style*/
        if (colour === "light") {
            setHex('#01344033');
        }
        /**dark colour style*/
        else if (colour === "dark") {
            setHex('#FFFFFF66');
        }

    }, [props.colour])

    /**handle button on click*/
    const HandleOnClick = () => {
      if(props.onClick){
        props.onClick();
      }
    }

    return (
        <div className="text-button-container">
            <div style={{display: 'inline-flex', borderRadius: 50, overflow: "hidden",}}>
                <Ripples color={hex} during={1200}>
                    <button className={props.type} disabled={props.isDisabled} onClick={HandleOnClick}>
                    {props.text}
                    </button>
                </Ripples>
            </div>
        </div>
    );
}

TextButton.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

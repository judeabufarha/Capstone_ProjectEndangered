import PropTypes from "prop-types";
import "./styles.css";
import { useState } from "react";
import { useEffect} from "react";
import Ripples from 'react-ripples';

export const TextButton = (props) => {
    const [colour, setColour] = useState(props.colour);
    const [hex, setHex] = useState('#01344033');

    useEffect(() => {
        setColour(props.colour);

        if (colour === "light") {
            setHex('#01344033');
        }
    
        else if (colour === "dark") {
            setHex('#FFFFFF66');
        }

    }, [props.colour])

    return (
        <div className="text-button-container">
            <div style={{display: 'inline-flex', borderRadius: 50, overflow: "hidden",}}>
                <Ripples color={hex} during={1200}>
                    <button id="text-button" className={props.type} disabled={props.isDisabled}>
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
    colour: PropTypes.string.isRequired
}
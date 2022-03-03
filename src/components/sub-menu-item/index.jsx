import PropTypes from "prop-types";
import "./styles.scss";

export const SubMenuItem = ({onClick,text,isEnabled}) => {

    const handleClick = () => {
        if(onClick){
          onClick();
        } 
    }

    return (
        <div className="sub-menu-item-container">
            <button onClick={handleClick} className={`sub-menu-item ${ isEnabled ? 'selected' : 'normal'}`}>
                {text}
            </button>
        </div>
    );
}

SubMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isEnabled: PropTypes.bool.isRequired
}

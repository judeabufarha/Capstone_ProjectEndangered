import PropTypes from "prop-types";
import "./styles.scss";

/** Component for sub menu item*/
export const SubMenuItem = ({onClick,text,isEnabled}) => {

    {/** handling on click */}
    const handleClick = () => {
        if(onClick){
          onClick();
        } 
    }

    /** returing a state for the item for syling */
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

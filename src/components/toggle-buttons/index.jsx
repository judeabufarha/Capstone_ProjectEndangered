import PropTypes from "prop-types";
import "./styles.scss";

import { useState, useEffect, useRef } from "react";

export const ToggleButtons = (props) => {
  console.log({ props });

  const [toggled, setToggled] = useState(true);
  const [text, setText] = useState(props.text);
  const [widthItem1, setWidthItem1] = useState(0)
  const [widthItem2, setWidthItem2] = useState(0)
  const words = props.text.split("-");
  const word1 = words[0];
  const word2 = words[1];

  const item1 = useRef(null);
  const item2 = useRef(null);

  useEffect(() => {
    setWidthItem1(item1.current.offsetWidth)
    setWidthItem2(item2.current.offsetWidth)
  },[])
  
  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  useEffect(()=> {
    console.log({toggled,widthItem1, widthItem2})
  },[toggled,widthItem1,widthItem2])

  const handleChange = () => {
    
    setToggled(!toggled);

  };

  console.log({widthItem1,widthItem2})

  return (
    <div>
      <div className="switchContaner">
        
        <input type="checkbox" className="switch" onChange={handleChange} />
        <div class="app">
          <div class="content">
            <label for="switch" className={`text-switch ${props.base}`}>
              <div class={`toggle ${props.colour} ${toggled ? "enabled" : ""}`} />
              <div class="names">
                <span ref={item1} className="item">{word1}</span>
                <span ref={item2} className="item">{word2}</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

ToggleButtons.propTypes = {
  colour: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ToggleButtons;

import PropTypes from "prop-types";

import { TextButton } from "../text-button";

import './styles.scss';

const InfoBlob = (props) => {
  const { title, text, linkText, linkFn, BgImage, butnColour} = props;
  return (
    <div className="infoBlob">
      <div className="infoBlob_image">
        <img src={BgImage} alt="" />
      </div>
      <div className="infoBlob_textFlow">
        <div className="infoBlob_title">{title}</div>
        <div className="infoBlob_text">{text}</div>
        <div className="infoBlob_link">
          <TextButton
            onClick={linkFn}
            text={linkText}
            colour="dark"
            type={butnColour}
          />
        </div>
      </div>
    </div>
  );
};

InfoBlob.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  BgImage: PropTypes.string.isRequired,
  linkFn: PropTypes.func.isRequired,
};

export default InfoBlob;

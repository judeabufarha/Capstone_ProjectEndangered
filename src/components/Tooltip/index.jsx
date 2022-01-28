import "./styles.scss";
export const Tooltip = (props) => {
  const { text, position, width } = props;
  const { title, description } = text;

  return (
    <div className="tooltip" style={{ width: `${width}px` }}>
      <div className="tooltip_wrapper">
        <div className="tooltip_title">{title}</div>
        <div className="tooltip_description">{description}</div>
        <div className="tooltip_clear"></div>
      </div>
    </div>
  );
};

export default Tooltip;

import "./styles.scss";

const TrioImg = (props) => {
  const {images} = props;

  return(
    <div className="trioImg__container">
      {images.map(item => (
        <div className="trioImg__item">{item}</div>
      ))}
    </div>
  )
}

export default TrioImg;

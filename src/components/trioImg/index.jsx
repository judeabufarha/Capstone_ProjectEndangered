import "./styles.scss";

  {/**Trio Image Component passing in images as props */}
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

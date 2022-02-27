import './styles.scss';

export const DiscusDate = ({date,image}) => {
  
  const discussDateImg = image ? image : 'https://i.ibb.co/dtKXbK4/orange-Circ.png';
  return (
  <div className="discusdate__container">
    <div className="discusdate__image">
      <img src={discussDateImg} alt={date} />
    </div>
    <div className="discusdate__string">{date}</div>
  </div>
)}



export default DiscusDate;

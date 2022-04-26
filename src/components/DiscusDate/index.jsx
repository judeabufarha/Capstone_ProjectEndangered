import './styles.scss';

 /** Exporting disk image which has props for date and image*/
export const DiscusDate = ({date,image}) => {
  
   /** Setting a default image incase nothing is passed in*/
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

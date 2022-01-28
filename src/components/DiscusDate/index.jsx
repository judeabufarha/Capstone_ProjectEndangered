import './styles.scss';

export const DiscusDate = (props) => (
  <div className="discusdate__container">
    <div className="discusdate__image">
      <img src="https://i.ibb.co/dtKXbK4/orange-Circ.png" alt={props.date} />
    </div>
    <div className="discusdate__string">{props.date}</div>
  </div>
)



export default DiscusDate;

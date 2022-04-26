
import "./style.scss"

/**Text title component */
const TextTitle = (props)=> (
  <ul className="textTitleList">
    {props.list.map(item => (
      <li>
        <h3>{item.title}</h3>
        <h1>{item.description}</h1>
      </li>
    ))}
  </ul>
)

export default TextTitle;

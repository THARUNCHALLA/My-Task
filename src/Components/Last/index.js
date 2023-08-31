import './index.css'

const Last = props => {
  const {user} = props
  const {value, display} = user
  return (
    <li className="list">
      <p className="Head1">{value}</p>
      <button type="button" className="btn">
        {display}
      </button>
    </li>
  )
}

export default Last

import './index.css'

const First = props => {
  const {userItem, displayText1, isActive12} = props
  const {displayText, optionId, istrue} = userItem

  const onclickButton = () => {
    displayText1(displayText, optionId, isActive12)
  }

  const btn12 = istrue ? 'ha' : null

  return (
    <li className="listType">
      <button
        type="button"
        className={`button1 ${btn12}`}
        onClick={onclickButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default First

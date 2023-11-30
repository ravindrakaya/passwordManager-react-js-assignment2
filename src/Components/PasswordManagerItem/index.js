import './index.css'

const PasswordManagerItem = props => {
  const {websiteDetails, isPasswordShown, onDeleteListItem} = props
  const {websiteName, userName, password, id} = websiteDetails
  const logo = websiteName[0]

  const bgClassList = [
    'bgClassName1',
    'bgClassName2',
    'bgClassName3',
    'bgClassName4',
    'bgClassName5',
    'bgClassName6',
  ]

  const bgClassName = bgClassList[Math.floor(Math.random() * 5)]

  const passwordImg = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="hashed-password"
    />
  )
  const hashedPassword = isPasswordShown ? password : passwordImg

  const onClickDeleteBtn = () => {
    onDeleteListItem(id)
  }

  return (
    <li className="list-item-container">
      <div className={`list-item-logo-container ${bgClassName}`}>{logo}</div>
      <div className="list-item-text-container">
        <p className="paragraph">{websiteName}</p>
        <p className="paragraph">{userName}</p>
        <p className="paragraph">{hashedPassword}</p>
      </div>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onClickDeleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordManagerItem

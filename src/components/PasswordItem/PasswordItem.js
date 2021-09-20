import './PasswordItem.css'

const PasswordItem = props => {
  const {passwordDetails, onDeletePassword, showStatus} = props
  const {id, website, username, password} = passwordDetails
  const firstLetter = website.split('').slice(0, 1)

  const deletePassword = () => {
    onDeletePassword(id)
  }

  return (
    <li className="details-container">
      <div className="initial-container">
        <p>{firstLetter[0].toUpperCase()}</p>
      </div>
      <div className="web-details">
        <p className="details">{website}</p>
        <p className="details">{username}</p>
        {showStatus ? (
          <p className="details">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <button
        type="button"
        testId="delete"
        onClick={deletePassword}
        className="delete-container"
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

export default PasswordItem

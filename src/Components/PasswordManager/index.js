import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import PasswordManagerItem from '../PasswordManagerItem'

class PasswordManager extends Component {
  state = {
    websiteList: [],
    websiteName: '',
    userName: '',
    password: '',
    isPasswordShown: false,
    searchInput: '',
  }

  onDeleteListItem = id => {
    const {websiteList} = this.state
    const filteredList = websiteList.filter(eachItem => eachItem.id !== id)
    this.setState({
      websiteList: filteredList,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangeWebsiteName = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onCheckboxMarked = () => {
    this.setState(prevState => ({
      isPasswordShown: !prevState.isPasswordShown,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAddBtnClicked = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const newItem = {
      id: v4(),
      websiteName,
      userName,
      password,
    }

    this.setState(prevState => ({
      websiteList: [...prevState.websiteList, newItem],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  renderWebsiteList = () => {
    const {websiteList, isPasswordShown, searchInput} = this.state
    const searchList = websiteList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (websiteList.length === 0) {
      return (
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-password-icon"
          />
          <p className="text">No Passwords</p>
        </div>
      )
    }
    return searchList.map(eachItem => (
      <PasswordManagerItem
        key={eachItem.id}
        websiteDetails={eachItem}
        isPasswordShown={isPasswordShown}
        onDeleteListItem={this.onDeleteListItem}
      />
    ))
  }

  render() {
    const {
      websiteList,
      websiteName,
      userName,
      password,
      searchInput,
    } = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-icon"
        />
        <div className="top-container">
          <form className="password-container" onSubmit={this.onAddBtnClicked}>
            <h1 className="heading">Add New Password</h1>
            <div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-field-icon"
                />
                <input
                  type="text"
                  className="text-input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsiteName}
                  value={websiteName}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-field-icon"
                />
                <input
                  type="text"
                  className="text-input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUserName}
                  value={userName}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-field-icon"
                />
                <input
                  type="password"
                  className="text-input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
            </div>
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="bottom-container">
          <div className="bottom-password-container">
            <div className="password-text-container">
              <h1 className="heading">Your Passwords</h1>
              <p className="password-count">{websiteList.length} </p>
              <div className="input-container password-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="input-field-icon"
                />
                <input
                  type="search"
                  className="text-input password-input-input"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
          <hr className="head-rise" />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="showPassword"
              className="show-password-input"
              onChange={this.onCheckboxMarked}
            />
            <label htmlFor="showPassword" className="show-password-text">
              Show Passwords
            </label>
          </div>
          <ul className="list-container">{this.renderWebsiteList()}</ul>
        </div>
      </div>
    )
  }
}
export default PasswordManager

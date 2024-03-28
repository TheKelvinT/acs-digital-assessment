import "./navbar.scss"
import SearchIcon from "../../../public/image/magnifying-glass.png"
import MenuIcon from "../../../public/image/menu-icon.png"
import CloseIcon from "../../../public/image/close-icon.png"
import { useState } from "react"
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }
  const navList = [
    {
      label: "Showcase",
      path: "#",
    },
    {
      label: "Docs",
      path: "#",
    },
    {
      label: "Blog",
      path: "#",
    },
    {
      label: "Analytics",
      path: "#",
    },
    {
      label: "Templates",
      path: "#",
    },
    {
      label: "Enterprise",
      path: "#",
    },
  ]
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo">AEON</div>
          <div className="nav-list">
            {navList.map((item) => (
              <a className="nav-item" href={item.path}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="navbar-right">
          <input
            className="search-input"
            placeholder="Search documentations..."
          ></input>
          <div className="nav-mobile">
            <img className="nav-icon" src={SearchIcon} alt="search icon" />
            <img
              className="nav-icon"
              src={showDropdown ? CloseIcon : MenuIcon}
              alt="menu icon"
              onClick={toggleDropdown}
            />
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown-menu">
          {navList.map((item) => (
            <a className="nav-item" href={item.path}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

export default Navbar

// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-header-container">
    <div className="nav-content-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-menu-container">
        <li className="menu-item">Home</li>

        <li className="menu-item">Products</li>
        <li className="menu-item">Cart</li>
      </ul>
      <button type="button" className="logout-desktop-button">
        Logout
      </button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="logout icon"
        className="logout-mobile-button"
      />
    </div>
    <div className="icons-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="icon"
      />
    </div>
  </nav>
)

export default Header

import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-header">
    <img
      className="home-logo-image"
      src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
      alt="website logo"
    />
  </div>
)

export default withRouter(Header)

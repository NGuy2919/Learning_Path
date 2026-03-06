import "./Navbar.css"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"  

function Navbar() {

return (
    <div className="menu">
      <Link to="/" className="logo">
          <img src={Logo} alt="Logo" width={45}/>
          <p className="logo-text">LearningPath</p>
      </Link>
      
      <div className="menu-r">
        <label className="search-bar">
          <input type="text" className="search-input" placeholder="Search courses"/>
          <button className="search-btn">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
          </button>
        </label>
        <ul className="menu-ul">
            <li><Link to="/" className="menu-a">Home</Link></li>
            <li><Link to="/course" className="menu-a">Course</Link></li>
            <li><Link to="/about" className="menu-a">About US</Link></li>
            <li className="btn-lr">
              <Link to="/login" className="account-btn">Login</Link>
              <Link to="/register" className="account-btn2">Register</Link>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

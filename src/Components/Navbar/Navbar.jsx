import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };



  return (
    <div>
      <div>
      <nav className='pc'>
          <h1 className='logo'>Code Wise Studio</h1>
          {/* <div className="menu" onClick={toggleMenu}>
            <i className={`fas fa-bars ${menuActive ? 'active' : ''}`}></i>
          </div> */}
          {/* <ul className={menuActive ? 'active' : ''}> */}
          <ul>
            <Link to="/" className='li'>
              <a href="">Home</a>
            </Link>

            <Link to="/service" className='li'>
              <a href="">Services</a>
            </Link>

            <Link to="/about" className='li'>
              <a href="">About</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Work</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Case student</a>
            </Link>

            <Link to="/" className='li'>
              <a href="" className='btn'>Let's talk</a>
            </Link>

            {/* <li>
              <button onClick={handleSuccessNotification}>Show Success Notification</button>
            </li>
            <li>
              <button onClick={handleErrorNotification}>Show Error Notification</button>
            </li> */}
          </ul>
        </nav>

        {/* mobile */}
        <nav className='mobile'>
          <h1 className='logo'>C W S</h1>
          <div className="menu" onClick={toggleMenu}>
            <i className={`fas fa-bars ${menuActive ? 'active' : ''}`}></i>
          </div>
          <ul className={menuActive ? 'active' : ''}>
            <Link to="/" className='li'>
              <a href="">Home</a>
            </Link>

            <Link to="/service" className='li'>
              <a href="">About</a>
            </Link>

            <Link to="/about" className='li'>
              <a href="">Pricing</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Contact</a>
            </Link>

            <Link to="/" className='li'>
              <a href="">Pages</a>
            </Link>

            <Link to="/" className='li'>
              <a href="" className='btn'>Let's talk</a>
            </Link>
          </ul>
          {/* <div className="menu" onClick={toggleMenu}>
            <i className={`fas fa-bars ${menuActive ? 'active' : ''}`}></i>
          </div> */}
        </nav>
      </div>
    </div>
  )
}

export default Navbar










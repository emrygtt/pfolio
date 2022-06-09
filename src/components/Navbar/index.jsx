import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Navbar = () => {


  const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        EY
      </a>
      <button 
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="black"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
          <li>
            <Link to="/resume"><span>Resume&Jobs</span></Link>
          </li>
          <li>
            <Link to="/contact"><span>Contact</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
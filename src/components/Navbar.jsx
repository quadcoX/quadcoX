import { useState } from 'react'
import logo from "../assets/logo.png"
import close from "../assets/close.svg"
import menu from "../assets/menu.svg"
import { navLinks } from '../constants'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const sidebarClassNames = `mobile-sidebar sidebar ${toggle ? 'm-nav-open' : 'm-nav-close'}`;
  return (
    <div className='flex-sb-c page-width'>
      <img src={logo} alt="quadcoX-logo" className='quadcoX-logo' />

      <ul className='flex-c-c nav-wrapper d-only'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={index === navLinks.length - 1 ? '' : 'nav-link'}>
            <Link to={`/${nav.id}`} className='basic-font'>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className='m-only mobile-nav'>
        <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle((prev) => !prev)} />

        <div className={sidebarClassNames}>
          <ul className='flex-c-c nav-wrapper'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={index === navLinks.length - 1 ? '' : 'm-nav-link'}>
                <a href={`/${nav.id}`} className='basic-font'>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar

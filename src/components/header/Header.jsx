import React, { useState } from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpen, setMenuOpen] = useState(false)

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className='header'>
      <img src={Logo} alt="Logo gym" className='logo' />

      {menuOpen == false && mobile == true
        ?
        <img className='bars' src={Bars} onClick={() => setMenuOpen(true)} />
        :
        <ul className='header-menu'>
          <li>
            <a onClick={handleCloseMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={handleCloseMenu} href="#programs">
              Programs
            </a>
          </li>
          <li  >
            <a href="#reasons" onClick={handleCloseMenu}>
              Why
              us
            </a>
          </li>
          <li>
            <a onClick={handleCloseMenu} href="#plans">
              Plans
            </a>
          </li>
        </ul>}
    </div>
  )
}

export default Header
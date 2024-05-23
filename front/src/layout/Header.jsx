import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import './header.css'
const Header = () => {
  return (
    <header>
      <div>
        <h1 className='Pulse'>Pulse.</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/add'}>Add</NavLink></li>
          <li>About Us</li>
          <li>Restaurant</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='Info'>
        <p className='reservation'>Reservations</p>
        <p><FaPhoneAlt /></p>
        <p> 652-345 3222 11</p>
      </div>
    </header>
  )
}

export default Header

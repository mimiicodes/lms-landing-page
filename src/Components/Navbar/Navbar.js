import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {NavLink, useLocation} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

  const NavbarTexts = [
    {page:"/", text: 'LMS Landing Page'},
    {page:"/marketing", text: 'LMS Marketing Page'},
    {page:"/courses", text: 'LMS Courses Page'},
    {page:"/pricing", text: 'LMS Pricing Page'},
    {page:"/course", text: 'LMS Course Page'},
    {page:"/about", text: 'LMS About Page'},
    {page:"/blog", text: 'LMS Blog Page'},
    {page:"/contact", text: 'LMS Contact Page'},
  ]
  const location = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState (false)
  return (
    <nav className='navigation'>
        <NavLink to='/' className="brand-name">{NavbarTexts.find(el => el.page === location.pathname)?.text}</NavLink>
        <FaBars className='hamburger' onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
        <div className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
            <ul>
                <li><NavLink className='link' to="/">Home</NavLink></li>
                <li><NavLink className='link' to="/marketing">Marketing</NavLink></li>
                <li><NavLink className='link' to="/courses">Courses</NavLink></li>
                <li><NavLink className='link' to="/pricing">Pricing</NavLink></li>
                <li><NavLink className='link' to="/course">Course</NavLink></li>
                <li><NavLink className='link' to="/about">About</NavLink></li>
                <li><NavLink className='link' to="/blog">Blog</NavLink></li>
                <li><NavLink className='link' to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
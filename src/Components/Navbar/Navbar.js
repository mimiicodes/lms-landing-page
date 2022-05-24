import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState (false)
  return (
    <nav className='navigation'>
        <a href='/' className="brand-name">LMS Landing Page</a>
        <FaBars className='hamburger' onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
        <div className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/marketing">Marketing</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li><a href="/course">Course</a></li>
                <li><a href="/course">Course</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
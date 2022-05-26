import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    const [isNavExpanded, setIsNavExpanded] = useState (false)
  return (
    <nav className='navigation'>
        <Link to='/' className="brand-name">LMS Landing Page</Link>
        <FaBars className='hamburger' onClick={() => {setIsNavExpanded(!isNavExpanded)}}/>
        <div className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/marketing">Marketing</Link></li>
                <li><Link className='link' to="/courses">Courses</Link></li>
                <li><Link className='link' to="/pricing">Pricing</Link></li>
                <li><Link className='link' to="/course">Course</Link></li>
                <li><Link className='link' to="/course">Course</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/blog">Blog</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
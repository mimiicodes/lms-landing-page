import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
	}

	useEffect(() => {

		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		}

		window.addEventListener('resize', changeWidth)

		return () => {
		window.removeEventListener('resize', changeWidth)
		}
	}, [])

	return (
		<nav>
			<h2 className="page-name">
				LMS Landing Page
			</h2>

			{(toggleMenu || screenWidth > 820) && (
				<ul className="list">
					<li className="items">Home</li>
					<li className="items">Marketing</li>
					<li className="items">Courses</li>
					<li className="items">Pricing</li>
					<li className="items">Course</li>
					<li className="items">About</li>
					<li className="items">Blog</li>
					<li className="items">Contact</li>
				</ul>
			)}
			<FaBars onClick={toggleNav} className="btn"/>
		</nav>
	)
}

export default Navbar
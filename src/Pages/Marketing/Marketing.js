import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { AiFillCaretRight } from 'react-icons/ai'
import './Marketing.css'

const Marketing = () => {
  return (
    <>
        <Navbar />
        <section className="super-classroom d-flex purple-bg">
				<div className="super-classroom-left">
					<h1 className="super-classroom-left-heading">
            Supercharge Your Classroom with a Free Trial of Divi Coding Academy
					</h1>
					<hr className='green-hr'/>
					<p className="super-classroom-left-description">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
					</p>
					<button className="view-courses button">
						VIEW ALL COURSES < AiFillCaretRight />
					</button>
				</div>
				<div className="super-classroom-right">
					<img className='super-classroom-right-img' alt='become an expert' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-02.png" />
				</div>
			</section>
    </>
  )
}

export default Marketing
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { AiFillCaretRight } from 'react-icons/ai'
import WwoData from '../../Data/WwoData'
import WwoCard from './WwoCard/WwoCard'
import './Marketing.scss'

const Marketing = () => {
	const WwoCards = WwoData.map(item => {
		return (
		<WwoCard
			key={item.id}
			{...item}
			
		/>
		)
	})

  return (
    <>
        <Navbar />
        <section className="super-classroom purple-bg">
			<div className="left">
				<h1 className="heading">
					Supercharge Your Classroom with a Free Trial of Divi Coding Academy
				</h1>
				<hr className='green-hr'/>
				<p className="description">
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
				</p>
				<button className="view-all-courses">
					VIEW ALL COURSES < AiFillCaretRight />
				</button>
			</div>
			<div className="right">
				<img className='right-img' alt='super-classroom' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-02.png" />
			</div>
		</section>
		<section className="what-we-offer">
			<div className='what-we-offer-intro'>
				<h1 className="what-we-offer-heading">What We Offer</h1>
				<center><hr className="green-hr" /></center>
				<p className="what-we-offer-description">
					Himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
				</p>
			</div>
			<div className="offered">
				{WwoCards}
			</div>
		</section>
    </>
  )
}

export default Marketing
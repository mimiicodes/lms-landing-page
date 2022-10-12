import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import './Home.scss'
import HocData from '../../Data/HocData'
import FaqData from '../../Data/FaqData'
import Card from './Card/Card'
import Tile from './Tile/Tile'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const index = () => {
	const cards = HocData.map(item => {
		return (
		<Card
			key={item.id}
			{...item}
			
		/>
		)
	})

	const tiles = FaqData.map(item => {
		return (
		<Tile
			key={item.id}
			{...item}
			
		/>
		)
	})

  	return (
		<>

			<Navbar />
			<section className="hero purple-bg">
				<div className="hero-left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
					<h1 className="hero-heading">
						Learn to Code Websites, Apps & Games
					</h1>
					<p className="hero-description">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
					</p>
					<button className="green-button">
						VIEW COURSES < AiFillCaretRight />
					</button>
				</div>
				<div className="hero-right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
					<img className='hero-right-img' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-01.png" alt="coding-isometric-01" />
				</div>
			</section>

			<section className="hundreds-of-courses">
				<div className="hundreds-of-courses-left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
					<h1 className="hundreds-of-courses-heading">
						100's of Courses
					</h1>
					<hr className='green-hr'/>
					<strong className='strong'>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra
					</strong>
					<p className="hundreds-of-courses-description">
						himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque. In pellentesque
					</p>
					<button className="purple-button">
						VIEW ALL COURSES < AiFillCaretRight />
					</button>
				</div>
				<div className="hundreds-of-courses-right">
					{cards}
				</div>
			</section>

			<section className="become-an-expert purple-bg">
				<div className="become-an-expert-left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
					<img className='become-an-expert-left-img' alt='become an expert' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-02.png" />
				</div>
				<div className="become-an-expert-right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
					<h1 className="become-an-expert-right-heading">
						Become an Expert
					</h1>
					<hr className='green-hr'/>
					<p className="become-an-expert-right-description">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
					</p>
					<button className="green-button">
						VIEW ALL COURSES < AiFillCaretRight />
					</button>
				</div>
			</section>

			<section className="learn-by-doing">
				<div className="learn-by-doing-left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
					<div className="learn-by-doing-logo">
						<img className='learn-by-doing-logo-img' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-iconArtboard-19-copy-8.jpg" alt="learn" />
					</div>
					<h1 className="learn-by-doing-heading">
						Learn by Doing
					</h1>
					<hr className='green-hr'/>
					<strong className='strong'>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					</strong>
					<p className="learn-by-doing-description">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
					</p>
				</div>
				<div className="learn-by-doing-right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
					<img className='learn-by-doing-right-img' alt='learn by doing' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-03.png" />
				</div>
			</section>

			<section className="learn-by-doing">
				<div className="ayg-right" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
					<img className='learn-by-doing-right-img p-30' alt='learn by doing' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-04.png" />
				</div>
				<div className="learn-by-doing-left" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
					<div className="learn-by-doing-logo">
						<img className='learn-by-doing-logo-img' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-iconArtboard-19-copy-9.jpg" alt="learn" />
					</div>
					<h1 className="learn-by-doing-heading">
						Build your portfolio
					</h1>
					<hr className='green-hr'/>
					<strong className='strong'>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					</strong>
					<p className="learn-by-doing-description">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
					</p>
				</div>
			</section>

			<section className="learn-by-doing">
				<div className="learn-by-doing-left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
					<div className="learn-by-doing-logo">
						<img className='learn-by-doing-logo-img' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-iconArtboard-19-copy-10.jpg" alt="learn" />
					</div>
					<h1 className="learn-by-doing-heading">
						Achieve your goals
					</h1>
					<hr className='green-hr'/>
					<strong className='strong'>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					</strong>
					<p className="learn-by-doing-description">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
					</p>
				</div>
				<div className="ayg-right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
					<img className='learn-by-doing-right-img' alt='learn by doing' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-05.png" />
				</div>
			</section>

			<section className="d-flex purple-bg testimonial">
				<div className="become-an-expert-left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
					<h1 className="become-an-expert-right-heading">
						" <br /> My entire team was prototyping by the end of the first day!
					</h1>
					<p className="become-an-expert-right-description">
						Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
					</p>
					<div className="testifier">
						<div className="testifier-img-div">
							<img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/testimonial-avatar.png" alt="testifier" />
						</div>
						<p className="testifier-p become-an-expert-right-description"><b>John Smith,&nbsp;</b>Divi Design Initiative</p>
					</div>
				</div>
				<div className="testimonial-right" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
					<img className='testimonial-img' alt='learn by doing' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-dots.png" />
				</div>
			</section>

			<section className="hundreds-of-courses">
				<div className="hundreds-of-courses-left" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
					<h1 className="hundreds-of-courses-heading">
						FAQ
					</h1>
					<hr className='green-hr'/>
					<strong className='strong'>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra
					</strong>
					<p className="hundreds-of-courses-description">
						himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque. In pellentesque
					</p>
					<button className="purple-button">
						Contact Us < AiFillCaretRight />
					</button>
				</div>
				<div className="faq-right">
					{tiles}
				</div>
			</section>

			<Footer />
		</>
  	)
}

export default index
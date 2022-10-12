import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { AiFillCaretRight } from 'react-icons/ai'
import WwoData from '../../Data/WwoData'
import WwoCard from './WwoCard/WwoCard'
import './Marketing.scss'
import Footer from '../../Components/Footer/Footer'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/effect-fade";

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
			<div className="left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
				<h1 className="heading">
					Supercharge Your Classroom with a Free Trial of Divi Coding Academy
				</h1>
				<hr className='green-hr'/>
				<p className="description">
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin scelerisque.
				</p>
				<button className="green-button">
					VIEW ALL COURSES < AiFillCaretRight />
				</button>
			</div>
			<div className="right" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
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

		<section className="popular-courses purple-bg">
			<div className='popular-courses-intro'>
				<h1 className="popular-courses-heading">Our Most Popular Courses</h1>
				<center><hr className="green-hr" /></center>
				<p className="popular-courses-description">
					Himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
				</p>
			</div>
			<div className="videos">
				<div className="each-video">
					<iframe data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000" src="https://www.youtube.com/embed/FkQuawiGWUw?autoplay=1&amp;feature=oembed" className='one-vid' title="YouTube Video Player" frameBorder="0" allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
					<iframe data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000" src="https://www.youtube.com/embed/FkQuawiGWUw?autoplay=1&amp;feature=oembed" className='one-vid' title="YouTube Video Player" frameBorder="0" allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
				</div>
				<div className="each-video">
					<iframe data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000" src="https://www.youtube.com/embed/FkQuawiGWUw?autoplay=1&amp;feature=oembed" className='one-vid' title="YouTube Video Player" frameBorder="0" allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
					<iframe data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000" src="https://www.youtube.com/embed/FkQuawiGWUw?autoplay=1&amp;feature=oembed" className='one-vid' title="YouTube Video Player" frameBorder="0" allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
				</div>
			</div>
		</section>

		<section className="people-saying">
			<div className="people-saying-intro">
				<h1 className="people-saying-heading">What People Are Saying</h1>
				<center><hr className="green-hr" /></center>
			</div>
			<div className="swiper3">
				<Swiper
					modules={[Autoplay, EffectFade, Navigation, Pagination, A11y]}
					spaceBetween={50}
					centeredSlides={true}
					autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					}}
					loop={true}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
					className="swiper"
					>
					<SwiperSlide className='swiper-slide'>
						<p className="people-saying-description">
							“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend 
							sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin
							scelerisque.”
							<br />
							<br />
							<b>David Cole, Monarch</b>
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<p className="people-saying-description">
							“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend 
							sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin
							scelerisque.”
							<br />
							<br />
							<b>David Cole, Monarch</b>
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<p className="people-saying-description">
							“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend 
							sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin
							scelerisque.”
							<br />
							<br />
							<b>David Cole, Monarch</b>
						</p>
					</SwiperSlide>
					<SwiperSlide>
						<p className="people-saying-description">
							“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend 
							sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu. Fusce porta bibendum convallis. Morbi fringilla sollicitudin
							scelerisque.”
							<br />
							<br />
							<b>David Cole, Monarch</b>
						</p>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>

		<section className="popular-courses purple-bg elevate-classroom">
			<div className='popular-courses-intro' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
				<h1 className="popular-courses-heading">Elevate Your Classroom</h1>
				<center><hr className="green-hr" /></center>
				<p className="popular-courses-description">
					Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor.
				</p>
				<button className="green-button free-trial">Start a free trial < AiFillCaretRight /></button>
			</div>
		</section>

		<Footer />
    </>
  )
}

export default Marketing
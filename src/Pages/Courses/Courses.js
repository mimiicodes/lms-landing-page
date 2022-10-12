import React from 'react'
import './Courses.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import CoursesCard from './CoursesCard/CoursesCard'
import CoursesData from '../../Data/CoursesData'

const Courses = () => {

  const cards = CoursesData.map(item => {
		return (
		<CoursesCard
			key={item.id}
			{...item}
			
		/>
		)
	})
  return (
    <>
        <Navbar />
        <section className="our-courses purple-bg">
          <div className="intro" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="our-courses-heading">
              Our Courses
            </h1>
            <p className="our-courses-description">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
            </p>
          </div>
        </section>
        <section className="courses-list">
          {cards}
        </section>
        <Footer />
    </>
  )
}

export default Courses
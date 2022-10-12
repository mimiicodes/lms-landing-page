import React,{useEffect} from 'react'
import './Course.scss'
import Navbar from  '../../Components/Navbar/Navbar'
import { AiFillCaretRight } from 'react-icons/ai'
import CourseOutlineCard from './CourseOutlineCard/CourseOutlineCard'
import CourseOutline from '../../Data/CourseOutline'
import Footer from  '../../Components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Course = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const cards = CourseOutline.map(item => {
		return (
		<CourseOutlineCard
			key={item.id}
			{...item}
			
		/>
		)
	})

  return (
    <>
        <Navbar />
        <section className="ux-design-course purple-bg">
          <div className="ux-design-course-left" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="ux-design-course-heading">
              UX Design <p>8 hours</p>
            </h1>
            <p className="ux-design-course-description">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
            </p>
            <button className="green-button">
              WATCH THE PREVIEW < AiFillCaretRight />
            </button>
          </div>
          <div className="ux-design-course-right" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
            <img alt='ux-design-course-right' className='ux-design-course-right-img' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-isometric-11.png" />
          </div>
        </section>
        <section className="course">
          <div className="course-outline">
            {cards}
          </div>
          <div className="instructor">
            <div className="instructor-card" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
              <img className='instructor-img' src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/portraits-circle-small_2.png" alt="instructor"/>
              <h2 className='instructor-name'>Jordan Reynolds</h2>
              <strong className="instructor-job-title">Instructor</strong>
              <p className="instructor-desc">
                Duis egestas aliquet maecenas erat eros, fringilla et leo eget, viverpretium. Quisque sed augue tincidunt, posuere dui tempor, dapibus nisi. Donec vel lectus sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
            <div className="instructor-button-div">
              <button className="instructor-button purple-button">
                Full Profile < AiFillCaretRight />
              </button>
            </div>
          </div>
        </section>

        <Footer />
    </>
  )
}

export default Course
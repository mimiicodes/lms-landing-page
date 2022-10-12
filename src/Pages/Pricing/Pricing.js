import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import WgeData from '../../Data/WgeData'
import WgeFaqData from '../../Data/WgeFaqData'
import EachWFaq from './EachWFaq/EachWFaq'
import WwoCard from '../Marketing/WwoCard/WwoCard'
import './Pricing.scss'
import {AiFillCaretRight} from 'react-icons/ai'

const Pricing = () => {

    const WgeFaqCards = WgeFaqData.map(item => {
		return (
		<EachWFaq
			key={item.id}
			{...item}
			
		/>
		)
	})

    const WgeCards = WgeData.map(item => {
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
        <section className="our-courses purple-bg">
          <div className="intro"data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
            <h1 className="our-courses-heading">
              Choose a Plan that Works for You
            </h1>
            <p className="our-courses-description">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
            </p>
          </div>


          <div className="price-list">
              <div className="price-list-one" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                  <h2 className="type-of-sub">
                    7 Day Trial
                  </h2>
                  <span className="access">
                    Limited Access
                  </span>

                    <div className="pricing-content pc-purple">
                            <span className="price">
                                <span className="dollar-sign">$</span>
                                <span className="sum">0</span>
                                <span className="frequency">
                                    <span className="frequency-slash">/</span>
                                    mo
                                </span>
                            </span>
                    </div>

                  <div className="pricing-benefits">
                      <li><span>Try 5 lessons in each course</span></li>
                      <li><span>No credit card required</span></li>
                      <li><span>You can upgrade anytime</span></li>
                      <li className='unavailable'><span className='unavailable'>Projects with our Cloud IDE</span></li>
                      <li className='unavailable'><span className='unavailable'>Course completion certifiicates</span></li>
                      <li className='unavailable'><span className='unavailable'>Exclusive Slack channel</span></li>
                  </div>
                  <button className="purple-button">
                      Try for free
                  </button>
              </div>


              <div className="price-list-one" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                  <h2 className="type-of-sub">
                    Premium Account
                  </h2>
                  <span className="access">
                    Unlimited Access
                  </span>

                    <div className="pricing-content pc-green">
                            <span className="price">
                                <span className="dollar-sign">$</span>
                                <span className="sum">29</span>
                                <span className="frequency">
                                    <span className="frequency-slash">/</span>
                                    mo
                                </span>
                            </span>
                    </div>

                  <div className="pricing-benefits">
                      <li><span>Get unlimited access</span></li>
                      <li><span>Test your knowledge</span></li>
                      <li><span>100+ guided projects</span></li>
                      <li><span>Projects with our Cloud IDE</span></li>
                      <li><span>Course completion certifiicates</span></li>
                      <li><span>Exclusive Slack channel</span></li>
                  </div>
                  <button className="green-button">
                      Try for free
                  </button>
              </div>


              <div className="price-list-one" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000">
                  <h2 className="type-of-sub">
                    Premium Account
                  </h2>
                  <span className="access">
                    Unlimited Access
                  </span>

                    <div className="pricing-content pc-purple">
                            <span className="price">
                                <span className="dollar-sign">$</span>
                                <span className="sum">49</span>
                                <span className="frequency">
                                    <span className="frequency-slash">/</span>
                                    mo
                                </span>
                            </span>
                    </div>

                  <div className="pricing-benefits">
                      <li><span>Get unlimited access</span></li>
                      <li><span>Test your knowledge</span></li>
                      <li><span>100+ guided projects</span></li>
                      <li><span>Projects with our Cloud IDE</span></li>
                      <li><span>Course completion certifiicates</span></li>
                      <li><span>Exclusive Slack channel</span></li>
                  </div>
                  <button className="purple-button">
                      Try for free
                  </button>
              </div>
          </div>
        </section>

        <section className="enrolling-benefits">
            <div className="intro">
                <h1 className="enrolling-benefits-heading">
                What you Get by Enrolling
                </h1>
                <center><hr className="green-hr" /></center>
                <p className="enrolling-benefits-description">
                Himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
                </p>
            </div>
            <div className="offered">
				{WgeCards}
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

        <section className="enrolling-benefits">
            <div className="intro" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <h1 className="enrolling-benefits-heading">
                FAQ
                </h1>
                <center><hr className="green-hr" /></center>
                <p className="enrolling-benefits-description">
                Himenaeos. Sed molestie, velit ut eleifend sollicitudin, neque orci tempor nulla, id sagittis nisi ante nec arcu.
                </p>
            </div>
            <div className="wge-faq-container">
				{WgeFaqCards}
			</div>
        </section>

        <Footer />
    </>
  )
}

export default Pricing
import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import './Footer.scss'

const Footer = () => {
  return (
    <section className="home-footer">
        <div className="home-footer-overlapping">
            <div className="home-footer-card come-up">
                <div className="home-footer-img">
                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_2.jpg" alt="logo"/>
                </div>
                <div className="home-footer-text">
                    <a className="home-footer-a" href="/">Free Courses</a>
                    <p className="home-footer-p">Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor.</p>
                </div>
            </div>
            <div className="home-footer-card">
                <div className="home-footer-img">
                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2017/12/coding-icon_8.jpg" alt="logo"/>
                </div>
                <div className="home-footer-text">
                    <a className="home-footer-a" href="/">Premium Courses</a>
                    <p className="home-footer-p">Duis egestas aliquet aliquet. Maecenas erat eros, fringilla et leo eget, viverra pretium nulla. Quisque sed augue tincidunt, posuere dui tempor.</p>
                </div>
            </div>
        </div>
        <div className="home-footer-content">
            <div className="home-footer-content-left">
                <h1 className='home-footer-h1'>Ready to get started</h1>
                <p className='home-footer-p2'>Get in touch, or create an account</p>
            </div>
            <div className="home-footer-content-right">
                <button className='purple-button footer-btn'>create account < AiFillCaretRight /></button>
                <button className='purple-button footer-btn'>contact us < AiFillCaretRight /></button>
            </div>
        </div>
    </section>
  )
}

export default Footer
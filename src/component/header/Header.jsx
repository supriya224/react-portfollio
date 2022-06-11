import React from 'react'
import '../header/header.css'
import CTA from '../header/CTA';
import ME from '../../assests/img3.jpg'
import HeaderSocial from './HeaderSocial';

function Header() {
  return (
    <header>
        <div className="container header-container">
            <h5>Hello I'am</h5>
            <h1>Supriya maurya</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <CTA />
            <HeaderSocial />
            <div className="me">
                <img src={ME} alt="me" />
            </div>

            {/* <a href="#contact" className='scroll-down'>Scroll Down</a> */}

        </div>
    </header>
  )
}

export default Header
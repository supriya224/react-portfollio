import React from 'react'
import '../footer/footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <ul className='parmalinks'> 
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#Experience'>Experience</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#Portfolio'>Portfolio</a></li>
        <li><a href='#Testimonial'>Testimonial</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>
      <div className="footer-social">
        <a href='https://facebook.com'><BsFacebook /></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
        <a href='https://instagram.com'> <BsInstagram /></a>
        <a href='https://email.com'><AiOutlineMail /></a>
        <a href='https://github.com'><BsGithub /></a> 
      </div>

      <div className="footer-copyright">
        <small>&copy: All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
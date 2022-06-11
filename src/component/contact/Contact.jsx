
import '../contact/contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger}from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react'
import emailjs from 'emailjs-com';
// import React,{useRef} from 'react';


function Contact() {

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_yh677u5', 'template_jbk5ik9', form.current, 'FWcrrSGpKrWEeeCsQ')
    event.target.reset();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID ')
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options"> 
          <article className="contact-option">
          <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>supriyam@gmail.com</h5>
            <a href="mailto:supriyam224@gmail.com">Send a message</a>
          </article>

          <article className="contact-option">
          <BsMessenger  className='contact_option-icon'/> 
            <h4> Facebook</h4>
            <h5>supriya Maurya</h5>
            <a href="https://facebook.com">Send a message</a>
          </article>

          <article className="contact-option">
          <BsWhatsapp   className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>+91 8081149224</h5>
            <a href="https://api.whatsapp.com/send?phone=8081149224">Send a message</a>
          </article>
        </div>

        <form ref = {form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="text" name="Email" placeholder='Your Email ID' required/>
          <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
          <button type="submit" className='btn btn-primary' onSubmit={sendEmail}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
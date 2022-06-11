import React from 'react'
import '../about/about.css'
import ME from '../../assests/img9.jpg'
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'
 
function About() {  
  return (
   <section id='about'>
     <h5> Get To Know</h5>
     <h2>
         About me
     </h2>
     <div className='container about-container'>
         <div className="about_me">
             <div className="about_me-image">
                 <img src={ME} alt="pic" />
             </div>
         </div>
         <div className="about-content">
             <div className="about-cards">

                 <article className='about-card'>
                 <FaAward className='about-icon'/>
                    <h5>Experience</h5>
                    <small> Freshar </small>
                 </article>

                 <article className='about-card'>
                 <VscFolderLibrary className='about-icon'/>
                    <h5>Projects</h5>
                    <small>5+ projects </small>
                 </article>

                 <article className='about-card'>
                 <FiUsers className='about-icon'/>
                    <h5>Clients</h5>
                    <small>0+ clients </small>
                 </article>
             </div>
             <p>
             A project is a set of tasks that must be completed in order to arrive at a particular goal or outcome.
                 Depending on the size and scope of the project, these tasks may be simple or elaborate,
              but all projects can be broken down into objectives and what needs to be done to achieve them.
             </p>
             <a href='#contact' className='btn btn-primary'>Let's Talk </a>
         </div>
     </div>
   </section>
  )
}

export default About
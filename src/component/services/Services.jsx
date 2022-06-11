import React from 'react'
import '../services/services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id='service'>
     <h5> what I Offer</h5>
     <h2>services</h2>
     <div className="container service-container">
       <article className="service">
         <div className="service-head">
           <h3>UX/UI Design</h3>
         </div>

         <ul className="service-list">
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
         </ul>
       </article>

       {/* start web development */}
       <article className="service">
         <div className="service-head">
           <h3>Web Development</h3>
         </div>

         <ul className="service-list">
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
         </ul>
       </article>
       {/* another development */}

       <article className="service">
         <div className="service-head">
           <h3>Content Creation</h3>
         </div>

         <ul className="service-list">
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
           <li>
              <AiOutlineCheck  className='service_list-icon'/>
              <p>lorem issum dolor sit ament consultant |elit.</p>
           </li>
         </ul>
       </article>
     </div>
    </section>
  )
}

export default Services
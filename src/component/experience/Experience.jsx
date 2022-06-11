import React from 'react'
import '../experience/experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          
          <h3>Frontend Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              
              <div>
                <h4>HTML</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill  className='experience_details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>  Intermediate</small>
              </div>
              
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
              <h4>JS</h4>
              <small className='text-light'> Experienced</small>
              </div>
              
            </article>

            <article className="experience_details">
              <BsPatchCheckFill  className='experience_details-icons'/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>  Intermediate</small>
              </div>
              
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>REACT JS</h4>
              <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* backend start */}
        <div className="experience-backend">
          <h3>Backend Developer</h3>
          <div className="experience_content">

            <article className="experience_details">
              <BsPatchCheckFill  className='experience_details-icons'/>
              <div>
              <h4>NODE</h4>
              <small className='text-light'> Intermediate</small>
              </div>
             
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
              <h4>MONGO DB</h4>
              <small className='text-light'> Intermediated</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill  className='experience_details-icons'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light'> Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons' />
              <div>
              <h4>POSTMEN</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>POSTMEN</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
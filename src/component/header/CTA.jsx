import React from 'react'
import RESUME from '../../assests/supriya.pdf';

export default function CTA() {
  return (
    <div className='cta'>
     <a href={RESUME} className='btn'>Download CV</a>
     <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div> 
  )
}

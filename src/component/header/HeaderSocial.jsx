import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'
import {FiFigma} from 'react-icons/fi'

export default function HeaderSocial() {
  return (
    <div className='header-social'>
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://github.com" target="blank"><BsGithub/></a>
        <a href="https://figma.com" target="blank"><FiFigma /></a>
    </div>
  )
}

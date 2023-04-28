import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer__description'>2023 TS Products All rights</p>
      <p className='footer__link'>
        <AiFillGithub className='footer__github-link'/>
        <AiFillLinkedin className='footer__linkedin-link'/>
      </p>
    </div>
  )
}

export default Footer;
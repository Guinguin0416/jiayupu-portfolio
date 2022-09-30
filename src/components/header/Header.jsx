import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jiayu Pu</h1>
        <h5 className="text-light">Master's degree candidate in Computer Science | University of Southern California</h5>
        <h5 className="text-light">Bachelor's degree in Electrical Engineering | The Ohio State University</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
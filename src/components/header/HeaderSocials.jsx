import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/jiayupu/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Guinguin0416" target="_blank"><FaGithub/></a>
        <a href="https://usc-csm.symplicity.com/profiles/jiayu.pu" target="_blank"><FaSchool/></a>

        

    </div>
  )
}

export default HeaderSocials
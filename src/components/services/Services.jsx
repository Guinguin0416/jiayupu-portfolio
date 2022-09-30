import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Study & Work On</h5>
      <h2>Experience</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Relevant Courses</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Data Structure</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Algorithm Analysis</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Object-oriented Design</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Database System</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Web/Mobile Development</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Machine Learning</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Computer Networks</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Game Design</p>
            </li>

          </ul>
        </article>


        <article className='service'>
          <div className='service_head'>
            <h3>Work Experience</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Tech Team Lead <hr/> @PLANET CENTS</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Undergraduate Researcher <hr/> @CMR Imaging Lab</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Tech Support Intern <hr/> @GAOTek</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Senior Tutor <hr/> @MSLC</p>
            </li>
            
            <li>
              <BiCheck className='service_list-icon' />
              <p>Telecommunication Dept. Intern <hr/> @Radio and Television Station </p>
            </li>

          </ul>
        </article>



        <article className='service'>
          <div className='service_head'>
            <h3>Selected Projects</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Guinguin News | Android <hr/> A Tinder-like News App</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Guinguin Food | Spring, Hibernate <hr/> Online Ordering </p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Aroundagram | Cloud, ReactJS <hr/> Social Media Remake</p>
            </li>

            <li>
              <BiCheck className='service_list-icon' />
              <p>Twinkle Star | ReactJS, D3 <hr/> Trajectory Visualization</p>
            </li>
            
            <li>
              <BiCheck className='service_list-icon' />
              <p>Catheter Ablation Prediction <hr/> Machine Learning & DSP</p>
            </li>

          </ul>
        </article>


      </div>
    </section>
  )
}

export default Service
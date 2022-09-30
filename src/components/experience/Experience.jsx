import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Programming Languages</h3>
          <div className='experience_content'>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Object-oriented Design</small>
                <hr/>
                <small className='text-light'>Data Structure & Algo</small>

              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Machine Learning</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Web Devlopment</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Socket Programming</small>
                <hr/>
                <small className='text-light'>Data Structure & Algo</small>

              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Database System</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>MATLAB</h4>
                <small className='text-light'>Scientific Computation</small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience_backend'>
          <h3>Full-stack Development</h3>
          <div className='experience_content'>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Spring</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Hibernate</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>ReactJS/NodeJS/VueJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Git CLI/GUI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>AWS/GCP/Azure</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>




      </div>
    </section>
  )
}

export default Experience
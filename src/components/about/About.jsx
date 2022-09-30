import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {RiComputerLine} from 'react-icons/ri'
import {SiResearchgate} from 'react-icons/si'
import {VscFolderLibrary} from 'react-icons/vsc'



const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className='about_cards'>
            <article className='about_card'>
              <RiComputerLine className='about_icon'/>
              <h5>Engineering</h5>
              <small>6+ years</small>
            </article>

            <article className='about_card'>
              <SiResearchgate className='about_icon'/>
              <h5>Research</h5>
              <small>2+ years</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>40+ Completed</small>
            </article>
          </div>

          <p>
          I decided to contribute my knowledge and skills to the medical field as an engineer when I
entered college, to help someone like my grandmother in the future. Working in Cardiac MRI in
my junior year made me eventually realize computer science is where I want to dive deeper.
One month before my first flight to the U.S., my grandmother fell over herself due to cerebral
thrombosis. Five years passed by, she still lies on that small bed in the hospital and completely
lost self-care ability. Being away from my hometown, I barely had a chance to take care of her in
person. The experience of working at the Cardiac MRI lab gave me the first opportunity to
contribute to the medical field as an engineer. My independent project was to predict the
success of Catheter Ablation for patients with Premature Ventricular Contractions. I used very
fundamental Python programming to build a machine learning-based classifier, which predicted
the trend among patients going through Catheter Ablation. Through this project, I figured that a
computer can act as a “brain” to process a large group of datasets, which consisting various
data features. The results from this project incredibly helped cardiologists with risk stratification
and improved diagnosis efficiency. Besides my independent project, being exposed to such a
top-tier medical imaging lab, I learned how my colleagues used more complex programming to
process a real image to improve the diagnostic accuracy of established or emerging imaging
modalities. I could see myself got more interested in exploring computer-supported medical
applications to take the diagnostic process to the next level.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about
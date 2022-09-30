import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillWechat} from 'react-icons/ai'
import {AiOutlineCalendar} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pabfncp', 'template_ka6mwht', form.current, 'ZdxQ6AWrDTADc43-7')
    e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>jiayupu@usc.edu</h5>
            <a href='mailto:jiayupu@usc.edu'>Send A Message </a>
          </article>

          <article className='contact_option'>
            <AiFillWechat className='contact_option-icon'/>
            <h4>Wechat</h4>
            <h5>jiayupu0416</h5>
            <a href='https://weixin.qq.com/'>Connect On Wechat</a>
          </article>

          <article className='contact_option'>
            <AiOutlineCalendar className='contact_option-icon'/>
            <h4>Appointment</h4>
            <h5></h5>
            <a href='https://calendly.com/simmonspu'>Schedule A Meeting </a>
          </article>
        </div>



        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
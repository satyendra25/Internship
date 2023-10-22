import React from 'react'
//import { Link, Outlet } from 'react-router-dom'
import image from './Image/contact1.png'
// import Blog from './Blog/Blog'

export default function Contact() {
  return (
    <>
      <div className="contact-section">
        <div className="contact-1">
          <div className="content-contact">
            <div className="img-contact">
              <img src={image} alt="" />
            </div>
            <div className="text-contact">
              <h2>Nevine Acotanza</h2>
              <p>Chief Operating Officer</p>
              <p>I am available for freelance work. Connect with me via and call in to my account.</p>

              <p>Phone: +0123456789</p>
              <p>Email: admin@example.com</p>
            </div>
            <div className="col-lg-6">
              <div className="social">
                <span className="title-best">FIND WID ME </span>               
              </div>
            </div>
          </div>
        </div>
        <div className="contact-2">
          <div className="contact-form-wrapper">
            <div className="introduce">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input type="text" name='name' id='name' />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="number">PHONE NUMBER</label>
                  <input type="text" name='number' id='number' />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" name='email' id='email' />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="subject">SUBJECT</label>
                  <input type="text" name='subject' id='subject' />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="message">MESSAGE</label>
                  <input type="text" name='message' id='message' />
                </div>
              </div>
              <div className="col-12">
                <button name='submit' type='submit' id='submit' className="btn">SEND ME
                  <svg xmlns="http://www.w3.org/2000/svg" height="100px" width="100px" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Blog/> */}
    </>
  )
}

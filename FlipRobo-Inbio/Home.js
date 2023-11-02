import React from 'react'
//import { Link } from 'react-router-dom'
import banner from './Image/banner-02.png'

import {SiGooglelens} from 'react-icons/si'
import {SlEnvolope} from 'react-icons/sl'
import {GrLocation} from 'react-icons/gr'
import {AiOutlineFileText} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

// import Features from './Features'

export default function Home() {

  return (
    <>
      <div className="home-container">
        <div className="order-1">
          <div className="home-content">
            <AiOutlineUser className='user-icon'/>
            <p className="banner-para">Hi, I'm <spane className="name">InBio</spane> </p>
            <p>Web designer and developer working for envato.com in Paris, France.</p>
            <div className="home-icon">
              <p><span><AiOutlineFileText/></span>Web designer & developer</p>
              <p><span><SlEnvolope/></span>john.slady@gmail.com</p>
              <p><span><GrLocation style={{color:"#f9004f"}}/></span>Paris fan</p>
            </div>
          </div>
          <div className="home-btn">
            <div className="user-info-bottom">

           
              <h2>Download my curriculum vitae:</h2>
              <button>DOWNLOAD CV</button>
              <button>CONTACT ME</button>
             </div>
          </div>
        </div>
        <SiGooglelens/>
        <div className="order-2">
          <div className="thumbnail">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

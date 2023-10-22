import React from 'react'
import { Link } from 'react-router-dom'
import banner from './Image/banner-01.png'
import icons01 from './Image/icons-01.png'
import icons02 from './Image/icons-02.png'
import icons03 from './Image/icons-03.png'
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
// import Features from './Features'

export default function Home() {

  return (
    <>
      <div className="container">
        <div className="order-1">
          <div className="index">
            <h3>WELCOME TO MY WORLD</h3>
            <p className="banner-para">Hi, I'm <spane className="name">Jone Lee</spane>  a Developer. Professional Coder.</p>
            <p className="banner-para2">I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.</p>
          </div>
          <div className="find-best-col">
          <div className="col-lg-6">
            <div className="social">
              <span className="title-best">FIND WID ME </span>
              <ul className="social-share ">
                <li className='iconcolor'><Link to="/"><FiFacebook style={{color:"#c4cfde"}}/></Link></li>
                <li ><Link className='iconcolor' to="/"><FiInstagram style={{color:"#c4cfde"}}/></Link></li>
                <li><Link className='iconcolor' to="/"> <FiLinkedin style={{color:"#c4cfde"}}/></Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="social">
              <span className="title-best">BEST SKILL ON </span>
              <ul className="best-skill-share social-share">
                <li><img src={icons01} alt="" /></li>
                <li><img src={icons02} alt="" /></li>
                <li><img src={icons03} alt="" /></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="order-2">
          <div className="thumbnail">
            <img src={banner} alt="" />
          </div>
        </div>
       
        </div>
      
      {/* <Features/> */}
    </>
  )
}

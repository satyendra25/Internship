import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from './Image/logo-vertical.png'

export default function Footer() {
 
  return (
    <>
      {/* <h2>{foot.footer}</h2> */}
      <div className="footer">
        <div className="logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="matter">
          <p>&copy;2023. All rights reserved by &nbsp;
            <Link className='rain' to='Rainbow-Themes.'>Rainbow-Themes.</Link></p>                  
        </div>
      </div>      
    </>
  )
}

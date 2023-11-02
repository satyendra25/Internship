import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from './Image/logo-vertical.png'
export default function Footer(foot) {
  return (
    <>
      <div className="footer">
        <div className="f-top">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="f-content">
            <h2></h2>
            <p></p>

          </div>
        </div>




        <div className="matter">
          <p>&copy;2023. All rights reserved by &nbsp;
            {/* <Link className='rain' to='Rainbow-Themes.'>Rainbow-Themes.</Link></p> */}
            <a className='rain' >Rainbow-Themes.</a></p>
          <br />
          {/* <Link to='link'>link</Link> 
        <Outlet/>  */}
        </div>
      </div>
      {/* <Main>
        <Routes>
           {/* <Route exact path='/instagram/' element={<SocialLink />} /> 
          
        </Routes>

      </Main> */}
      {/* <SocialLink/> */}

    </>
  )
}

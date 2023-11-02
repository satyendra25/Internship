import React from 'react'
import { Outlet, Link} from 'react-router-dom'

export default function SocialLink() {
  return (
    <div>
      {/* <h1>Social Links</h1> */}
      <Link to='link'> Instagram</Link><br/>
      <Link to='link'> Facebook</Link><br/>
      
      <Outlet/>
    </div>
  )
}

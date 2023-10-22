import React from 'react'
import logo from './Image/logo.png'
import './style.css'
// import Home from './Home'

function Navbar() {
 
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="nav">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/features">Features</a></li>                            
                            <li><a href="/port">PortFolio</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/blog">Blog</a></li>                         
                        </ul>
                    </div>
                </div>              
            </div>
                      
        </>
    )
}
export default Navbar;

import React from 'react'
import "./style.css"
import Nav from './nav';
import First from './first';

import Rental from './rental';
import Favorite from './favorite'
import Footer from './footer'

export default function index() {
    return (
        <div>
            <Nav></Nav>
            <First></First>
            <Rental></Rental>
            <Favorite></Favorite>
            <Footer></Footer>

        </div>
    )
}

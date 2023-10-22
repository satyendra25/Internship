import React, { useState} from 'react'
import Home from './Home'
import Port from './Port'
import Features from './Features'
import PortApi from './PortApi'
import Blog from './Blog/Blog'
import Contact from './Contact'
import Error from './Error'
import Footer from './Footer'
import './style.css'
import Navbar from './Navbar'
import { BrowserRouter as Main, Routes, Route } from 'react-router-dom'

function Index() {
    const [portCard, setPortData] = useState(PortApi);
    return (
        <>
            <Main>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home></Home>} />
                    <Route exact path='/features/' element={<Features />} />
                    <Route exact path='/port/' element={<Port portCard={portCard} />} />
                    <Route exact path='/contact/' element={<Contact />}>  </Route>                             
                    <Route exact path='/blog/' element={<Blog />} />
                    <Route exact path='/*' element={<Error />} />
                </Routes>               
                <Footer footer='Footer Section' />
            </Main>
        </>
    )
}
export default Index;
import React, { useState} from 'react'
import Home from './Home'
import Experience from './Experience'
import Education from './Education'
import Port from './Port'
import PortApi from './PortApi'
import Blog from './Blog/Blog'
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
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/experience/' element={<Experience />} />
                    <Route exact path='/education/' element={<Education />} />
                    <Route exact path='/port/' element={<Port portCard = {portCard}/>} />
                    <Route exact path='/blog/' element={<Blog />}> </Route>
                    <Route exact path='/*' element={<Error />} />
                </Routes>
                <Footer footer='Footer Section' />

            </Main>


        </>
    )
}
export default Index;
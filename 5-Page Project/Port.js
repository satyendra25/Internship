import React from 'react'
// import { Link } from 'react-router-dom';
// import Contact from './Contact'
import { FiArrowUpRight } from 'react-icons/fi'

const Port = ({ portCard }) => {
    return (
        <>

            {/* <div className="portpage">
                <div className="port-section">
                    <h4></h4>
                    <h1> </h1>
                </div>

                <div className="main-port">
                    {portCard.map((curElement) => {
                        return (
                            <>
                                <div className="card" key={curElement.Image}>
                                    <div className="port-image">
                                        <img src={curElement.Image} alt="" />
                                    </div>
                                    <div className="port-title">
                                        {curElement.Title}
                                    </div>

                                    <div className="port-number">
                                        {curElement.Like}
                                    </div>
                                    <div className="port-content">
                                        {curElement.Content}
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div> */}
            <div className="feature-main section-gap">
                <h4 className="subtitle-port">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                <h2 className="title-heading">My portfolio</h2>

                <div className="main-card-container">
                    {portCard.map((curElement) => {
                        return (
                            <>
                                {/* <div className="abc margin-top">
                                    <div className="box port" key={curElement.Image}>
                                        <div className="port-image">
                                            <img src={curElement.Image} alt="" />
                                        </div>
                                        <div className="port-title">

                                            <p> {curElement.Title}</p>
                                            <p className='like'><svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                                {curElement.Like}
                                            </p>
                                        </div>
                                        <div className="port-content">
                                            {curElement.Content}
                                        </div>
                                    </div>
                                </div> */}

                                <div className="inner">
                                    <div className="port">
                                        <div className="thumbnail-port">
                                            {/* <h2>Images</h2> */}
                                            <img src={curElement.Image} alt="" />
                                        </div>
                                        <div className="content-port">
                                            <div className="category-info">
                                                <div className='cont-port'>{curElement.Title} </div>
                                                <div className='heart'>
                                                    <span> {curElement.Heart}
                                                        {/* <Link to="/"> </Link> */}
                                                    </span>
                                                    {curElement.Like}
                                                </div>
                                            </div>
                                            <div className='port-row'>
                                                <h4 className='title-port'>
                                                    {curElement.Content}
                                                </h4>
                                                <span><FiArrowUpRight /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div >
            </div>
            {/* <Contact/> */}
        </>
    )
}

export default Port;
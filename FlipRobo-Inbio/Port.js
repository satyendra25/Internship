import React from 'react'
// import { Link } from 'react-router-dom';
// import Contact from './Contact'
import { FiArrowUpRight } from 'react-icons/fi'

const Port = ({ portCard }) => {
    return (
        <>         
            <div className="feature-main section-gap">
                <h4 className="subtitle-port">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                <h2 className="title-heading">My portfolio</h2>

                <div className="main-card-container">
                    {portCard.map((curElement) => {
                        return (
                            <>                             
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
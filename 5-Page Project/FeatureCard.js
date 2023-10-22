import React from 'react'
import './style.css'
import {FiArrowRight} from 'react-icons/fi'

const FeatureCard = ({ menuData }) => {
    return (
        <>
           
                <div className="feature-main section-gap">
                    <h4 className="subtitle">Features</h4>
                    <h2 className="title">What I Do</h2>

                    <div className="main-card-container">
                        {menuData.map((curElement) => {
                            return (
                                <>
                                    <div className="abc margin-top">
                                        <div className="feature-box ">
                                            <p className='logo'>{curElement.logo}</p>
                                            <h3>{curElement.title}</h3>
                                            <p className='feature-content'>{curElement.content}</p>
                                        </div>
                                         <span><FiArrowRight/></span>
                                    </div>
                                </>
                            );
                        })}
                    </div >
                </div>
            
        </>
    )
}
export default FeatureCard;
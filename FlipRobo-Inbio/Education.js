import React from 'react'
import Image from './Image/portfolio-01.jpg'

export default function Education() {
  return (
    <>
        <div className="edu-main section-gap">
            <div className="edu-top-content">
                <h1>PHD, MASTER AND BACHELO</h1>
                <p>Education</p>
            </div>
            <div className="edu-box">
                <div className="edu-img">
                    <img src={Image} alt="" />
                </div>
                <div className="edu-content">
                    <button>2015-Present</button>
                    <h2>Software development</h2>
                    <p>Co-Founder, Web Designer & Developer
                        <span>Reinvetning the way you create websites</span>
                    </p>
                </div>
                <div className="edu-btn">
                    <button>CONTACT ME</button>
                </div>
            </div>
        </div>
      
    </>
  )
}

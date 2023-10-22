import React, { Component } from 'react'
import {FiHeart} from '.react-icons/fi'
export default class portfolio extends Component {
  constructor() {
    super();
    this.portfolio = {
      portfolio: this.portfolio
    }
  }
  portfolio = [{
    Image: "Image/02.png",
    heading: "Development",
    like: 400,
    content: "The services provide for design"
  },
  {
    Image: "Image/02.png",
    heading: "Application",
    like: 800,
    content: "Mobile app landing design & app maintain"
  },
  {
    Image: "Image/02.png",
    heading: "Photoshop",
    like: 540,
    content: "Logo design creativity & Application"
  },
  {
    Image: "Image/02.png",
    heading: "Figma",
    like: 620,
    content: "Mobile app landing design & Services"
  },
  {
    Image: "Image/02.png",
    heading: "Web Design",
    like: 700,
    content: "Design for tecnology & services"
  },
  {
    Image: "Image/02.png",
    heading: "Web Design",
    like: 400,
    content: "App for tecnology & services"
  },
  ]

  render() {
    // const { Image } = this.props
    return (
      <div>
        <h4>VISIT MY portfolioFOLIO AND KEEP YOUR FEEDBACK</h4>
        <h1> My portfoliofolio</h1>
      <div className="portfolio">
          {this.state.portfolio.map((portfolio) => {
            return (
              <div className="portBox">
                {/* <img src={portfolio.Image} alt="" /> */}
                <h3>{portfolio.heading}</h3>
                <p>{portfolio.like}</p>
                <p>{portfolio.content}</p>
                <FiHeart style={{color:"#f9004d"}} />
              </div>
            )
          })}
        </div>
       
      </div>
    )
  }
}

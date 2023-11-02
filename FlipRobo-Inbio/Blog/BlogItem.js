import React, { Component } from 'react'
import '../style.css'
import { BiTime } from 'react-icons/bi'
// import { FiArrowUpRight } from 'react-icons/fi'

export default class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }
  render() {
    const { Name, content, Image, time, blogArrow } = this.props;
    return (
      <>
        <div className="container-blog">
          <a href="/"><img src={Image} alt="" /></a>
          <div className="name">
            <div className="heading-blog"><p>{Name}</p></div>
            <div className='time'>
              <p><span><BiTime /></span>
                {time}
               </p>
               </div>
          </div>
          {/* <Link className="content" to='/'>{content}<i className='feather-arrow-up-right'></i></Link> */}
          <div className='blog-row'>
            <div><a className="content" >
              {content}</a></div>
            <div className='blog-arrow'>{blogArrow}</div>
            {/* <p>Title {title} Now Time is {this.state.date.toLocaleTimeString()}</p> */}
          </div>
        </div>
      </>
    )
  }
}

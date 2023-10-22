import React, { Component } from 'react'
import BlogItem from './BlogItem'
import {FiArrowUpRight} from 'react-icons/fi'

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogList: this.blogList
        }
    }
    blogList = [
        {
            Image: "Image/01.jpg",
            Name: "CANADA",
            blog_arrow: <FiArrowUpRight/>,
            time: "5 min read",
            content: "T-shirt design is the part of design",
            url: "https://github.com/search?q=%s&ref=opensearch"
        },
        {
            Image: "Image/02.jpg",
            Name: "DEVLOPMENT",
            blog_arrow: <FiArrowUpRight/>,
            time: "2 min read",
            content: "The services provide for design",
            url: "https://www.google.co.in/search?q=%s&btnK=Google+Search&sxsrf=AOaemvIeVdaUsxQX9TVPz6Sy1Myyeh0nJw%3A1639469879995&source=hp&ei=N1O4YYHSOpCn2roP0vSS-As&iflsig=ALs-wAMAAAAAYbhhRzQ9zP0ROFA9NUYJtRNP5c_O9v1F&oq=chef&gs_lcp=Cgdnd3Mtd2l6EAEYATIECCMQJzIECCMQJzIHCC4QsQMQQzIECAAQQzIECAAQQzIECAAQQzIKCC4QxwEQ0QMQQzIECAAQQzIECAAQQzIECAAQQzoICAAQgAQQsQM6BwgAELEDEEM6BQgAEIAEOggILhCxAxCDAToECC4QQzoFCC4QgARQAFiFC2CwGGgAcAB4AIAB7gOIAe0JkgEJMC4xLjEuMS4xmAEAoAEB&sclient=gws-wiz"
        },
        {
            Image: "Image/03.jpg",
            Name: "APPLICATION",
           blog_arrow: <FiArrowUpRight/>,
            time: "2 hour read",
            content: "Mobile app landing design & app maintain",
            url: "https://www.google.co.in/search?q=%s&btnK=Google+Search&sxsrf=AOaemvIeVdaUsxQX9TVPz6Sy1Myyeh0nJw%3A1639469879995&source=hp&ei=N1O4YYHSOpCn2roP0vSS-As&iflsig=ALs-wAMAAAAAYbhhRzQ9zP0ROFA9NUYJtRNP5c_O9v1F&oq=chef&gs_lcp=Cgdnd3Mtd2l6EAEYATIECCMQJzIECCMQJzIHCC4QsQMQQzIECAAQQzIECAAQQzIECAAQQzIKCC4QxwEQ0QMQQzIECAAQQzIECAAQQzIECAAQQzoICAAQgAQQsQM6BwgAELEDEEM6BQgAEIAEOggILhCxAxCDAToECC4QQzoFCC4QgARQAFiFC2CwGGgAcAB4AIAB7gOIAe0JkgEJMC4xLjEuMS4xmAEAoAEB&sclient=gws-wiz"
        },
    ]
    render() {
        return (
            <div className="section-gap">
                <div className="myblog">
                    <p>VISIT MY BLOG AND KEEP YOUR FEEDBACK </p>
                    <h2 className='title-blog'>My Blog</h2>
                </div>
                <div className="row">
                    {this.state.blogList.map((blogList) => {
                        return (
                            <div className="blog" key={blogList.url}>
                                <BlogItem Name={blogList.Name} blogArrow={blogList.blog_arrow} time={blogList.time} content={blogList.content} Image={blogList.Image} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


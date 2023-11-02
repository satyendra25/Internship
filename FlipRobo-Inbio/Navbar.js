import logo from './Image/logo.png'
export default function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div className="navbar">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="nav">
                        <ul>
                            <li><a href="/home">HOME</a></li>
                            <li><a href="/experience">EXPERIENCE</a></li>
                            <li><a href="/education">EDUCATION</a></li>
                            <li><a href="/port">PORTFOLIO</a></li>
                            <li><a href="/blog">BLOG</a></li>
                            <li><a href="/footer">FOOTER</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

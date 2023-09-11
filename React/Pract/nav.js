import React from 'react'
import "./style.css"

export default function nav() {
    return (
        <div>
            <div className="navigation">
                <div className="logo">Prime video</div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href='#'>Home +</a>
                            <ul>
                                <li><a href='#'>All</a></li>
                                <li><a href='#'>Movies</a></li>
                                <li><a href='#'>TV shows</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Store +</a>
                            <ul>
                                <li><a href='#'>All</a></li>
                                <li><a href='#'>Rent</a></li>
                                <li><a href='#'>Channels</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Live TV</a></li>
                        <li><a href='#'>Categories +</a>
                            <ul>
                                <li><a href="#">Genres</a></li>
                                <li><a href="#">Action and adventure</a></li>
                                <li><a href="#">Anime</a></li>
                                <li><a href="#">Comedy</a></li>
                                <li><a href="#">Documentary</a></li>
                                <li><a href="#">Drama</a></li>
                                <li><a href="#">Fantasy</a></li>
                            </ul>

                        </li>
                    </ul>

                    <div className="free">Try for free</div>
                    <select className='lang'>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Urdu</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

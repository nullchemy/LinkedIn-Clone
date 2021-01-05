import React from 'react'
import './Body.css'
import Button from '@material-ui/core/Button'

function Body() {
    return (
        <div className="body">
            <div className="leftb">
                <div className="top">
                    
                </div>
                <div className="bottom">

                </div>
            </div>
            <div className="middle">
                <div className="post">
                    <div className="post-div">
                        <Button className="post-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
                        </svg>
                            Start a post</Button>
                    </div>
                    <div className="post-links">
                        <button className="post-photo">Photo</button>
                        <button className="post-video">Video</button>
                        <button className="post-event">Event</button>
                        <button className="post-article">Write Article</button>
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
            <div className="rightb">
                <div className="ads">
                    
                </div>
            </div>
        </div>
    )
}

export default Body

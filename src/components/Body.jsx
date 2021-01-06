import React from 'react'
import './Body.css'
import Button from '@material-ui/core/Button'
import advert from './img/ad.png'
import background from './img/cover.jpg'
import Avatar from './img/avtar.png'

function Body() {
    return (
        <div className="body">
            <div className="leftb">
                <div className="top">
                    <div style={{ backgroundImage: `url(${background})` }} className="cover"></div>
                    <img src={Avatar} alt="" className="avatarb"/>
                    <h4>Finn Neron</h4>
                    <p>Student at Machakos University</p>
                    <div className="connections">
                        <p>Connections <span>66</span></p>
                        <p>Grow your network</p>
                    </div>
                    <div className="connections viewed">
                        <p>Who viewed your profile <span>10</span></p>
                    </div>
                    <div className="connections">
                        <p>Access exclusive tools & insights</p>
                        <p>Try premium Free for 1 Month</p>
                    </div>
                    <div className="connections items">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                        </svg>
                           <p>My Items</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="title">
                    <p>Recent</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                    </svg></p>
                    </div> 
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                        <circle cx="8" cy="4" r="2"></circle>
                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                        </svg>
                        </p>
                        <p>React Native Developers</p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                        <circle cx="8" cy="4" r="2"></circle>
                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                        </svg>
                        </p>
                        <p>React Native</p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
                        </svg>
                        </p>
                        <p>Softwareengineering</p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
                        </svg>
                        </p>
                        <p>Softwaredevelopment</p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
                        </svg>
                        </p>
                        <p>Jobseekers</p>
                    </div>
                    <div className="title">
                    <p>Groups</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                    </svg></p>
                    </div> 
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                        <circle cx="8" cy="4" r="2"></circle>
                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                        </svg>
                        </p>
                        <p>React Native Developers</p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                        <circle cx="8" cy="4" r="2"></circle>
                        <circle cx="12.5" cy="5.5" r="1.5"></circle>
                        <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                        <circle cx="3.5" cy="5.5" r="1.5"></circle>
                        </svg>
                        </p>
                        <p>React Native</p>
                    </div>
                    <div className="see">
                        <p>See all</p>
                    </div>
                    <div className="title">
                    <p>Events</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                    </svg></p>
                    </div> 
                    <div className="title-hashtag">
                    <p>Followed Hashtags</p>
                    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                    </svg></p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
                        </svg>
                        </p>
                        <p>Softwareengineering</p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
                        </svg>
                        </p>
                        <p>Softwaredevelopment</p>
                    </div>
                    <div className="recents">
                        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
                        </svg>
                        </p>
                        <p>Jobseekers</p>
                    </div>
                    <div className="see">
                        <p>See all</p>
                    </div>
                    <div className="discover">
                        <p>Discover More</p>
                    </div>
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
                        <button className="post-photo post-button-links">
                        <svg id="post-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                            Photo</button>
                        <button className="post-video post-button-links">
                        <svg id="post-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                        </svg>
                            Video</button>
                        <button className="post-event post-button-links">
                        <svg id="post-event" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                        </svg>
                            Event</button>
                        <button className="post-article post-button-links">
                        <svg id="post-article" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                        </svg>
                            Write Article</button>
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
            <div className="rightb">
                <div className="ads">
                    <img src={advert} alt=""/>
                </div>
                <div className="footer">
                    <ul className="footer-links">
                        <li>About</li>
                        <li>Accesibility</li>
                        <li>Help Center</li>
                    </ul>
                    <ul className="footer-links">
                        <li>Privacy & Terms</li>
                        <li>Add Choices</li>
                        <li>Advertising</li>
                    </ul>
                    <ul className="footer-links">
                        <li>Business Services</li>
                        <li>Get the LinkedIn App</li>
                    </ul>
                    <ul className="footer-links">
                        <li>More</li>
                    </ul>
                    <div className="brand">
                    <svg id="footer-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" data-supported-dps="56x14" fill="currentColor" class="mercado-match" width="56" height="14" focusable="false">
                        <g>
                            <path class="background-mercado" d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
                        </g>
                    </svg>
                    <p>LinkedIn Clone © 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body

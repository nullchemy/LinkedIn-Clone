import React from 'react'
import './Body.css'
import Button from '@material-ui/core/Button'
import advert from './img/ad.png'
import background from './img/cover.jpg'
import Avatar from './img/avtar.png'
import post from './img/post.png'

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
                    <div className="content-header">
                        <div className="user-profile">
                        <div className="content-avatar">
                            <img src={Avatar} alt="Avatar"/>
                        </div>
                        <div className="user-details">
                        <h4>Finn Neron</h4>
                        <p>Iam a respectful self-motivated and gifted at finding reliable solutions for software issues.</p>
                        <div className="how-long">
                            <p>1d</p>
                            <p>.Edited.</p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                            </svg></p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <img src={post} alt="Post"/>
                    </div>
                    <div className="content-footer">
                        <div className="reactions">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" id="like-consumption-small" data-supported-dps="16x16">
                        <g fill="none" fill-rule="evenodd">
                            <rect width="16" height="16" rx="8"/>
                            <circle fill="#1485BD" cx="8" cy="8" r="7"/>
                            <path d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.18 7.18 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.77.77 0 00-.67.81c0 .14.07.63.1.8a7.62 7.62 0 001 2.2h.54-4.28a.87.87 0 00-.88.94.91.91 0 00.93.85h.16a.78.78 0 00-.76.8.81.81 0 00.74.8.8.8 0 00.33 1.42.79.79 0 00-.09.55.86.86 0 00.85.63h2.29c.3 0 .599-.038.89-.11l1.42-.42h1.9c1.02-.04 1.29-4.64.03-4.64z" fill="#E6F7FF"/>
                            <path d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .91.91 0 00.93.84h.16a.78.78 0 00-.76.8.83.83 0 00.74.81.81.81 0 00-.31.63.82.82 0 00.65.8.81.81 0 00-.09.56.86.86 0 00.85.62h2.29c.3 0 .599-.038.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0c-.05 0-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.18 7.18 0 01-1.7-2.25 2 2 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.49 1.49 0 00-.09.3 2.38 2.38 0 00.07.84c.064.288.155.569.27.84.188.353.41.688.66 1a.18.18 0 01.07.08" stroke="#004B7C" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>

                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" id="empathy-consumption-small" data-supported-dps="16x16">
                        <g fill="none" fill-rule="evenodd">
                            <rect width="16" height="16" rx="8"/>
                            <circle fill="#DF704D" cx="8" cy="8" r="7"/>
                            <path d="M7.71 5A2.62 2.62 0 004 5a2.65 2.65 0 000 3.75l4 4 4-4A2.65 2.65 0 0012 5a2.59 2.59 0 00-1.85-.77h0A2.57 2.57 0 008.3 5l-.3.3-.29-.3z" stroke="#77280C" fill="#FFF3F0"/>
                            <path d="M11.43 5.18a2 2 0 01.53.63c.9 1.67-.6 2.72-1.54 3.67-.6.61-1.22 1.22-1.85 1.8" opacity=".6"/>
                            <path d="M5.79 4.81a2.16 2.16 0 00-.79.11 1.77 1.77 0 00-1 .82A2.54 2.54 0 003.77 7a.28.28 0 000 .09" opacity=".4"/>
                            <path d="M7.71 5A2.6 2.6 0 004 5a2.65 2.65 0 000 3.7l4 4 4-4A2.65 2.65 0 0012 5a2.6 2.6 0 00-1.85-.78h0A2.58 2.58 0 008.3 5l-.3.25L7.71 5z" stroke="#77280C" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>


                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" id="support-consumption-small" data-supported-dps="16x16">
                        <mask id="reactions-support-consumption-small-a" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
                            <path d="M8 15A7 7 0 108 1a7 7 0 000 14z" fill="#fff"/>
                        </mask>
                        <g mask="url(#reactions-support-consumption-small-a)">
                            <path d="M8 15A7 7 0 108 1a7 7 0 000 14z" fill="#D8D8D8"/>
                            <path d="M8 15A7 7 0 108 1a7 7 0 000 14z" fill="#BBA9D1"/>
                            <path d="M6.545 10.617h-.133a.264.264 0 01-.073 0c-.226-.084-1.377-.523-2.149-.739a.25.25 0 01-.18-.21.685.685 0 01.107-.502A.406.406 0 014.45 9c.066 0 .133.01.196.033.153.06.296.144.422.25l.057.04.356.25c.133.092.25.172.332.235l.832.333c.113.05.582.263.556.38-.027.116-.53.106-.642.109l-.014-.013z" fill="#FEF2FF"/>
                            <path d="M15.473 14.07a24.42 24.42 0 01-3.559-.329h-.067a21.272 21.272 0 01-2.639-.512c-.768-.216-1.526-.498-2.26-.768l-.326-.118a71.16 71.16 0 01-1.776-.672l-.193-.076a7.81 7.81 0 01-.902-.397c-.403-.22-.526-.502-.35-.836v-.027a.598.598 0 01.582-.311h.045c.059-.004.117-.004.176 0 .639.065 2.488.722 2.853.853l1.193.04h.028l2.699.084c-.21-.177-.74-.492-2.032-.803-.246-.06-.47-.125-.523-.292a.65.65 0 01.235-.712c.17-.094.368-.137.565-.122a3.226 3.226 0 011.053.177c.281.09.572.15.867.18.482.066.959.165 1.425.3 1.505.377 1.796 1.082 1.986 1.509-.06-.174 0-.046.028-.112l.042-.056h.102a.852.852 0 00.13 0c.26 0 .75-.023.758-.023.123 0 .702-.134.702-.026a5.584 5.584 0 01-.67 2.953.196.196 0 01-.144.095h-.028z" fill="#EAE2F3"/>
                            <path d="M13.204 9.99a.093.093 0 00.093 0h-.093z" fill="#D67676"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.142 3.574a1.44 1.44 0 00-2.036-.027l-.023.027a1.5 1.5 0 000 2.095L6.3 7.918l2.222-2.252a1.497 1.497 0 000-2.092 1.43 1.43 0 00-2.055-.004l-.163.167-.163-.163z" fill="#ECAA96"/>
                            <path clip-rule="evenodd" d="M16.923 11.248c.116.08.121.903-.13 1.627-.25.724-1.08 1.573-1.214 1.688-.133.115-4.853-.522-5.96-.696-1.107-.174-6.28-2.588-6.487-2.698-.208-.11-.227-.898.367-1.061.593-.164 2.85.806 3.804.883.954.078 2.537.178 3.666.178s-1.304-.683-1.696-.82c-.393-.14-1.035-.314-1.083-.642-.047-.328.437-.663.759-.748.322-.085.776.086 2.02.355s1.448.115 2.448.501 1.472.968 1.583 1.176c.11.209 1.807.178 1.923.257z" stroke="#493D57"/>
                            <path d="M4.073 10.092c-.227-.614.112-1.004.516-1.084.403-.079 1.178.417 1.717.917.434.401.787.622 1.899 1.12" stroke="#493D57"/>
                            <path clip-rule="evenodd" d="M6.225 3.37a1.58 1.58 0 00-2.214.016 1.583 1.583 0 00-.026 2.216L6.4 8l2.416-2.401a1.58 1.58 0 00-1.12-2.69c-.418.002-.818.17-1.112.468L6.4 3.55l-.175-.18z" stroke="#77280C" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        <p>194</p>
                        <p className="dot">.</p>
                        <p>36</p>
                        <p>comments</p>
                        </div>
                        <div className="socials">
                            <div className="soacial-links">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                        </svg>
                            <p>Like</p>
                            </div>
                            <div className="soacial-links">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                        </svg>
                            <p>Comment</p>
                            </div>
                            <div className="soacial-links">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                        </svg>
                            <p>Share</p>
                            </div>
                            <div className="soacial-links">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                        </svg>
                            <p>Send</p>
                            </div>
                        </div>
                    </div>
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

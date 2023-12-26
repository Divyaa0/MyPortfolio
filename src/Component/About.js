import React , { useRef }from 'react'
import { FaCircle  } from "react-icons/fa6";
import './style.css'
import "./responsive.css"


function About() {
  const aboutRef = useRef(null);
  return (
    <div className='about-container' ref={aboutRef} name="about">
      <div className='about-left'>
        <h1>About Me .</h1>
        <button className='download-btn'>Download Resume</button>
      </div>
      <div className='about-right'>
        <div className='about-me-box'>
            <div className='about-me-box-upper'>
            <FaCircle style={{margin:'10px', fontSize:'20px'}} /><FaCircle  style={{margin:'10px', fontSize:'20px'}} /><FaCircle  style={{margin:'10px', fontSize:'20px'}}/>
            </div>
            <div className='about-me-box-bottom'>
              <p>I am a recent software Engineer graduate on an unwavering quest for knowledge in frontend 
                development. Passionate about creating intuitive user interfaces, my journey has led me to explore
                 React and its principle,developing ReactJS components,Routing , virtual DOM , workflow and 
                  constantly seeking to enhance my skills</p>
                 <p> Additionally, I have also worked on python for machine learning and web scraping,hands-on
                   experience with C++, where I've tackled diverse challenges. Navigating through the world of
                    databases, I've proficiently managed SQL and MongoDB. 
                  </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
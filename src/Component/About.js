import React , {  useEffect,useRef }from 'react'
import { FaCircle  } from "react-icons/fa6";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// import './App.css'; // Make sure to import your CSS file
import './style.css'
import "./responsive.css"

function About() {
  const aboutRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftDiv = leftDivRef.current;
      const rightDiv = rightDivRef.current;

      if (leftDiv && rightDiv) {
        const leftDivRect = leftDiv.getBoundingClientRect();
        const rightDivRect = rightDiv.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const scrollPosition = window.scrollY;

        if (leftDivRect.right >= 0 && leftDivRect.left <= windowWidth) {
          // Add your animation class to the left div when it is in view
          leftDiv.classList.add('animate-left');
        } else {
          // Remove the animation class when the left div is not in view
          leftDiv.classList.remove('animate-left');
        }

        if (rightDivRect.right >= 0 && rightDivRect.left <= windowWidth) {
          // Add your animation class to the right div when it is in view
          rightDiv.classList.add('animate-right');
        } else {
          // Remove the animation class when the right div is not in view
          rightDiv.classList.remove('animate-right');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove the event listener when the component unmounts
    };
  }, []);
  return (
    
    <div className='about-container' ref={aboutRef} name="about" >
      <div className='about-left left' ref={leftDivRef}>
        <h1>About Me .</h1>
        <button className='download-btn'>Download Resume</button>
      </div>
      <div className='about-right right'  ref={rightDivRef}>
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
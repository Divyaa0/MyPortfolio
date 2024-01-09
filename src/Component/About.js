import React, { useEffect, useRef } from "react";
import { FaCircle } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// import './App.css'; // Make sure to import your CSS file
import "./style.css";
import "./responsive.css";

function About() {
  const aboutRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);
  const resume_download = () => {
    const link = document.createElement("a");
    link.href = "https://divyaa-portfolio.netlify.app/DivyaSoniResume.pdf";
    document.body.appendChild(link);
    link.download = "DivyaSoniResume.pdf"; // specify the filename
    // document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="about-container" ref={aboutRef} name="about" >
      <div className="about-left left" ref={leftDivRef}  data-aos="fade-right" >
        <h1>About Me .</h1>
        <button className="download-btn" onClick={resume_download}>
          Download Resume
        </button>
      </div>
      <div className="about-right right" data-aos="fade-left" ref={rightDivRef}>
        <div className="about-me-box">
          <div className="about-me-box-upper">
            <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
            <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
            <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
          </div>
          <div className="about-me-box-bottom">
            <p>
            I am a  Software Engineering graduate on an unwavering quest for knowledge in frontend
             development. Passionate about creating intuitive user interfaces using ReactJS.
             Committed to continuous improvement, I stay updated on industry trends to deliver user-centric web experiences.
            </p>
            <p>
              {" "}
              Additionally,  I have gained practical experience in utilizing ExpressJS for API integration,
              python for machine learning and web scraping. Navigating through the world of databases,
              I've proficiently managed MySQL and MongoDB. I have applied C++ in problem-solving and strengthening my foundational programming skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

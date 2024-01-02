import { useRef,useEffect } from "react";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import React from "react";
import './style.css'
import "./responsive.css"

const Experience = () => {
  const expRef=useRef(null);
  useEffect(() => {
    scrollSpy.update(); // Update scrollSpy when the component mounts

    const handleScroll = () => {
      const aboutSection = document.getElementById('exp');

      if (aboutSection) {
        const aboutSectionTop = aboutSection.offsetTop;
        const aboutSectionHeight = aboutSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition >= aboutSectionTop - windowHeight / 2 && scrollPosition <= aboutSectionTop + aboutSectionHeight / 2) {
          // Add your animation class to the about section when it is in the middle of the viewport
          aboutSection.classList.add('animate-about');
        } else {
          // Remove the animation class when the about section is not in view
          aboutSection.classList.remove('animate-about');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove the event listener when the component unmounts
    };
  }, []);
  
  return (
    <div className="exp-container" ref={expRef} name="experience">
      <div className="exp-heading">
        <h2>Experience</h2>
        <p>Learning Beyond Classroom: Internships, Countless Lessons</p>
      </div>
      <div className="exp-box " id="exp">
        <div className="exp1">
          <div className="exp-heading-box">
            <h6>Web Developer Intern</h6>
            <h6>Feb 2021 -April 2021</h6>
          </div>
          <div className="exp-points">
            <ul>
              <li>
                {" "}
                Worked on enhancement of the website's front-end by
                incorporating diverse functionalities, contributing to an
                improved user interface.{" "}
              </li>
              <li>
                Employed HTML, CSS, and JavaScript to ensure a seamless and
                responsive design
              </li>
              <li>
                updated the website with timely and relevant information about
                upcoming events.{" "}
              </li>
              {/* <li>
                {" "}
                integrated new features into the website to elevate the visual appearence of website.
              </li> */}
            </ul>
          </div>
        </div>
        {/* 2 */}
        <div className="exp1">
          <div className="exp-heading-box">
            <h6>Software Developer Intern</h6>
            <h6>Jan 2023 -April 2023</h6>
          </div>
          <div className="exp-points">
            <ul>
              <li>
                Completed a dynamic project focused on machine learning
                algorithms and data analysis .
              </li>
              <li>
                Collaborated with a team of three members to design and
                implement a Insurance Fraud Detection Model
              </li>
              <li>
                Implemented data preprocessing techniques and data cleaning to
                ensure high-quality inputs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;

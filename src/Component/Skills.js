
import React,{useRef,useEffect} from 'react'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FaCircle  } from "react-icons/fa6";
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  const skillRef=useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='skill-container' ref={skillRef} name="skills" >
        <div className='skill-heading'>
          <h1>Skills  </h1>
          <p>Embracing a journey of continuous learning</p>
        </div>
        <div className='skill-box'id="skills">
              <div className='skill-btn' data-aos="flip-left">       
              <button class="button-53" role="button">C++</button>
              </div>
              {/*  */}
              <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">Javascript</button>
            </div>
            {/*  */}
            <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">ReactJS</button>
            </div>
            {/*  */}
            <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">MySQL</button>
            </div>
            {/*  */}
            <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">Python</button>
            </div>
            {/*  */}
            <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">Git</button>
            </div>
             {/*  */}
             <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">OOP</button>
            </div>
             {/*  */}
             <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">HTML</button>
            </div>
             {/*  */}
             <div className='skill-btn' data-aos="flip-left">       
            <button class="button-53" role="button">CSS</button>
            </div>
            {/*  */}
            
            {/*  */}
            
        </div>
      
    </div>
  )
}

export default Skills;
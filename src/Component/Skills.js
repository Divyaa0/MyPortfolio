
import React,{useRef,useEffect} from 'react'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FaCircle  } from "react-icons/fa6";
import './style.css'

function Skills() {
  const skillRef=useRef(null);

  useEffect(() => {
    scrollSpy.update(); // Update scrollSpy when the component mounts

    const handleScroll = () => {
      const skillSection = document.getElementById('skills');

      if (skillSection) {
        const skillSectionTop = skillSection.offsetTop;
        const skillSectionHeight = skillSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition >= skillSectionTop - windowHeight / 2 && scrollPosition <= skillSectionTop + skillSectionHeight / 2) {
          // Add your animation class to the about section when it is in the middle of the viewport
          skillSection.classList.add('animate-about');
        } else {
          // Remove the animation class when the about section is not in view
          skillSection.classList.remove('animate-about');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove the event listener when the component unmounts
    };
  }, []);
  return (
    <div className='skill-container' ref={skillRef} name="skills" >
        <div className='skill-heading'>
          <h1>Skills  </h1>
          <p>Embracing a journey of continuous learning</p>
        </div>
        <div className='skill-box'id="skills">
              <div className='skill-btn'>       
              <button class="button-53" role="button">C++</button>
              </div>
              {/*  */}
              <div className='skill-btn'>       
            <button class="button-53" role="button">Javascript</button>
            </div>
            {/*  */}
            <div className='skill-btn'>       
            <button class="button-53" role="button">ReactJS</button>
            </div>
            {/*  */}
            <div className='skill-btn'>       
            <button class="button-53" role="button">MySQL</button>
            </div>
            {/*  */}
            <div className='skill-btn'>       
            <button class="button-53" role="button">Python</button>
            </div>
            {/*  */}
            <div className='skill-btn'>       
            <button class="button-53" role="button">Git</button>
            </div>
             {/*  */}
             <div className='skill-btn'>       
            <button class="button-53" role="button">OOP</button>
            </div>
             {/*  */}
             <div className='skill-btn'>       
            <button class="button-53" role="button">HTML</button>
            </div>
             {/*  */}
             <div className='skill-btn'>       
            <button class="button-53" role="button">CSS</button>
            </div>
            {/*  */}
            
            {/*  */}
            
        </div>
      
    </div>
  )
}

export default Skills;
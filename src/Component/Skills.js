
import React,{useRef} from 'react'
import { FaCircle  } from "react-icons/fa6";
import './style.css'

function Skills() {
  const skillRef=useRef(null);
  return (
    <div className='skill-container' ref={skillRef} name="skills">
        <div className='skill-heading'>
          <h1>Skills  </h1>
          <p>Embracing a journey of continuous learning</p>
        </div>
        <div className='skill-box'>
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
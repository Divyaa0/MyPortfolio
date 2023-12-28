import React from "react";
import "./style-footer.css";
import './responsive.css';
import { Link as ScrollLink, Element } from "react-scroll";
import Skills from "./Skills";
const Footer=()=>
{
    return(
        <div class="bottomnav" id="myTopnav">
        <ScrollLink to="home" smooth={true} className="a">
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} className="a">
          About
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} className="a">
          Skills
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} className="a">
          Projects
        </ScrollLink>
        <ScrollLink to="experience" smooth={true} className="a">
          Experience
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} className="a">
          Contact
        </ScrollLink>
      
      </div>
    )
}
export default Footer;
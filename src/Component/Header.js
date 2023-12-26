import React from "react";
import "./style-header.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import Skills from "./Skills";

function Header() {
  return (
    <div class="topnav" id="myTopnav">
      {/* <a href="#home" class="active">Home</a>
    <a href="#news">About Me</a>
    <a href="#contact">Skills</a>
    <a href="#about">Projects</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a> */}
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
  );
}

export default Header;

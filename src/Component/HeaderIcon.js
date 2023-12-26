import React from 'react'
import './style-header.css'
import { Link as ScrollLink, Element } from "react-scroll";


function HeaderIcon() {
  return (
    <div class="topnav" id="myTopnav" name="home">
    {/* <a href="#home" class="active logo">Divya</a> */}
    <ScrollLink to="home" smooth={true} className="active logo a">
        Divya
      </ScrollLink>
    </div>
  )
}

export default HeaderIcon
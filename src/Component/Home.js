import React , { useRef } from "react";
import divya from "./imgs/divya-icon.png";
import Header from "./Header";
import HeaderIcon from "./HeaderIcon";
import About from "./About";
import SkillS from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import "./style.css";
import "./responsive.css"

function Home() {
  var wave = " 👋";
  const homeRef = useRef(null);

  return (
    <>
    <Footer/>
      <div ref={homeRef} className="home-container" to="home" name="home">
        <div className="left-container">
        <HeaderIcon/>
          <div class="card icon-bg">
            <div class="content">
              <div class="front"></div>
              <div class="back"></div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="nav">
          
            <Header />
          </div>
          <div className="texts">
            <h1 className="hi">{wave} Hi ! I am Divya </h1>
            <p className="about">
            I build <span>fun</span> and interactive things with code. Crafting a seamless user experience, I try to bring <span>ideas</span> to life in the digital sphere.
            </p>
          </div>
        </div>
      </div>
      <About />
      <SkillS/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
     
    </>
  );
}

export default Home;

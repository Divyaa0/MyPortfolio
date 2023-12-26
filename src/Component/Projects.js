import React ,{useRef} from "react";
import { useState } from "react";
import "./style.css";
import "./responsive.css"


import { FaCircle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Projects() {
  const [activeButton, setActiveButton] = useState(7);
  const [projectDetails, setProjectDetails] = useState(7);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
    setProjectDetails(buttonId);
    console.log("projectd", projectDetails, "activeD : ", activeButton);
  };
  const proRef=useRef(null);
  return (
    <div className="project-container" ref={proRef} name="projects">
      <div className="project-heading">
        <h1>Projects</h1>
        <p>Every Line, Every Day: Where Learning Meets Implementation</p>
      </div>
      <div className="project-list">
        <div className="list">
          {/* 7 */}
          <button
            role="button"
            className={`button-54`}
            style={{
              boxShadow:
                activeButton === 7
                  ? "-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px"
                  : "",
              bottom: activeButton === 7 ? "5px" : "",
              left: activeButton === 7 ? "5px" : "",
              zIndex: activeButton === 7 ? "11" : "",
            }}
            onClick={() => handleClick(7)}
          >
            Secure Flow
          </button>

          {/* 1 */}
          <button
            role="button"
            className={`button-54`}
            style={{
              boxShadow:
                activeButton === 1
                  ? "-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px"
                  : "",
              bottom: activeButton === 1 ? "5px" : "",
              left: activeButton === 1 ? "5px" : "",
              zIndex: activeButton === 1 ? "11" : "",
            }}
            onClick={() => handleClick(1)}
          >
            iData{" "}
          </button>
          {/* 2 */}
          <button
            role="button"
            className={`button-54`}
            style={{
              boxShadow:
                activeButton === 2
                  ? "-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px"
                  : "",
              bottom: activeButton === 2 ? "5px" : "",
              left: activeButton === 2 ? "5px" : "",
              zIndex: activeButton === 2 ? "11" : "",
            }}
            onClick={() => handleClick(2)}
          >
            EduMotive{" "}
          </button>
          {/* 3 */}
          <button
            role="button"
            className={`button-54`}
            style={{
              boxShadow:
                activeButton === 3
                  ? "-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px"
                  : "",
              bottom: activeButton === 3 ? "5px" : "",
              left: activeButton === 3 ? "5px" : "",
              zIndex: activeButton === 3 ? "11" : "",
            }}
            onClick={() => handleClick(3)}
          >
            Weather Wizard{" "}
          </button>
          {/*  4*/}
          <button
            role="button"
            className={`button-54`}
            style={{
              boxShadow:
                activeButton === 4
                  ? "-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px"
                  : "",
              bottom: activeButton === 4 ? "5px" : "",
              left: activeButton === 4 ? "5px" : "",
              zIndex: activeButton === 4 ? "11" : "",
            }}
            onClick={() => handleClick(4)}
          >
            Web Scraping{" "}
          </button>
          {/* 5 */}
          <button
            role="button"
            className={`button-54`}
            style={{
              boxShadow:
                activeButton === 5
                  ? "-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px"
                  : "",
              bottom: activeButton === 5 ? "5px" : "",
              left: activeButton === 5 ? "5px" : "",
              zIndex: activeButton === 5 ? "11" : "",
            }}
            onClick={() => handleClick(5)}
          >
            Salary Prediction{" "}
          </button>
          {/* 6 */}
          <button
            role="button"
            className={`button-54`}
            style={{
              boxShadow:
                activeButton === 6
                  ? "-1px 1px 0px 0px, -2px 2px 0px 0px, -3px 3px 0px 0px, -4px 4px 0px 0px, -5px 5px 0px 0px"
                  : "",
              bottom: activeButton === 6 ? "5px" : "",
              left: activeButton === 6 ? "5px" : "",
              zIndex: activeButton === 1 ? "11" : "",
            }}
            onClick={() => handleClick(6)}
          >
            NEWS APP
          </button>
        </div>

        {projectDetails == 1 ? (
          <div className="project-box-container">
            <div className="about-me-box project-box">
              <div className="project-box-upper">
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
              </div>
              <div className="project-box-bottom">
                <div className="project-description">
                  <ul>
                    <h4 className="ul-heading">Project Description</h4>
                    <li>
                      Developed a full-stack web application based on Employee
                      Data Management .
                    </li>
                    <li>
                      {" "}
                      Enables users to perform essential CRUD (Create, Read,
                      Update, Delete) operations on employee profiles through a
                      RESTful API.
                    </li>
                    <li>
                      {" "}
                      Consists features such as Employee Profile Creation ,Data
                      Validation , Profile Update feature , Deletion , API
                      Development , Database Integration .
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h5>
                    Technology : ReactJS , NodeJS , ExpressJS , MongoDB ,
                    Restful API
                  </h5>
                </div>
                <div className="project-git">
                  <h5 className="gitlink">Github Repo Link</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectDetails == 2 ? (
          <div className="project-box-container">
            <div className="about-me-box project-box">
              <div className="project-box-upper">
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
              </div>
              <div className="project-box-bottom">
                <div className="project-description">
                  <ul>
                    <h4 className="ul-heading">Project Description</h4>
                    <li>
                      Developed a Smart Career Navigator , a comprehensive
                      platform that offers key features :{" "}
                    </li>
                    <li>
                      {" "}
                      Placement Prediction: Built system that predicts ideal job
                      placements based on individual skills{" "}
                    </li>
                    <li>
                      Programming Language Courses: Created a curated library of
                      programming language courses with detailed notes on each
                      topic, providing a valuable resource for continuous
                      learning .
                    </li>
                    <li>
                      Books Finder: Integrated the Google Books API to enable
                      users to search and discover relevant books on various
                      topics, enhancing their knowledge base.
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h5>
                    Technology : PYTHON , MACHINE LEARNING , FLASK , JAVASCRIPT
                    , GOOGLE API
                  </h5>
                </div>
                <div className="project-git">
                  <h5 className="gitlink">Github Repo Link</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectDetails == 3 ? (
          <div className="project-box-container">
            <div className="about-me-box project-box">
              <div className="project-box-upper">
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
              </div>
              <div className="project-box-bottom">
                <div className="project-description">
                  <ul>
                    <h4 className="ul-heading">Project Description</h4>
                    <li>
                      {" "}
                      Provides users with real-time weather updates, including
                      the current temperature, wind speed, and the type of
                      weather (e.g., sunny, rainy, cloudy) for any city they
                      search.
                    </li>
                    <li>
                      {" "}
                      A prominent feature of the app is a digital clock that
                      shows the current time.{" "}
                    </li>
                    <li>
                      {" "}
                      Users can easily search for weather information in any
                      city of their choice.
                    </li>
                    <li>
                      {" "}
                      The app is designed with a clean and intuitive user
                      interface, making it easy for users to navigate and obtain
                      the desired weather information effortlessly.{" "}
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h5>TECHNOLOGY : REACTJS , OPENWEATHER API</h5>
                </div>
                <div className="project-git">
                  <h5 className="gitlink">Github Repo Link</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectDetails == 4 ? (
          <div className="project-box-container">
            <div className="about-me-box project-box">
              <div className="project-box-upper">
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
              </div>
              <div className="project-box-bottom">
                <div className="project-description">
                  <ul>
                    <h4 className="ul-heading">Project Description</h4>
                    <li>
                      {" "}
                      Scraped data from dynamically loaded website using Scrapy
                      and Splash.
                    </li>
                    <li>
                      {" "}
                      Implemented headless browser rendering for
                      JavaScript-dependent content, ensuring comprehensive data
                      extraction.
                    </li>
                    <li>
                      Processed and stored dynamic data for further analysis and
                      insights
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h5> TECHNOLOGY : SCRAPY SPLASH , PYTHON</h5>
                </div>
                <div className="project-git">
                  <h5 className="gitlink">Github Repo Link</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectDetails == 5 ? (
          <div className="project-box-container">
            <div className="about-me-box project-box">
              <div className="project-box-upper">
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
              </div>
              <div className="project-box-bottom">
                <div className="project-description">
                  <ul>
                    <h4 className="ul-heading">Project Description</h4>
                    <li>
                      Developed an application using Python and machine learning
                      techniques to predict salaries for software engineers.
                    </li>
                    <li>
                      {" "}
                      The core of the prediction model is based on the
                      principles of linear regression, allowing for accurate
                      estimations based on relevant features.
                    </li>
                    <li>
                      This data-driven approach ensures that the salary
                      predictions are informed by real-world factors that impact
                      software engineer salaries.
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h5> TECHNOLOGY : PYTHON , MACHINE LEARNING , FLASK</h5>
                </div>
                <div className="project-git">
                  <h5 className="gitlink">Github Repo Link</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectDetails == 6 ? (
          <div className="project-box-container">
            <div className="about-me-box project-box">
              <div className="project-box-upper">
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
              </div>
              <div className="project-box-bottom">
                <div className="project-description">
                  <ul>
                    <h4 className="ul-heading">Project Description</h4>
                    <li>
                      Utilized AJAX in JavaScript for dynamic, real-time news
                      updates, ensuring a seamless and responsive user
                      experience without page reloads.
                    </li>
                    <li>
                      Integrated with NewsAPI to fetch diverse and up-to-date
                      news content, offering users a comprehensive news feed
                      within the app.
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h5> TECHNOLOGY : JAVASCRIPT ,AJAX , NEWSAPI</h5>
                </div>
                <div className="project-git">
                  <h5 className="gitlink">Github Repo Link</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {projectDetails == 7 ? (
          <div className="project-box-container">
            <div className="about-me-box project-box">
              <div className="project-box-upper">
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
                <FaCircle style={{ margin: "10px", fontSize: "20px" }} />
              </div>
              <div className="project-box-bottom">
                <div className="project-description">
                  <ul>
                    <h4 className="ul-heading">Project Description</h4>
                    <li>
                      Implemented a robust access role management system for
                      user permissions.
                    </li>
                    <li>
                      {" "}
                      Established a multi-layered security framework, including
                      a protected URL system and JWT token authentication,
                      ensuring data integrity and user authentication.
                    </li>
                    <li>
                      {" "}
                      Applied server side caching mechanisms for accelerated
                      data retrieval ,performing access to screens based on
                      role.
                    </li>
                    <li>
                      Implemented seed data management and multiple mappings of
                      database tables to ensure data integrity
                    </li>
                    <li>
                      {" "}
                      Complete Responsive interfaces for admin and user
                      dashboard. Integrated PrimeReact library to create dynamic
                      tables with advanced functionalities.
                    </li>
                  </ul>
                </div>
                <div className="project-tech">
                  <h5> TECHNOLOGY : REACTJS, PRIMEREACT , EXPRESSJS, JWT AUTH , POSTGRESQL</h5>
                </div>
                <div className="project-git">
                  <h5 className="gitlink">Github Repo Link</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Projects;

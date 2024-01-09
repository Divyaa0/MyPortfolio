import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./style.css";
import "./responsive.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import hi from "./imgs/undraw_Contact_us_re_4qqt.png";
import { Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  // ANIMATION:
  useEffect(() => {
    AOS.init();
  }, []);
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const form = useRef();

  // EMAIL SEND LOGIC
  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm(inputVal)) {
      emailjs
        .sendForm(
          "service_hj2xbza",
          "template_bl22rvd",
          form.current,
          "r71H0rLkK03zQnbWh"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("successfull message sent");
            toast.success("Message sent !", {
              position: toast.POSITION.TOP_CENTER,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    else
    {
      toast.error("Error Present !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  const onChangeInput = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
    console.log("inputval is : ", inputVal);
  };
  const onSubmitBtn = (e) => {
    console.log("submit btn");

    // console.log(" error")
  };
  const validateForm = (inputs) => {
    let bugs = {};
    if (!inputs.name) {
      bugs.name = "Name can't be empty";
    } else if (inputs.name > 25) {
      bugs.name = "Name is too long (maximum 25 characters)";
    }
    if (!inputs.email) {
      bugs.email = "Email can't be empty !";
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      bugs.email = "Incorrect Email !";
    }
    if (!inputs.message) {
      bugs.message = "Write Something ..!";
    } else if (inputs.message.length > 300) {
      bugs.message = "Message is too long (maximum 300 characters)";
    }
    setError(bugs);
    console.log("bugs present :", bugs);
    return Object.keys(bugs).length === 0;
  };
  const git=()=>{ window.open('https://github.com/Divyaa0');}
  const linkedin=()=>{ window.open('https://www.linkedin.com/in/divya-soni-546a011b8/');}
  // const insta=()=>{ window.location.replace('https://www.linkedin.com/in/divya-soni-546a011b8/');}

  return (
    <Element name="contact">
      <div className="contact-container " id="skills">
        <ToastContainer />
        <div className="contact-heading">
          <h1>Contact</h1>
          <p>Let's Connect and Collaborate!</p>
        </div>
        <div className="contact-box" data-aos="fade-up">
          <div className="contact-box1">
            <div className="contact-img"></div>
          </div>
          <div className="contact-box2">
            <div className="contact-form">
              <div className="contact-form-heading">
                <h2>
                  Pop me an email at{" "}
                  {/* <span className="mail"> divyasoni1515@gmail.com</span> */}
                  <a className="mail" href="mailto:divyasoni1515@gmail.com">divyasoni1515@gmail.com</a>
                </h2>
                <div className="social-media">
                  <h3 className="github" onClick={git} >
                    <FaGithub />
                  </h3>
                  <h3 className="linkedin" onClick={linkedin}>
                    <FaLinkedin />
                  </h3>
                  {/* <h3 className="insta" onClick={insta}>
                    <FaInstagram />
                  </h3> */}
                </div>
              </div>
              <div className="contact-form-inputs">
                <form ref={form} onSubmit={sendEmail}>
                  <div class="row">
                    <div class="col-25">
                      <label for="fname">Name</label>
                    </div>
                    <div class="col-75">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name.."
                        onChange={onChangeInput}
                        value={inputVal.name}
                      />
                      {error.name ? (
                        <p className="error-class">{error.name}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-25">
                      <label for="fname">Email</label>
                    </div>
                    <div class="col-75">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email.."
                        onChange={onChangeInput}
                        value={inputVal.email}
                      />
                      {error.email ? (
                        <p className="error-class">{error.email}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-25">
                      <label for="subject">Message</label>
                    </div>
                    <div class="col-75">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write something.."
                        style={{ height: "100px" }}
                        onChange={onChangeInput}
                        value={inputVal.message}
                      ></textarea>
                      {error.message ? (
                        <p className="error-class">{error.message}</p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div class="row">
                    <input type="submit" value="Send" onClick={onSubmitBtn} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Contact;

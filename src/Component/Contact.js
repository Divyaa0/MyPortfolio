import React,{useState} from "react";
import "./style.css";
import "./responsive.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hi from "./imgs/undraw_Contact_us_re_4qqt.png";
import { Element } from 'react-scroll'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
const Contact = () => {
 const [inputVal,setInputVal]=useState({email:"" , message:""})
 const [error,setError]=useState({});
 const  onChangeInput=(e)=>
 {
  setInputVal({...inputVal,[e.target.name]:e.target.value})
  console.log("inputval is : ",inputVal)
 }
 const onSubmitBtn=(e)=>
 {
  console.log("submit btn")
  if(validateForm(inputVal))
  {
   
   
  }
  toast.error("Error Present !", {
    position: toast.POSITION.TOP_CENTER,
  });
  // console.log(" error")

 }
 const validateForm=(inputs)=>
 {
  let bugs={};
  if(!inputs.email)
  {
    bugs.email="Email can't be empty !";
  }
  else if(!/\S+@\S+\.\S+/.test(inputs.email))
  {
    bugs.email="Incorrect Email !";
  }
  if(!inputs.message)
  {
    bugs.message="Write Something ..!"
  }
  else if(inputs.message.length>300)
  {
    bugs.message="Message is too long (maximum 300 characters)"
  }
  setError(bugs)
  console.log("bugs present :",bugs)
  return Object.keys(bugs).length===0
 }
  return (
    <Element  name='contact'>
    <div className="contact-container">
    <ToastContainer/>
      <div className="contact-heading">
        <h1>Contact</h1>
        <p>Let's Connect and Collaborate!</p>
      </div>
      <div className="contact-box">
        <div className="contact-box1">
          <div className="contact-img"></div>
        </div>
        <div className="contact-box2">
          <div className="contact-form">
            <div className="contact-form-heading">
              <h2>Pop me an email at <span className="mail"> divyasoni1515@gmail.com</span></h2>
              <div className="social-media">
                <h3>
                  <FaGithub />
                </h3>
                <h3>
                  <FaLinkedin />
                </h3>
                <h3>
                  <FaInstagram />
                </h3>
              </div>
            </div>
            <div className="contact-form-inputs">
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
                  {error.email?<p className="error-class">{error.email}</p>:''}
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
                {error.message ? <p className="error-class">{error.message}</p> :""}

                </div>
              </div>
              <div class="row">
                <input type="submit" value="Submit" onClick={onSubmitBtn} />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};
export default Contact;

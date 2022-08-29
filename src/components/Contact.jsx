// eslint-disable-next-line
import React, { useState, useEffect, CSSProperties } from "react";
import emailjs from '@emailjs/browser';
// eslint-disable-next-line
import { SMTPClient } from '@emailjs/browser';
import './sender.css';
import { render } from "@testing-library/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { height, width } = useWindowDimensions();

  return windowDimensions;
}








function ContactSimple() {

  const [home, setHome] = useState(false);
  const [show, setShow] = useState(true);
  const [loadingInProgress, setLoading] = useState(true);
  useEffect(() => {
    if (loadingInProgress) {
      setTimeout(() => {
      setLoading(false);
    }, 2500);
    }
  }, [loadingInProgress]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
      setShow(false);
    }, 2000);
    }
  }, [show]);

  useEffect(() => {
    if (home) {
      setTimeout(() => {
      setHome(true);
    }, 2500);
    }
    else {
      setTimeout(() => {
      setHome(true);
    }, 2500);
    }
  }, [home]);

  const [text, setText] = useState(true);
  
  console._log_old = console.log
  console.log = function(msg) {
    if (msg=='Navbar opened'){
      setText(false)
    }
    else if (msg=='Navbar closed'){
      setText(true)
    }
  }
  return (
    
    <div className="contact gwarp">

      {show && <div className="loader-container fill-window gwarp">
        <ClimbingBoxLoader class="boxloader" color="#ffffff" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}

      {home && <div className="loader-container fill-window gwarp">
        <div class="container">
          <div class="row align-items-center my-5">
            {text && <div class="col-lg-10">
              <h2 class="heading white">Contact Me ↓</h2>

              <div class="box transbox widtha">

              <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mleveydk" method="post">
                <fieldset id="fs-frm-inputs">
                  <label for="full-name" class="text">Your name: ⠀</label>
                  <input size="20" type="text" name="Name" class='input textinput' id="full-name" required/>
                  <p>________________________________________________________________________________________</p>
                  <label for="email-address" class="text">Your email: ⠀</label>
                  <input size="35" type="email" name="Email" id="email-address" class='input textinput' required="@"/>
                  <p>________________________________________________________________________________________</p>
                  <label class="text">Message: ⠀</label>
                  <textarea cols="70" rows="3" name="Message" id="message" class='input textinput' required></textarea>
                  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                </fieldset>
                <p>________________________________________________________________________________________</p>
                <input type="submit" class="but" value="Submit"/>
                <p>___________________________________________________________</p>
                <h6 class="messa">ᴹᵉˢˢᵃᵍᵉ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ˢᵉⁿᵗ ᵘⁿˡᵉˢˢ ᵃˡˡ ᶠᶦᵉˡᵈˢ ᵃʳᵉ ᶠᶦˡˡᵉᵈ</h6>
                <p> </p>
                
              </form>
              </div>

                    </div>}
            
          </div>
        </div>
      </div>
}
    </div>
    
  );
}
export default ContactSimple;
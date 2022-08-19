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


  

  return (
    
    <div className="contact">

      {show && <div className="loader-container fill-window">
        <ClimbingBoxLoader class="boxloader" color="#5bc0de" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}

      {home && <header className=" ">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <h2 class="heading blue">Contact Me ↓</h2>
              
              <h6 class="text">.</h6>
              <h6 class="text">.</h6>













            
            












              <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/mleveydk" method="post">
                <fieldset id="fs-frm-inputs">
                  <label for="full-name" class="text">Your name: `</label>
                  <input size="20" type="text" name="Name" class='input textinput' id="full-name" required/>
                  <p>________________________________________________________________________________________</p>
                  <label for="email-address" class="text">Your email: `</label>
                  <input size="35" type="email" name="Email" id="email-address" class='input textinput' required="@"/>
                  <p>________________________________________________________________________________________</p>
                  <label for="Message" class="text">Message: </label>
                  <textarea cols="70" rows="3" name="Message" id="message" class='input textinput' required></textarea>
                  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                </fieldset>
                <p>________________________________________________________________________________________</p>
                <input type="submit" class="button button3" value="Submit"/>
                <p>___________________________________________________________</p>
                <h6 class="messa">ᴹᵉˢˢᵃᵍᵉ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ˢᵉⁿᵗ ᵘⁿˡᵉˢˢ ᵃˡˡ ᶠᶦᵉˡᵈˢ ᵃʳᵉ ᶠᶦˡˡᵉᵈ</h6>
                <p> </p>
                <p>_____________________________________________________________________________________________________</p>
              </form>
              

                    </div>
            
          </div>
        </div>
      </header>
}
    </div>
    
  );
}
export default ContactSimple;
// eslint-disable-next-line
import React, { useState, useEffect, CSSProperties } from "react";
import emailjs from '@emailjs/browser';
// eslint-disable-next-line
import { SMTPClient } from '@emailjs/browser';
import './sender.css';
import { render } from "@testing-library/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const to_name="R7uar-a8o4NmnCJXJ"










function send() {


  
  
  const api_key= "template_39znrxn"

  const bton = document.getElementById('button');
  document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    render(bton.value = 'Sending...')
    emailjs.sendForm("service_ozrjohk", api_key, this, to_name)
      .then(() => {
        render(bton.value = 'Send Email');
        alert('Sent!');
        render(window.location.reload());
      }, (err) => {
        render(bton.value = 'Error');
        console.log(JSON.stringify(err));
        alert(err);
        render(window.location.reload());
      });
  });
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


  
  
  
  emailjs.init(to_name)
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
              <h6 class="text">Under construction</h6>

              

            
                    </div>
            
          </div>
        </div>
      </header>
}
    </div>
    
  );
}
export default ContactSimple;
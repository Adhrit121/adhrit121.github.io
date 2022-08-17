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
              <h2 class="heading blue">Contact Me ↓(Not working)</h2>
              
              <h6 class="text">.</h6>
              <h6 class="text">.</h6>

              
              <form required id="form">
              <div class="field">
                <label for="Your_name" class="text">Your name: `</label>
                <input size="20" type="text" name="Your_name" id="Your_name" class='input textinput'></input>
              </div>
              <p>_____________________________________________________________________________________________________</p>
              <div class="field">
                <label for="Your_email" class="text">Your email: `</label>
                <input size="35" type="email" name="Your_email" id="Your_email" class='input textinput'></input>
              </div>
              <p>_____________________________________________________________________________________________________</p>
              <div class="field">
                <label for="message" class="text">Message: `</label>
                <input size="50" type="textbox" name="message" id="message" class='input textinput'></input>
              </div>
              <p>_____________________________________________________________________________________________________</p>
              <button id="button" class="button button3" onClick={send}>Send Email</button>
            </form>
            <p>  </p>
            <p>  </p>
            <p>___________________________________________________________</p>
            <p class="messa">ᴹᵉˢˢᵃᵍᵉ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ˢᵉⁿᵗ ᵘⁿˡᵉˢˢ ᵃˡˡ ᶠᶦᵉˡᵈˢ ᵃʳᵉ ᶠᶦˡˡᵉᵈ</p>
            <script src="https://smtpjs.com/v3/smtp.js"></script>
            <script type="text/javascript"
              src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
            
            <script type="text/javascript">
              
              emailjs.init(to_name)
            </script> 
            
            
                    </div>
            
          </div>
        </div>
      </header>
}
    </div>
    
  );
}
export default ContactSimple;
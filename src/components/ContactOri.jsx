// eslint-disable-next-line
import React, { useState, useEffect, CSSProperties } from "react";
import emailjs from '@emailjs/browser';
// eslint-disable-next-line
import { SMTPClient } from '@emailjs/browser';
import './sender.css';
import { render } from "@testing-library/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Terminal from 'terminal-in-react';
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

function Contact() {

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
  const queryParams = new URLSearchParams(window.location.search);
  const color = queryParams.get('color');
  return (
    
    <div className="contact">

      {show && <div className="loader-container fill-window">
        <ClimbingBoxLoader class="boxloader" color="#5bc0de" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}

      {home && <header className=" ">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
            <Terminal
            watchConsoleLogging
            color={color}
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{
                color: {
                  method: (args, print, runCommand) => {
                    print(`The color is ${args._[0] || args.color}`);
                    window.open("/projects/?color="+`${args._[0] || args.color}`, "_self");
                    
                  },
                  
                  options: [
                    {
                      name: 'color',
                      description: 'The color the output should be',
                      defaultValue: 'green',
                    },
                  ],
                },
                'type': (args, print, runCommand) => {
                  const text = args.slice(1).join(' ');
                  print('');
                  for (let i = 0; i < text.length; i += 1) {
                    setTimeout(() => {
                      runCommand(`edit-line ${text.slice(0, i + 1)}`);
                    }, 100 * i);
                  }
                  
                },
                'about': () => window.open('/about', "_self"),
                'contact': () => window.open('/contact', "_self"),
                'this.code': () => window.open('https://github.com/Adhrit121/adhrit.vip', "_self"),
                
                
            }}
            actionHandlers={{
                handleClose: (toggleClose) => {
                render(window.location.reload());
                }}}
            descriptions={{
                ' ' : ' ',
                ' ' : ' ',
                'about' : 'about me',
                'contact' : 'contact me',
                'type' : 'types in the given word    Ex:"ᴛʏᴘᴇ ʜᴇʟʟᴏ" ᴛʏᴘᴇs ɪɴ "ʜᴇʟʟᴏ"',
                'this.code' : 'code for this website',
                'clear' : 'clears the terminal'
                

            }}
            msg='Hi :),Type "help" to get a list of all the commands'
          />
            
                    </div>
            
          </div>
        </div>
      </header>
}
    </div>
    
  );
}
export default Contact;


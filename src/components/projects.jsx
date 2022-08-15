import React, { useState, useEffect} from 'react';
import './Home.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Terminal from 'terminal-in-react';
import {render} from '@testing-library/react';

function isEmpty(value){
  return (value == null || value.length === 0);
}
function ProjectsSimple() {


  

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [home, setHome] = useState(false);
  const [show, setShow] = useState(true);
  const [loadingInProgress, setLoading] = useState(true);
  useEffect(() => {
    if (loadingInProgress) {
      setTimeout(() => {
      setLoading(false);
    }, 2010);
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
    }, 2005);
    }
    else {
      setTimeout(() => {
      setHome(true);
    }, 2005);
    }
  }, [home]);

  const queryParams = new URLSearchParams(window.location.search);
  const color = queryParams.get('color');
  const x=isEmpty(color)
  if (x==true){
    color='green'
  }
  return (
    //Add this to get background with autochange:↓(still under development)
    //style={{backgroundImage: `url(${imageUrl})` ,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '98.7vw',height: '100vh',headerTransparent:'true'}}
    <div className="home" >
      {show && <div className="loader-container fill-window">
        <ClimbingBoxLoader class="boxloader" color="#5bc0de" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}
      {home && <header className='  '>
        <div class="container">
          
          <div class="row align-items-center my-5">
            <div class="col-lg-5">
              <h2 class="heading blue">Projects</h2>
              <p>
                  
              </p>
            </div>
          </div>


          <div >
          <Terminal
            watchConsoleLogging
            class='bash'
            color={color}
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{
                color: {
                  method: (args, print, runCommand) => {
                    print(`The color is ${args._[0] || args.color}`);
                    window.open("/#/projects/?color="+`${args._[0] || args.color}`, "_self");
                    
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
                'about': () => window.open('/#/about', "_self"),
                'contact': () => window.open('/#/contact', "_self"),
                'this.code': () => window.open('https://github.com/Adhrit121/adhrit.vip', "_self"),
                
                
            }}
            actionHandlers={{
                handleClose: (toggleClose) => {
                render(window.location.reload());
                }}}
            descriptions={{
                'about' : 'about me',
                'contact' : 'contact me',
                'color' : 'changes text color    Ex:"ᴄᴏʟᴏʀ ʙʟᴜᴇ" ᴄʜᴀɴɢᴇs ᴛᴇxᴛ ᴄᴏʟᴏʀ ᴛᴏ ʙʟᴜᴇ',
                'type' : 'types in the given word    Ex:"ᴛʏᴘᴇ ʜᴇʟʟᴏ" ᴛʏᴘᴇs ɪɴ "ʜᴇʟʟᴏ"',
                'this.code' : 'code for this website',
                'clear' : 'clears the terminal'
                

            }}
            msg='Hi :),Type "help" to get a list of all the commands'
          />
        </div>
        </div>
      </header>
}
    </div>
  );
}

export default ProjectsSimple;
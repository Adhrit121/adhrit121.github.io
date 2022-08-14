import React, { useState, useEffect, CSSProperties, createContext } from 'react';
import './Home.css';
import desktopImage from './desktop.jpg';
import mobileImage from './mobile.jpg';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Terminal from 'terminal-in-react';
import {render} from '@testing-library/react';


function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);




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
  return (
    //Add this to get background with autochange:↓(still under development)
    //style={{backgroundImage: `url(${imageUrl})` ,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '98.7vw',height: '100vh',headerTransparent:'true'}}
    <div className="home" >
      {show && <div className="loader-container fill-window">
        <ClimbingBoxLoader class="boxloader" color="#5bc0de" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}
      {home && <header>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5">
            <Terminal
            className='bash'
            watchConsoleLogging
            color={color}
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            commands={{
                color: {
                  method: (args, print, runCommand) => {
                    print(`The color is ${args._[0] || args.color}`);
                    window.open("/about/?color="+`${args._[0] || args.color}`, "_self");
                    
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

export default Home;
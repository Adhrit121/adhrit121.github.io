import React, { useState, useEffect} from 'react';
import './Home.css';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Terminal from 'terminal-in-react';
import {render} from '@testing-library/react';
import { useSearchParams } from "react-router-dom"
const Results = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const color = searchParams.get('color')
  console.log(color)

}
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

  return windowDimensions;
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



  const [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get('color')






  const { height, width } = useWindowDimensions(); 
  const [num, setNum] = useState(0);

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
    //Add this to get background with autochange:↓(still under development)
    //style={{backgroundImage: `url(${imageUrl})` ,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '98.7vw',height: '100vh',headerTransparent:'true'}}
    <div className="home gwarp" >
      {show && <div className="loader-container fill-window gwarp">

        <ClimbingBoxLoader class="boxloader" color="#FFFFFF" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}
      {home && <div className='loader-container fill-window gwarp'>
        <div class="container">
          
          <div class="row align-items-center my-5">
            {text && <div class="col-lg-10">
              <h2 class="heading white">Projects</h2>
              <p>
                  
              </p>
          


            <div class="box transbox" style={{ height: '150%'}}>
            
              <Terminal
                watchConsoleLogging
                class='bash mini blah'
                color={color}
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" , height: '72%'}}
                commands={{
                    color : {
                      method: (args, print, runCommand) => {
                        print(`The color is ${args._[0] || args.color}`);
                        window.open("/#/projects?color="+`${args._[0] || args.color}`, "_self");
                        
                      },
                      
                      options: [
                        {
                          name: 'color',
                          description: 'The color the output should be',
                          defaultValue: 'green',
                        },
                      ],
                    },
                    type: (args, print, runCommand) => {
                      const text = args.slice(1).join(' ');
                      print('');
                      for (let i = 0; i < text.length; i += 1) {
                        setTimeout(() => {
                          runCommand(`edit-line ${text.slice(0, i + 1)}`);
                        }, 100 * i);
                      }
                      
                    },
                    about : () => window.open('/#/about', "_self"),
                    contact : () => window.open('/#/contact', "_self"),
                    'original' : () => window.open('http://old.adhrit.vip', "_self")
                    
                    
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
                    'clear' : 'clears the terminal',
                    'original' : 'opens the original version of this website'
                    

                }}
                msg='Hi :),Type "help" to get a list of all the commands'
              />
            </div>
          </div>}
        </div>
        </div>
      </div>
}
    </div>
  );
}

export default ProjectsSimple;
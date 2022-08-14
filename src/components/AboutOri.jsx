import React,{ useState, useEffect, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./about.css"
import Terminal from 'terminal-in-react';
import {render} from '@testing-library/react';
function About() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
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
  var color = queryParams.get('color');
  if (color==''){
    color='green';
  };
  return (
    <div className="about">
      {show && <div className="loader-container fill-window">
        <ClimbingBoxLoader class="boxloader" color="#5bc0de" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}
      {home && <header className='  '>
        <div class="container">
          <div class=" align-items-center my-5">
            
            
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
        <center><p class="bottomfly">Cᴏᴅᴇ ғᴏʀ ᴛʜɪs ᴡᴇʙsɪᴛᴇ: </p><a onClick={() => openInNewTab('https://github.com/Adhrit121/adhrit.vip')} class="weblink">ᴳᶦᵗʰᵘᵇ</a></center>
      </header>
}
    </div>
  );
}

export default About;
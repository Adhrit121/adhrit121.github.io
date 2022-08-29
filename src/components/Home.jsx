import React, { useState, useEffect, CSSProperties, createContext } from 'react';
import './Home.css';
import desktopImage from './desktop.jpg';
import mobileImage from './mobile.jpg';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



function PhoneAlert(){
  const { height, width } = useWindowDimensions();  
  if (height > 767 || width > 1024){
  }else{alert("This website works best on large screens and you may face some issues on this device");};
  
  
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

function HomeSimple() {
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
  const [text, setText] = useState(true);
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
  const { height, width } = useWindowDimensions(); 
  const [num, setNum] = useState(0);

  useEffect(() => {
    // 👇️ only runs once
    console.log('Phone alert...'); 
    if (height > 767 || width > 1024){
    }else{alert("This website works best on large screens and you may face some issues on this device");};

    function incrementNum() {
      setNum(prev => prev + 1);
    }

    incrementNum();
  }, []);
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
    <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-D5Q00XLK62"></script>

    <script>
      // eslint-disable-next-line
      window.dataLayer = window.dataLayer || [];
      
      function gtag(){
        // eslint-disable-next-line
        dataLayer.push(arguments)
      }
      gtag('js', new Date());
      gtag('config', 'G-D5Q00XLK62');
    </script>
    </head>
      {show && <div className="loader-container fill-window gwarp">
        <ClimbingBoxLoader class="boxloader" color="#FFFFFF" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}
      {home && <div className='loader-container fill-window gwarp'>
        <div class="container">
          <div class="row align-items-center my-5">
            {text && <div class="col-lg-10">
              <h2 class="heading white">Home</h2>
              <p>
                  
              </p>
              <p class="text black">
              ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
              </p>
              <p class="text black">
              ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
              </p>
              <p class="text black">
                Still under Development.....
              </p>
              <p>
                  
              </p>
              <p class="text black">
                Try again in a few days :)
              </p>
            </div>}
          </div>
        </div>
      </div>
}
    </div>
  );
}

export default HomeSimple;
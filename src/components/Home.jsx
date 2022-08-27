import React, { useState, useEffect, CSSProperties, createContext } from 'react';
import './Home.css';
import desktopImage from './desktop.jpg';
import mobileImage from './mobile.jpg';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmzv3ppO3s0Y0SZd5Dy_rIpw3c8QeitW4",
  authDomain: "oldvip-2f0b1.firebaseapp.com",
  projectId: "oldvip-2f0b1",
  storageBucket: "oldvip-2f0b1.appspot.com",
  messagingSenderId: "819210722273",
  appId: "1:819210722273:web:4a9b5e0451b97dfa5090a0",
  measurementId: "G-8LJ7GVWN9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
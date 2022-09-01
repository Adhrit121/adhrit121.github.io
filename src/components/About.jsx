import React,{ useState, useEffect, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./about.css";
import TypeIt from "typeit-react";
import FadeIn from "./FadeIn";
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
function AboutSimple() {
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
    <div className="about gwarp">


    

    
      {show && <div className="loader-container fill-window gwarp">
        <ClimbingBoxLoader class="boxloader" color="#FFFFFF" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}
      {home && <div className='loader-container fill-window gwarp'>
      <FadeIn delay={250} duration={450}>
        <div class="container">
          <div class="row align-items-center my-5">
            
            {text && <div class="col-lg-10">
            <h2 class="heading white"><TypeIt options={{speed: 0,
                  waitUntilVisible: true}}
                getBeforeInit={(instance) => {
                    instance
                    .delete(5, {instant: true})
                    .type("A")
                    .pause(181)
                    .type("b")
                    .pause(278)
                    .type("o")
                    .pause(228)
                    .type("u")
                    .pause(233)
                    .type("t");
                    return instance;
                }}
            /></h2>
              
              <p class="text">
                  
              </p>
              <p class="text">
              ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
              </p>
              <p class="text">
              ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
              </p>
              <p class="text">
                Still under Development.....
              </p>
              <p>            </p>

            </div>}
          </div>
        </div>
        </FadeIn>
      </div>
}
    </div>
  );
}

export default AboutSimple;
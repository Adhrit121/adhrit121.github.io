import React,{ useState, useEffect, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./about.css"
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
  return (
    <div className="about">
      {show && <div className="loader-container fill-window">
        <ClimbingBoxLoader class="boxloader" color="#5bc0de" size={17} speedMultiplier={1.6} loading={loadingInProgress}/>
      </div>}
      {home && <header className='  '>
        <div class="container">
          <div class="row align-items-center my-5">
            
            <div class="col-lg-5">
              <h2 className="text-info" class="heading blue">About</h2>
              <p class="text">
                  
              </p>
              <p class="text">
              ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
              </p>
              <p class="text">
              ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ  ᴬᵈʰʳᶦᵗ.ᵛᶦᵖ
              </p>
              <p class="text">
                Still under Development.....
              </p>
              <p>            </p>

            </div>
          </div>
        </div>
        <center><p class="bottomfly">Cᴏᴅᴇ ғᴏʀ ᴛʜɪs ᴡᴇʙsɪᴛᴇ: </p><a onClick={() => openInNewTab('https://github.com/Adhrit121/adhrit.vip')} class="weblink">ᴳᶦᵗʰᵘᵇ</a></center>
      </header>
}
    </div>
  );
}

export default AboutSimple;
import React, { useState } from 'react';
import './popupstyle.css';
import Popup from './popup'
function done() {
    
}
function Warning() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
    return (
        
        //Add this to get background with autochange:↓
        //style={{backgroundImage: `url(${imageUrl})` ,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',width: '98.7vw',height: '100vh',headerTransparent:'true'}}
        <div className="home">
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <h1> </h1>
            <center><button onClick={togglePopup} class="button button3">Continue</button></center>
            
          {isOpen && <Popup
            content={<>
              <h1 className='text-danger'>Last Warning</h1>
              
              <button onClick={done} class="button buttondanger">Ok,continue</button>
            </>}
          />}
          
    </div>
  );
}
export default Warning;
import React from "react";
// eslint-disable-next-line
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line
import { NavLink } from "react-router-dom";
import './navigation.css';
import Terminal from 'terminal-in-react';
// eslint-disable-next-line
import CircleLoader from "react-spinners/CircleLoader";
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  console.log("Side Navbar opened")
  
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  console.log("Side Navbar closed")
}
function NavigationSimple() {
  const queryParams = new URLSearchParams(window.location.search);
  const color = queryParams.get('color');
  if (color=='green'){
    var classNam="navbar navbar-expand navbar-dark py-3 bg-info";
    var colour="text-white bg-info";
  }else if (color=='red'){
    var classNam="navbar navbar-expand navbar-dark py-3 bg-info";
    var colour="text-white bg-info";
  }else {
    var classNam="navbar navbar-expand navbar-dark py-3 bg-info";
    var colour="text-white bg-info";
  };

  return (
    
    
    
    <div className="navigation" >
      
      <nav className={classNam} >
        <div id="mySidebar" class="sidebar green">
          <a href="#!" class="closebtn" onClick={closeNav}><h3>✖</h3></a>
          <a href="/?color=green">Home</a>
          <a href="/about/?color=green">About</a>
          <a href="/contact/?color=green">Contact Me</a>
          <a href="/projects/?color=green">My Projects</a>
        </div>
        <div id="main">
          <container class="row row-full">
            <script>// eslint-disable-next-line</script>
            <a class="openbtn ele_inline" className={colour} onClick={openNav}><b><h2 class="icon-round"> </h2></b></a>
            <center class="ele_inline"><a class="navbar-brand" href="/"><h2 class="grow" className={colour}><b class="grow">Adhrit.ᵥᵢₚ</b></h2></a></center>
          </container>
          
        </div>
      </nav>
    </div>
  );
}

export default NavigationSimple;




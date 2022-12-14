import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceworker";
import {Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import {
  NavigationSimple,
  FooterSimple,
  HomeSimple,
  AboutSimple,
  ContactSimple,
  Donotclick,
  Warning,
  ProjectsSimple,
  Home,
  About,
  Contact,
  Projects
} from "./components";



ReactDOM.render(
  <HashRouter>
        <NavigationSimple options={{
          headerStyle: {backgroundColor: "#fff", borderBottomWidth: 0 ,
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
          headerTransparent: true,
          headerMode: 'float'}
          
          
        }} />
    <Routes>
      <Route path="/" element={<HomeSimple />} />
      <Route path="/about" element={<AboutSimple />} />
      <Route path="/contact" element={<ContactSimple />} />
      <Route path="/warning" element={<Warning />} />
      <Route path="/do-not-click" element={<Donotclick />} />
      <Route path="/projects" element={<ProjectsSimple />} />
    </Routes>
    <FooterSimple options={{
          headerStyle: {backgroundColor: "#fff", borderBottomWidth: 0 ,
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
          headerTransparent: true,
          headerMode: 'float'}
    }}/>
  </HashRouter>,

  document.getElementById("root")

);



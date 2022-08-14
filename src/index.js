import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceworker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  <Router>
    <NavigationSimple options={{
          headerStyle: {backgroundColor: "#fff", borderBottomWidth: 0 ,
          headerTitleStyle: { color: "#000" },
          headerTintColor: "#000",
          headerMode: 'float',}
          
          
        }} />
    <Routes>
      <Route path="/" element={<HomeSimple />} />
      <Route path="/about" element={<AboutSimple />} />
      <Route path="/contact" element={<ContactSimple />} />
      <Route path="/warning" element={<Warning />} />
      <Route path="/do-not-click" element={<Donotclick />} />
      <Route path="/projects" element={<ProjectsSimple />} />
    </Routes>
    <FooterSimple />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
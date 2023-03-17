import React, { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Home";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// changes
function App() {
  return (
    <div>
      <div>
        <Sidenav />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;

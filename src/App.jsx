import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
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

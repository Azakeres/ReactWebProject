import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Homepage from "./components/Homepage.js";
// import Footer from "./components/Footer.js";
// import Root from "./components/Root.js";
import Notes from "./components/Notes.js";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/notes" component={Notes} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

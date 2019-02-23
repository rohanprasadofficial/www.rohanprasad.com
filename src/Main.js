import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Aboutme from "./components/Aboutme";
import App from "./App";

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home1</Link>
        </li>
        <li>
          <Link to="/about">About1</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Landing1} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Landing1} />
    </div>
  </Router>
);

const Landing1 = () => (
  <div>
    <Landing />
  </div>
);

const About = () => (
  <div>
    <Aboutme />
  </div>
);

export default BasicExample;

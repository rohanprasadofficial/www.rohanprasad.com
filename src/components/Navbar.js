import React, { Component } from "react";
import "../App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Aboutme from "./Aboutme";
import Landing from "./Landing";
import Projects from "./Projects";
import Contacts from "./Contact";
class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      className: "hideNav",
      animate: "animated"
    };
    this.showNav = this.showNav.bind(this);
  }

  showNav() {
    this.setState({
      className: this.state.className === "showNav" ? "hideNav" : "showNav",
      animate: this.state.animate === "animated" ? "" : "animated"
    });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="col-md-12">
              <div className="nav">
                <button className="btn-nav" onClick={this.showNav}>
                  <span className="icon-bar inverted top" />
                  <span className="icon-bar inverted middle" />
                  <span className="icon-bar inverted bottom" />
                </button>
              </div>

              <div className={"nav-content " + this.state.className}>
                <ul className="nav-list vcenter">
                  <li className="nav-item">
                    <p onClick={this.showNav}>
                      <Link to="/">Home</Link>
                    </p>
                  </li>

                  <li className="nav-item">
                    <p onClick={this.showNav}>
                      <Link to="/about">About me</Link>
                    </p>
                  </li>
                  <li className="nav-item">
                    <p onClick={this.showNav}>
                      <Link to="/project">Projects & Learnings</Link>
                    </p>
                  </li>
                  <li className="nav-item">
                    <p onClick={this.showNav}>
                      <Link to="/contact">Contact</Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route exact path="/" component={Landing1} />
          <Route path="/about" component={AboutMe} />
          <Route path="/project" component={Projects1} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}
const Landing1 = () => (
  <div>
    <Landing />
  </div>
);

const AboutMe = () => (
  <div>
    <Aboutme />
  </div>
);
const Projects1 = () => (
  <div>
    <Projects />
  </div>
);
const Contact = () => (
  <div>
    <Contacts />
  </div>
);

export default Navbar;

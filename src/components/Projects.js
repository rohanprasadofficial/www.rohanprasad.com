import React, { Component } from "react";
import Footer from "./Footer";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-md-3 col-sm-12">
            <h5>
              <bold>Education</bold>
            </h5>
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="text-center">
              <div className="alert alert-dark text-center">Undergraduate</div>
              Sikkim Manipal Institute of Technology, Sikkim
              <sup> 2016-2020</sup>
              <small>
                <div class="text-muted">B.Tech (Computer Science)</div>
              </small>
              <br />
            </div>
            <div class="text-center">
              <div className="alert alert-dark">Senior Secondary </div>
              Caesar School , Malbazar
              <small>
                <div class="text-muted">(AISSCE) </div>
              </small>
              <br />
            </div>
            <div class="text-center">
              <div className="alert alert-dark text-center">Secondary</div>
              Caesar School , Malbazar
              <small>
                <div class="text-muted">(AISSE)</div>
              </small>
              <br />
            </div>
          </div>
        </div>
        <div className="cfooter">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import Footer from "./Footer";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-sm-12">
            <h5>
              <bold>Education</bold>
            </h5>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="text-center">
              <div className="text-center">
                <span className="badge badge-pill badge-secondary">
                  Undergraduate
                </span>
              </div>
              <small>Sikkim Manipal Institute of Technology, Sikkim</small>
              <sup> 2016-2020</sup>
              <small>
                <div className="text-muted">B.Tech (Computer Science)</div>
              </small>
              <br />
            </div>
            <div className="text-center">
              <div className="text-center">
                <span className="badge badge-pill badge-secondary">
                  Senior Secondary
                </span>
              </div>
              <small>Caesar School , Malbazar</small>
              <sup> 2014-2016</sup>
              <small>
                <div class="text-muted">(AISSCE) </div>
              </small>
              <br />
            </div>
            <div class="text-center">
              <div className="text-center">
                <span className="badge badge-pill badge-secondary">
                  Secondary
                </span>
              </div>
              <small>Caesar School , Malbazar </small> <sup> 2004-2014</sup>
              <small>
                <div className="text-muted">(AISSCE) </div>
              </small>
              <br />
            </div>
          </div>
        </div>

        <hr />

        {/**
          Learning Section
         */}

        <div className="row">
          <div class="col-md-1 col-sm-12">
            <h5>
              <bold>Learnings</bold>
            </h5>
          </div>
          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">
                Introduction to Modern App Development
              </span>
              <br />
              <small>(NPTEL)</small>
            </div>

            <br />
          </div>
          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">
                Introduction to Machine Learning
              </span>
              <br />
              <small>(NPTEL)</small>
            </div>

            <br />
          </div>
          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">
                Android App Development
              </span>
              <br />
              <small>(Udemy)</small>
            </div>

            <br />
          </div>
        </div>
        <hr />
        {/**
          Projects
          */}

        <div className="row">
          <div class="col-md">
            <h5>
              <strong>Projects</strong>
            </h5>
          </div>

          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">SMITConnect</span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>
          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">TheConveyor</span>
              <sup> Nodejs</sup>
              <br />
            </div>

            <br />
          </div>

          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                Conneqtor
              </span>
              <sup> Nodejs</sup>
              <br />
            </div>

            <br />
          </div>

          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">RailWake</span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>
          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">BitTrace</span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>

          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">
                TechNewsReader
              </span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>

          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">
                Guess the Number
              </span>
              <sup> Javascript</sup>
              <br />
            </div>

            <br />
          </div>

          <div class="col-md">
            <div className="text-center">
              <span class="badge badge-pill badge-secondary">
                Mail System Design
              </span>
              <sup>Algortihms</sup>
              <br />
            </div>

            <br />
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

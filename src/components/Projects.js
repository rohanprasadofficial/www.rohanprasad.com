import React, { Component } from "react";
import Footer from "./Footer";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-sm-12">
            <h5>
              <strong>Education</strong>
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
                <div className="text-muted">(AISSCE) </div>
              </small>
              <br />
            </div>
            <div className="text-center">
              <div className="text-center">
                <span className="badge badge-pill badge-secondary">
                  Secondary
                </span>
              </div>
              <small>Caesar School , Malbazar </small> <sup> 2004-2014</sup>
              <small>
                <div className="text-muted">(AISSE) </div>
              </small>
              <br />
            </div>
          </div>
        </div>

        <hr />

        {/**
          Learning Section
         */}

       
        {/**
          Projects
          */}

        <div className="row">
          <div className="col-md">
            <h5>
              <strong>Projects</strong>
            </h5>
          </div>

          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                quotes
              </span>
              <sup> FlutterPackage</sup>
              <br />
            </div>

            <br />
          </div>


          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                CareerGuider
              </span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>




          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                AirTicket
              </span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>

          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                AirTicket Backend
              </span>
              <sup> Nodejs</sup>
              <br />
            </div>

            <br />
          </div>


          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                SMITConnect
              </span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>
          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                TheConveyor
              </span>
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

          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">RailWake</span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>
          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">BitTrace</span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>

          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                TechNewsReader
              </span>
              <sup> Android</sup>
              <br />
            </div>

            <br />
          </div>

          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                Guess the Number
              </span>
              <sup> Javascript</sup>
              <br />
            </div>

            <br />
          </div>

          <div className="col-md">
            <div className="text-center">
              <span className="badge badge-pill badge-secondary">
                Mail System Design
              </span>
              <sup>Algorithms</sup>
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

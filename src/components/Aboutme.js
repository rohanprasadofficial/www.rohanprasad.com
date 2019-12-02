import Footer from "./Footer";
import React, { Component } from "react";
import dp from "../img/dpq.jpg";

class Aboutme extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <center>
              <img
                src={dp}
                className="col-sm-4 img-circle  dpimage img-fluid "
                alt="dpimage"
              />

              <small className="form-text text-muted">
                It's me ! Trying hard to smile.
              </small>
              <p>
                I am final year student at Sikkim Manipal Institute Of
                Technology ,Sikkim currently pursuing bachelors in Computer
                Science and Engineering . My interest lies in Android , Web
                Development, Competitive Coding & Algorithms.
              </p>
              <small className="form-text text-muted">
                P.S : I am just driven by designing amazing UI and a cup of
                coffee.
              </small>
            </center>
          </div>
        </div>

        <div className="container">
          <div className="text-center">
            <hr />
            Currently Exploring <hr />
          </div>

          <div className="row">
            <div className="col-md text-center">
              <li>Neural Networks & Deep Learning</li>
            </div>
            <div className="col-md">
              <li className="text-center">Android Prototyping</li>
            </div>
            <div className="col-md">
              <li className="text-center">AdobeXD , Illustrator etc.</li>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <hr />
            Skills <hr />
          </div>

          <div className="row">
            <div className="col-md">
              <p className="text-center">Languages & Stack</p>

              <li className="text-center">C++</li>
              <li className="text-center">Java</li>
              <li className="text-center">MySQL</li>
              <li className="text-center">Python</li>

              <li className="text-center">Javascript</li>
              <li className="text-center">MERN</li>
              <li className="text-center">Android Development</li>
            </div>
            <div className="col-md">
              <p className="col-md text-center">Tools & Frameworks</p>
              <li className="text-center">Git & Github</li>
              <li className="text-center">VSCode</li>
              <li className="text-center">Postman</li>
              <li className="text-center">AdobeXD</li>
              <li className="text-center">ExpressJS</li>
              <li className="text-center">ReactJS</li>
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

export default Aboutme;

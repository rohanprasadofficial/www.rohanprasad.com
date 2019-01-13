import React, { Component } from "react";
import logo from "../img/hello1.gif";
import Social from "./Social";
class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid ">
          <div className="col-sm-12 no-gutter text-center fill">
            <div className="vcenter">
              <div>
                <img src={logo} className="profilepic mx-auto" alt="hellopic" />
              </div>
              <p>
                <strong className="text-center intro  ">Hey, I'm Rohan</strong>
              </p>

              <p className="text-center ">
                I'm a developer , loves to learn and create things out of the
                box.
                <br />
                Most used toolkit : Charged laptop with an internet connection
                😉 .
              </p>
              <Social />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;

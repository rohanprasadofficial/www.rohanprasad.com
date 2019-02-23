import React, { Component } from "react";
// import mail from "../img/mail.png";
import Footer from "./Footer";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <center>
              {/* <img
                  src={mail}
                  className="col-sm-1  mail img-fluid"
                  alt="mail"
                /> */}
              <h3>Contact</h3>
              <small id="emailHelp" class="form-text text-muted">
                Have a project for me ?
              </small>
              <p>I would love to hear from you. </p>
            </center>
          </div>

          <div className="col-md-12">
            <center>
              <form
                method="POST"
                action="https://formspree.io/prasadrohan04@gmail.com"
                class="contact-form"
              >
                <div className="form-group">
                  <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Your thoughts"
                  />
                </div>
                <button type="submit" className="btn btn-outline-success">
                  Submit
                </button>
              </form>
            </center>
          </div>
        </div>
        <div className="cfooter">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Contact;

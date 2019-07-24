import React, { Component } from "react";

class Social extends Component {
  render() {
    const sociallinks = {
      facebook: "https://www.facebook.com/rohan.prasad3",
      twitter: "https://twitter.com/rohanprasad04",
      instagram: "https://www.instagram.com/__logarithm__/",
      linkedin: "https://www.linkedin.com/in/rohanpd4/",
      github: "https://github.com/rohanpd4",
      target: "_blank"
    };

    return (
      <div className="row">
        <div className="socials col-sm">
          <a href={sociallinks.facebook} target={sociallinks.target}>
            <i className="fab fa-facebook sicon" />
          </a>
          <a href={sociallinks.instagram} target={sociallinks.target}>
            <i className="fab fa-instagram sicon" />
          </a>
          <a href={sociallinks.linkedin} target={sociallinks.target}>
            <i className="fab fa-linkedin-in sicon" />
          </a>
          <a href={sociallinks.twitter} target={sociallinks.target}>
            <i className="fab fa-twitter sicon" />
          </a>
          <a href={sociallinks.github} target={sociallinks.target}>
            <i className="fab fa-github sicon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Social;

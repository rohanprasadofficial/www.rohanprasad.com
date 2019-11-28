import React, { Component } from "react";

class Social extends Component {
  render() {
    const sociallinks = {
      facebook: "https://www.facebook.com/rohanprasadofficial",
      twitter: "https://twitter.com/rohanpdofficial",
      instagram: "https://www.instagram.com/rohanprasadofficial/",
      linkedin: "https://www.linkedin.com/in/rohanprasadofficial/",
      github: "https://github.com/rohanprasadofficial",
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

import React, { Component } from "react";

class Social extends Component {
  render() {
    const sociallinks = {
      facebook: "https://www.facebook.com/rohan.prasad3",
      twitter: "https://twitter.com/rohanprasad04",
      instagram: "https://www.instagram.com/__logarithm__/",
      linkedin: "https://www.linkedin.com/in/rohan-prasad-b66361140/",
      github: "https://github.com/rohanpd4",
      target: "_blank"
    };

    return (
      <div className="socials">
        <a href={sociallinks.facebook} target={sociallinks.target}>
          <i className="fab fa-facebook sicon" />
        </a>
        <a href={sociallinks.instagram} target={sociallinks.target}>
          <i className="fab fa-instagram sicon" />
        </a>
        <a href={sociallinks.linkedin} target={sociallinks.target}>
          <i class="fab fa-linkedin-in sicon" />
        </a>
        <a href={sociallinks.twitter} target={sociallinks.target}>
          <i class="fab fa-twitter sicon" />
        </a>
        <a href={sociallinks.github} target={sociallinks.target}>
          <i class="fab fa-github sicon" />
        </a>
      </div>
    );
  }
}

export default Social;

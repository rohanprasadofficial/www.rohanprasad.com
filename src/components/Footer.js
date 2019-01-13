import React, { Component } from "react";

class Footer extends Component {
  render() {
    const t = new Date().getHours();
    const sitelink = "https://www.rohanprasad.com";
    let wish;
    if (t >= 20) {
      wish = "good night !";
    } else if (t >= 17) {
      wish = "great evening !";
    } else if (t >= 12) {
      wish = "great afternoon !";
    } else {
      wish = "great day ahead !";
    }

    return (
      <div className="container text-center ubuf small footer">
        <div className="text-center row">
          <div className="col">Thanks for visiting ! Have a {wish} 😇</div>
        </div>
        <div className="row">
          <div className="col">
            Made with <i className="fab fa-react"> </i> by{" "}
            <a href={sitelink}>Logarithm</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

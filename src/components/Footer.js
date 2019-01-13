import React, { Component } from "react";

class Footer extends Component {
  render() {
    const t = new Date().getHours();

    if (t > 20) {
      return <p>Good Night</p>;
    } else if (t > 17) {
      return <p>Good Evening</p>;
    } else if (t >= 12) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12" />
            Made with love by logarithm sd sef sad
          </div>
        </div>
      );
    } else {
      return <p>Morning</p>;
    }
  }
}

export default Footer;

import React, { Component } from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container  ">
        <Navbar />

        <Footer />
      </div>
    );
  }
}

export default App;

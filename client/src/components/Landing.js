import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
            <iframe
              id="vid"
              width="250"
              height="250"
              src="https://www.youtube.com/embed/vcqy-enSBFA?autoplay=1"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

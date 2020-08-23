import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-materialize";

let urlList = [];
let titleList = [];
let descriptionList = [];

class Video extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      title: "",
      description: "",
      search: null,
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">VIDEO PAGE</h1>
      </div>
    );
  }
}

export default Video;

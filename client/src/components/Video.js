import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-materialize";
import { getOneVid } from "./UserFunctions";

let url = "";
let title = "";
let description = "";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      title: "",
      description: "",
      id: "",
      search: null,
    };
  }

  componentDidMount() {
    const id = window.localStorage.getItem("video");
    getOneVid(id)
      .then((res) => {
        console.log(res);
        url = res.url.replace("watch?v=", "embed/");
        title = res.title;
        description = res.description;

        this.setState({
          url: url,
          title: title,
          description: description,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">VIDEO PAGE</h1>
        <h3>{title}</h3>
        <iframe src={url}></iframe>
        <p>{description}</p>
      </div>
    );
  }
}

export default Video;

import React, { Component } from "react";
import { getVid } from "./UserFunctions";
import { Button, Card, Row, Col } from "react-materialize";

let urlList = [];

class Landing extends Component {
  componentDidMount() {
    getVid()
      .then((response) => {
        for (let i = 0; i < response.length; i++) {
          var res = response[i].url.replace("watch?v=", "embed/");
          urlList.push(res);
        }

        this.setState({ url: urlList });
        console.log(urlList);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <Card>
          <iframe id="vid" width="250" height="250" src={urlList[3]}></iframe>
        </Card>
      </div>
    );
  }
}

export default Landing;

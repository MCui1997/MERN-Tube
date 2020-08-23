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
        {urlList.map(function (urlList, i) {
          return <iframe src={urlList} key={i} />;
        })}
      </div>
    );
  }
}

export default Landing;

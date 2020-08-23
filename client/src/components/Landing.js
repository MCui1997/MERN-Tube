import React, { Component } from "react";
import { getVid } from "./UserFunctions";
import { Button, Card, Row, Col } from "react-materialize";
import "./css/Landing.css";

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
        <div className="row">
          {urlList.map(function (urlList, i) {
            return (
              <div className="col l6">
                <Card>
                  <iframe width="100%" height="300px" src={urlList} key={i} />
                  <button>Visit</button>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Landing;

import React, { Component } from "react";
import { getVid, getOneVid } from "./UserFunctions";
import { Link, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import { Button, Card, Row, Col } from "react-materialize";
import "../styles/Landing.css";

let urlList = [];
let titleList = [];
let descriptionList = [];

class Landing extends Component {
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
    getVid()
      .then((response) => {
        urlList = [];
        titleList = [];
        descriptionList = [];
        for (let i = 0; i < response.length; i++) {
          var res = response[i].url.replace("watch?v=", "embed/");
          titleList.push(response[i].title);
          descriptionList.push(response[i].description);
          urlList.push(res);
        }

        this.setState({
          url: urlList,
          title: titleList,
          description: descriptionList,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    function getId(e) {
      window.localStorage.removeItem("video");
      window.localStorage.setItem("video", e);
    }

    return (
      <div className="container">
        <div className="landingCont">
          <h2 className="text-center">HOME</h2>

          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="Search"
            onChange={(e) => this.searchSpace(e)}
          />
          <div className="row">
            {urlList.map(function (urlList, i) {
              return (
                <div className="col s12">
                  <Card>
                    <h3 className="cardTitle">{titleList[i]}</h3>
                    <iframe width="100%" src={urlList} key={i} />
                    <Link to="/video">
                      <button
                        className="btn-floating pulse"
                        value={i}
                        onClick={(e) => getId(e.target.value)}
                      >
                        HUB
                      </button>
                    </Link>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

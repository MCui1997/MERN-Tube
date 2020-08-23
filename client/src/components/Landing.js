import React, { Component } from "react";
import { getVid } from "./UserFunctions";
import { Button, Card, Row, Col } from "react-materialize";
import "./css/Landing.css";

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
        console.log(urlList);
        console.log(titleList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">RECENT VIDEOS</h1>
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
                  <h3>{titleList[i]}</h3>
                  <iframe width="100%" height="300px" src={urlList} key={i} />
                  <p>{descriptionList[i]}</p>
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

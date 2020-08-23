import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-materialize";
import { getOneVid } from "./UserFunctions";
import "../styles/Video.css";

let url = "";
let title = "";
let description = "";
let gifList = [];

class Video extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      title: "",
      description: "",
      id: "",
      search: null,
      gif: "",
      isLoaded: false,
      gifs: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    let queryGif = this.state.gif;

    let query =
      "http://api.giphy.com/v1/gifs/search?q=" +
      queryGif +
      "&api_key=DbERpFZtyU55Cmxy2Art9e7YDIylraiV";

    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ gifs: data });
        for (let i = 0; i < 8; i++) {
          gifList.push(
            "https://media0.giphy.com/media/" +
              this.state.gifs.data[i].id +
              "/giphy.gif"
          );
        }

        this.render();
      })
      .catch(console.log);
  }
  componentDidMount() {
    const id = window.localStorage.getItem("video");
    window.localStorage.removeItem("video");
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
      <div className="row">
        <div className="container vidCont">
          <h1 className="text-center">VIDEO PAGE</h1>
          <div className="row">
            <div className="col s12 m12 l8">
              <Card>
                <h3>{title}</h3>
                <iframe src={url}></iframe>
                <p>{description}</p>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <Card>
                <h5>Reaction Section</h5>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="gif"
                      placeholder="Search Gif"
                      onChange={this.onChange}
                      value={this.state.gif}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Submit
                  </button>
                </form>
              </Card>
            </div>

            {gifList.map(function (gifList, i) {
              return (
                <div className="col l4">
                  <Card>
                    <img width="100%" height="150px" src={gifList} key={i} />
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

export default Video;

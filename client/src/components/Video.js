import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-materialize";
import { getOneVid, getGif, getVidGifs } from "./UserFunctions";
import "../styles/Video.css";

let url = "";
let title = "";
let description = "";
let gifList = [];
let vidGifList = [];
let vidGifDates = [];

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
      "https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q=" +
      queryGif +
      "&api_key=DbERpFZtyU55Cmxy2Art9e7YDIylraiV";

    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ gifs: data });
        gifList = [];
        for (let i = 0; i < 6; i++) {
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

    getVidGifs(id).then((res) => {
      vidGifList = [];
      vidGifDates = [];

      for (let i = 0; i < res.length; i++) {
        vidGifList.push(res[i].url);
        vidGifDates.push(res[i].date.substring(0, 7));
      }

      console.log(vidGifDates);
      this.setState({});
    });

    getOneVid(id)
      .then((res) => {
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
    function saveGif(e) {
      const user = {
        url: gifList[e],
        id: window.localStorage.getItem("video"),
      };

      getGif(user).then((res) => {
        window.location.reload();
      });
    }
    return (
      <div className="container vidCont">
        <h2 className="text-center">HUB</h2>
        <div className="row">
          <div className="col s12 m12 l8">
            <Card className="vidCard">
              <h5>{title}</h5>
              <iframe height="300px" width="100%" src={url}></iframe>
              <p>{description}</p>
            </Card>
          </div>

          <div className="col s12 m12 l4">
            <Card className="mainCard">
              <h5>Search Gifs</h5>
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

              {gifList.map(function (gifList, i) {
                return (
                  <div className="col s12">
                    <Card>
                      <img width="200px" src={gifList} key={i} />
                      <br></br>
                      <button
                        className="btn-floating pulse"
                        value={i}
                        onClick={(e) => saveGif(e.target.value)}
                      >
                        ✓
                      </button>
                    </Card>
                  </div>
                );
              })}
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <Card>
              <h3>Reaction Hub</h3>
              {vidGifList.map(function (vidGifList, i) {
                return (
                  <Card>
                    <img width="200px" src={vidGifList} key={i} />
                    <p>{vidGifDates[i]}</p>
                  </Card>
                );
              })}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;

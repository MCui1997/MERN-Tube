import React, { Component } from "react";
import { getUrl } from "./UserFunctions";
import { getVid } from "./UserFunctions";
import "../styles/Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      title: "",
      description: "",
      id: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    getVid()
      .then((response) => {
        const user = {
          url: this.state.url,
          title: this.state.title,
          description: this.state.description,
          id: response.length,
        };

        getUrl(user).then((res) => {
          this.props.history.push(`/home`);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container profileCont">
        <h2>UPLOAD</h2>
        <div className="row">
          <div className="card uploadCard">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Solo Beach Camping"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Day two on the island and the weather is slowly deteriorating."
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">YouTube URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="url"
                  placeholder="https://www.youtube.com/watch?v=EXsPKQDmlmM"
                  value={this.state.url}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

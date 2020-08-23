import React, { Component } from "react";
import { getUrl } from "./UserFunctions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      title: "",
      description: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      url: this.state.url,
      title: this.state.title,
      description: this.state.description,
    };

    getUrl(user).then((res) => {
      console.log(user);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <div className="row">
            <div className="card">
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
      </div>
    );
  }
}

export default Profile;

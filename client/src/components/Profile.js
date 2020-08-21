import React, { Component } from "react";
import { getVid } from "./UserFunctions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log("hello");
    const user = {
      url: this.state.url,
    };

    getVid(user).then((res) => {
      console.log("hello");
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
                  <label htmlFor="name">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="url"
                    placeholder="Enter youtube url"
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

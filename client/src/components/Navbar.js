import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul id="nav-mobile" className="left">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul id="nav-mobile" className="left ">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/video" className="nav-link">
            Hub
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Upload
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav>
        <div className="nav-wrapper" id="navbarsExample10">
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}

export default withRouter(Landing);

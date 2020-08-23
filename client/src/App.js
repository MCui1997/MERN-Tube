import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Video from "./components/Video";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/video" component={Video} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

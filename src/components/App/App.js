import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import ViewFeeling from "../Views/ViewFeeling.js";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ViewSubmit from "../Views/ViewSubmit";
import ViewSupport from "../Views/ViewSupport";
import ViewUnderstanding from "../Views/ViewUnderstanding";
import ViewComments from "../Views/ViewComments";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <ViewFeeling />

          <Route exact path="/" component={ViewFeeling} />
          <Route exact path="/comments" component={ViewComments} />
          <Route exact path="/understanding" component={ViewUnderstanding} />
          <Route exact path="/support" component={ViewSupport} />
          <Route exact path="/submit" component={ViewSubmit} />
        </Router>
      </div>
    );
  }
}

export default App;

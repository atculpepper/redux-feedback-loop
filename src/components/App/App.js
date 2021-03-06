import React, { Component } from "react";
// import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ViewFeeling from "../Views/ViewFeeling/ViewFeeling.js";
import ViewSubmit from "../Views/ViewSubmit/ViewSubmit";
import ViewSupport from "../Views/ViewSupport/ViewSupport";
import ViewUnderstanding from "../Views/ViewUnderstanding/ViewUnderstanding";
import ViewComments from "../Views/ViewComments/ViewComments";
import ViewSuccess from "../Views/ViewSuccess/ViewSuccess";

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

          <Route exact path="/" component={ViewFeeling} />
          <Route exact path="/comments" component={ViewComments} />
          <Route exact path="/understanding" component={ViewUnderstanding} />
          <Route exact path="/support" component={ViewSupport} />
          <Route exact path="/submit" component={ViewSubmit} />
          <Route exact path="/success" component={ViewSuccess} />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import Feeling from "../Views/Feeling";
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
          <body>
            <h1>How are you feeling today?</h1>
            <div>
              <form>
                <input type="text" placeholder="How are you feeling?" />
                <button onClick={this.onNextClick}>Next</button>
              </form>
            </div>
          </body>
          <br />
        </Router>
      </div>
    );
  }
}

export default App;

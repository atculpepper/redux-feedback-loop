import React, { Component } from "react";
import { connect } from "react-redux";

class ViewSupport extends Component {
  state = {
    feeling: 0,
  };

  render() {
    console.log(this.props.store);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>
            <i>Don't forget it!</i>
          </h4>
        </header>
        <body>
          <div>
            <h1>How well do you feel supported?</h1>
          </div>
        </body>
        <br />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ViewSupport);

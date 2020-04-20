import React, { Component } from "react";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewComments/ViewComments.css";
import { connect } from "react-redux";

class ViewSuccess extends Component {
  onClick = (event) => {
    event.preventDefault();

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div>
          <h1>Your feedback has been submitted. Thank you!</h1>
          <em>Click Next to fill out another feedback form</em>
        </div>

        <input id="submit" type="submit" value="Next" onClick={this.onClick} />
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

export default connect()(ViewSuccess);

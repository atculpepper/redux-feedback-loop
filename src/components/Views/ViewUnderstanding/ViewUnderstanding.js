import React, { Component } from "react";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewUnderstanding/ViewUnderstanding.css";
import { connect } from "react-redux";

class ViewUnderstanding extends Component {
  state = {
    understanding: 0,
  };

  onInputChange = () => (event) => {
    this.setState(
      {
        understanding: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onUnderstandingClick = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SET_UNDERSTANDING",
      payload: this.state,
    });
    this.props.history.push("/support");
  };

  render() {
    const { understanding } = this.state;
    const isEnabled = understanding.length > 0;
    console.log(this.props.store);

    return (
      <div>
        <body>
          <div>
            <h1>How well are you understanding the content?</h1>
          </div>

          <form>
            <input
              type="number"
              id="understanding"
              placeholder="1-5"
              min={1}
              max={5}
              onChange={this.onInputChange()}
            />
            <button disabled={!isEnabled} onClick={this.onUnderstandingClick}>
              Next
            </button>
          </form>
        </body>
        <br />
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

export default connect()(ViewUnderstanding);

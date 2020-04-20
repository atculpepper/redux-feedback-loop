import React, { Component } from "react";
import { connect } from "react-redux";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewFeeling/ViewFeeling.css";

class ViewFeeling extends Component {
  state = {
    feeling: 0,
  };

  onInputChange = () => (event) => {
    this.setState(
      {
        feeling: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onFeelingClick = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SET_FEELING",
      payload: this.state,
    });
    this.props.history.push("/understanding");
  };

  render() {
    const { feeling } = this.state;
    const isEnabled = feeling.length > 0;

    return (
      <div>
        <div>
          <h1>How are you feeling today?</h1>
        </div>
        <div>
          <br></br>
          <form>
            <label>Feeling?</label>
            <br></br>
            <input
              type="number"
              id="feeling"
              placeholder="1-5"
              min={1}
              max={5}
              onChange={this.onInputChange("feeling")}
            />
            <button disabled={!isEnabled} onClick={this.onFeelingClick}>
              Next
            </button>
            <br></br>
            <em>Rate your feeling from 1 - 5 to pass to the next question</em>
          </form>
        </div>
        <br />
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

export default connect()(ViewFeeling);

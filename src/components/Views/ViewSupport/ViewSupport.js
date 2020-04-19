import React, { Component } from "react";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewSupport/ViewSupport.css";
import { connect } from "react-redux";

class ViewSupport extends Component {
  state = {
    support: 0,
  };

  onInputChange = () => (event) => {
    this.setState(
      {
        support: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onSupportClick = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SET_SUPPORT",
      payload: this.state,
    });
    this.props.history.push("/comments");
  };

  render() {
    console.log(this.props.store);
    const { support } = this.state;
    const isEnabled = support.length > 0;

    return (
      <div>
        <div>
          <h1>How well do you feel supported?</h1>
        </div>

        <form>
          <label>Support?</label>
          <br></br>
          <input
            type="number"
            id="support"
            placeholder="1-5"
            min={1}
            max={5}
            onChange={this.onInputChange("support")}
          />
          <button disabled={!isEnabled} onClick={this.onSupportClick}>
            Next
          </button>
        </form>
        <br />
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

export default connect()(ViewSupport);

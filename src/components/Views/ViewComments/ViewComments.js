import React, { Component } from "react";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewComments/ViewComments.css";
import { connect } from "react-redux";

class ViewComments extends Component {
  state = {
    comment: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        comment: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onCommentClick = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: "SET_COMMENT",
      payload: this.state,
    });
    this.props.history.push("/submit");
  };

  render() {
    console.log(this.props.store);
    // const { comment } = this.state;
    // const isEnabled = comment.length > 0;

    return (
      <div>
        <div>
          <h1>Do you have any comments?</h1>
        </div>
        <form>
          <textarea
            onChange={this.onInputChange()}
            id="comments"
            name="comments"
            cols="40"
            rows="5"
          ></textarea>
          <input
            id="submit"
            type="submit"
            value="Next"
            onClick={this.onCommentClick}

            // disabled={!isEnabled}
          />
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ViewComments);

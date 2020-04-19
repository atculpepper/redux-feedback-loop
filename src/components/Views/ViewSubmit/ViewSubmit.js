import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

class ViewSubmit extends Component {
  submitFeedback = (event) => {
    const feedbackLoop = {
      feeling: parseInt(this.props.store.feelingsReducer.feeling),
      understanding: parseInt(
        this.props.store.understandingReducer.understanding
      ),
      support: parseInt(this.props.store.supportReducer.support),
      comments: this.props.store.commentReducer.comment,
    };

    Axios.post("/submit", feedbackLoop)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  render() {
    console.log(this.props.store);

    return (
      <div>
        <div>
          <h1>Review Your Feedback</h1>
        </div>
        <br />
        <h2>Feelings: {this.props.store.feelingsReducer.feeling}</h2>
        <h2>
          Understanding: {this.props.store.understandingReducer.understanding}
        </h2>
        <h2>Support: {this.props.store.supportReducer.support}</h2>
        <h2>Comments: {this.props.store.commentReducer.comment}</h2>
        <button onClick={this.submitFeedback}>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ViewSubmit);

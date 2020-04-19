import React, { Component } from "react";
import { connect } from "react-redux";

class ViewSubmit extends Component {
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
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ViewSubmit);

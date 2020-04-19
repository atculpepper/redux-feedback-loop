import React, { Component } from "react";
import { connect } from "react-redux";

class ViewSubmit extends Component {
  state = {
    feeling: 0,
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <div>
          <h1>Review Your Feedback</h1>
        </div>
        <br />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ViewSubmit);

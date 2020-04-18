import React, { Component } from "react";
// import { connect } from "react-redux";

class ViewSubmit extends Component {
  state = {
    feeling: 0,
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <body>
          <div>
            <h1>Review Your Feedback</h1>
          </div>
        </body>
        <br />
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

export default ViewSubmit;

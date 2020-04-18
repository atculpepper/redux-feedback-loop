import React, { Component } from "react";
import { connect } from "react-redux";

class ViewFeeling extends Component {
  state = {
    feeling: 0,
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <body>
          <div>
            <h1>How are you feeling?</h1>
          </div>
        </body>
        <br />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(ViewFeeling);

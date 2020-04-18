import React, { Component } from "react";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewComments/ViewComments.css";
import { connect } from "react-redux";

class ViewComments extends Component {
  state = {
    comment: "",
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <body>
          <div>
            <h1>Do you have any comments?</h1>
          </div>
          <form>
            <textarea
              id="comments"
              name="comments"
              cols="40"
              rows="5"
            ></textarea>
            <input id="submit" type="submit" value="Next" />
          </form>
        </body>
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

export default connect()(ViewComments);

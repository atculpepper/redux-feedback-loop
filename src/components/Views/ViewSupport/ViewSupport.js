import React, { Component } from "react";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewSupport/ViewSupport.css";
// import { connect } from "react-redux";

class ViewSupport extends Component {
  state = {
    feeling: 0,
  };

  render() {
    console.log(this.props.store);

    return (
      <div>
        <body>
          <div>
            <h1>How well do you feel supported?</h1>
          </div>

          <form>
            <label for="support">Support?</label>
            <br></br>
            <select id="support" name="support">
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
            </select>
            <input type="submit" />
          </form>
        </body>
        <br />
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

export default ViewSupport;

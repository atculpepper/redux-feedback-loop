import React, { Component } from "react";
// import { connect } from "react-redux";
import "/Users/anneculpepper/Documents/Prime-Digital-Academy/Tier2/Week4/redux-feedback-loop-master/src/components/Views/ViewFeeling/ViewFeeling.css";

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
            <h1>How are you feeling today?</h1>
          </div>
          <div>
            <br></br>
            <form>
              <label for="feeling">Feeling?</label>
              <br></br>
              <select id="feeling" name="feeling">
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
                <option value="five">5</option>
              </select>
              <input type="submit" />
            </form>
          </div>
        </body>
        <br />
      </div>
    );
  }
}

// const mapStoreToProps = (store) => ({ store });

// export default connect(mapStoreToProps)(ViewFeeling);

export default ViewFeeling;
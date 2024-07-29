import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
    compomnentDidUpdate() {
      console.log("App - Updated");
    }
  
    compomenDidUnmount() {
      console.log("App - Unmounted");
    }

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />

        {this.props.counters.map((counter) => (
          <Counter
          key={counter.id}
          onDelete={this.props.onDelete}
          onIncrement={this.props.onIncrement}
          onDecremente={this.props.onDecremente}
          counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

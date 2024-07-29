import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  compomnentDidUpdate() {
    console.log("App - Updated");
  }

  compomenDidUnmount() {
    console.log("App - Unmounted");
  }

  render() {
    return (
      <>
        <React.Fragment>
          <div className="row">
            <div className="col-1">
              <span className={this.classModifier()} >{this.formatCount()}</span>{" "}
            </div>
            <div className="col">
              <button
                id="increment"
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-primary btn-sm m-2"
              >
                +
              </button>
              <button
                id="decrement"
                onClick={() => this.props.onDecremente(this.props.counter)}
                className="btn btn-primary btn-sm m-2"
                disabled={this.props.counter.value === 0 ? "disabled":''}
              >
                -
              </button>
              <button
                id="delete"
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2"
              >
                X
              </button>
            </div>
          </div>
        </React.Fragment>{" "}
      </>
    );
  }

  classModifier() {
    let btnStyle = "badge m5 text-bg-";
    btnStyle += this.props.counter.value === 0 ? "warning" : "primary";
    return btnStyle;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

}
export default Counter;

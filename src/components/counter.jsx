import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    // Ajax call for remove data
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Render");
    return (
      // <React.Fragment>
      <div>
        {/*<span>{this.props.children}</span>*/}
        <div className="row mb-3">
          <div className="col-3">
            <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-2">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              {" "}
              +
            </button>
          </div>
          <div className="col-2">
            <button
              disabled={this.makeDisabled()}
              className="btn btn-secondary btn-sm"
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              {" "}
              -
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
      // </React.Fragment>
    );
  }

  makeDisabled() {
    return this.props.counter.value === 0 ? "disabled" : "";
  }

  getbadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;

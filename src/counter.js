import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    //we set the state and we have to bind the state
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  //Using Event handlers
  handleDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }
  //Using Event handlers
  handleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  render() {
    const date = new Date("june 12 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div className="numbers">
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;

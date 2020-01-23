// Main React Component
//
// Author : Simon Li  Jan 23, 2020
//
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  //constructor(props) {
  //  super(props);
    //this.incrementAsync = this.incrementAsync.bind(this);
    //this.incrementIfOdd = this.incrementIfOdd.bind(this);
  //}

  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  decrementIfEven = () => {
    if (this.props.value % 2 === 0) {
      this.props.onDecrement()
    }
  }

  //resetValue = () => this.props.value = 0  // No !!!!!!, no direct change of the state

  incrementAsync = () => setTimeout(this.props.onIncrement, 1000)

  render() {
    const { value, onIncrement, onReset, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        &nbsp;
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        &emsp;  
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        &nbsp;
        <button onClick={this.decrementIfEven}>
          Decrement if even
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
        {' '}
        <button onClick={onReset}>
          Reset
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

export default Counter

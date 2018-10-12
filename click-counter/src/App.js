import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      errorMsj: false
    }
  }

  decrementHandler(){
    if(this.state.counter) {
      this.setState({ counter: this.state.counter - 1, errorMsj: false})
    } else {
      this.setState({ errorMsj: true})
    }

  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display"> The counter is: {this.state.counter}</h1>
        <button data-test="decrement-button" onClick={() => this.decrementHandler()}>
          Decrement
        </button>
        <button data-test="increment-button" 
          onClick={ ()=> this.setState({counter: this.state.counter + 1, errorMsj: false})}
        >
          Increment
        </button>
        { this.state.errorMsj && <h4 data-test="error-message">Counter can't go below zero</h4> }
      </div>
    );
  }
}

export default App;

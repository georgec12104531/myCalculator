import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: "",
      inputTwo: "",
      result: 0,
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleClear = this.handleClear.bind(this);

  }

  updateInput(field) {
    return(e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleAdd(e) {
    e.preventDefault();
    const sum = Number(this.state.inputOne) + Number(this.state.inputTwo);
    this.setState({
      result: sum
    })
  }

  handleMinus(e) {
    e.preventDefault();
    const sum = Number(this.state.inputOne) - Number(this.state.inputTwo);
    this.setState({
      result: sum
    })
  }

  handleMultiply(e) {
    e.preventDefault();
    const sum = Number(this.state.inputOne) * Number(this.state.inputTwo);
    this.setState({
      result: sum
    })
  }

  handleDivide(e) {
    e.preventDefault();
    const sum = Number(this.state.inputOne) / Number(this.state.inputTwo);
    this.setState({
      result: sum
    })
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      inputOne: "",
      inputTwo: "",
      result: 0,
    })
  }



  render() {

    
    return (
      <div className="App">
        <div>Value:{this.state.result}</div>
        <input onChange={this.updateInput("inputOne")} type="text" value={this.state.inputOne}></input>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleDivide}>/</button>
        <button onClick={this.handleMultiply}>*</button>
        <input onChange={this.updateInput("inputTwo")} type="text" value={this.state.inputTwo}></input>
        <button onClick={this.handleClear}>clear</button> 
      </div>
    );
  }
}

export default App;

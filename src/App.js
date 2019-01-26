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
    this.handleOperation = this.handleOperation.bind(this);
  }

  updateInput(field) {
    return(e) => {
      this.setState({
        [field]: e.currentTarget.value
      })
    }
  }

  handleAddition (field) {
    return e => {
      [field]: (this.state.inputOne * this.state.inputTwo)
    }
  }



  render() {
    return (
      <div className="App">
        <div>Value:{this.state.result}</div>
        <input onChange={this.updateInput("inputOne")} type="text" value={this.state.inputOne}></input>
        <button onClick={this.handleOperation}>+</button>
        <button>-</button>
        <button>/</button>
        <button>*</button>
        <input onChange={this.updateInput("inputTwo")} type="text" value={this.state.inputTwo}></input>
        
      </div>
    );
  }
}

export default App;

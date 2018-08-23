import React, { Component } from 'react';
import './App.css';
import PasswordInput from'./PasswordInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Enter your password</p>
        <PasswordInput/>
      </div>
    );
  }
}

export default App;

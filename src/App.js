import React, { Component } from 'react';
import {view as Login} from './login/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;

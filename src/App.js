import React, { Component } from 'react';
import {view as Login} from './login/';
import {view as Regist} from './regist/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Regist />
      </div>
    );
  }
}

export default App;

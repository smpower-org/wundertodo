import React, { Component } from 'react';
import {view as Login} from './login/';
import {view as Regist} from './regist/';
import {view as Main} from './main/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Regist />
        <Main />
      </div>
    );
  }
}

export default App;

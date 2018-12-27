import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {view as Login} from './login/';
import {view as Regist} from './regist/';
import {view as Main} from './main/';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
	<div className="App">
	  <Route exact path="/" component={Main} />
	  <Route path="/login" component={Login} />
	  <Route path="/regist" component={Regist} />
	</div>
      </Router>
    );
  }
}

export default App;

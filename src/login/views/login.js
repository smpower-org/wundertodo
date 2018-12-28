import React from 'react';
import {view as Input} from '../../common/input/';

import './login.css';

import logo from './images/todoist.svg';

class Login extends React.Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      emailValue: '',
      passwordValue: ''
    };
  }

  onEmailChange(event) {
    this.setState({
      emailValue: event.target.value.trim()
    });
  }

  onPasswordChange(event) {
    this.setState({
      passwordValue: event.target.value.trim()
    });
  }

  render() {
    return (
      <div className="login">
        <img className="login-logo" src={logo} alt="wundertodo's logo" />
	<div className="login-inputs">
	  <div className="login-inputs-wrapper">
	    <Input 
	      onChange={(event) => this.onEmailChange(event)}
	      value={this.state.emailValue}
	      placeholder="Enter your email"
	    />
	  </div>
	  <div className="login-inputs-wrapper">
	    <Input 
	      onChange={(event) => this.onPasswordChange(event)}
	      value={this.state.passwordValue}
	      placeholder="Enter your password"
	    />
	  </div>
	</div>
      </div>
    );
  }
}

export default Login;


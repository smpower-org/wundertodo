import React from 'react';

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
	  <div className="login-email">
	    <input 
	      onChange={(event) => this.onEmailChange(event)}
	      value={this.state.emailValue}
	    />
	    <span className="login-input-placeholder">Enter your email</span>
	    <span className="login-input-line"></span>
	  </div>
	  <div className="login-password">
	    <input 
	      onChange={(event) => this.onPasswordChange(event)}
	      value={this.state.passwordValue}
	    />
	    <span className="login-input-placeholder">Enter your password</span>
	    <span className="login-input-line"></span>
	  </div>
	</div>
      </div>
    );
  }
}

export default Login;


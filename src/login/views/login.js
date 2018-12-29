import React from 'react';
import {view as Input} from '../../common/input/';

import './login.css';

import logo from './images/todoist.svg';

class Login extends React.Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onEmailFocus = this.onEmailFocus.bind(this);
    this.onEmailBlur = this.onEmailBlur.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordFocus = this.onPasswordFocus.bind(this);
    this.onPasswordBlur = this.onPasswordBlur.bind(this);

    this.state = {
      emailValue: '',
      passwordValue: '',
      isEmailFocus: false,
      isPasswordFocus: false
    };
  }

  onEmailChange(event) {  // email 输入框
    this.setState({
      emailValue: event.target.value.trim()
    });
  }

  onEmailFocus() {  // email 输入框获取焦点
    this.setState({
      isEmailFocus: true
    });
  }

  onEmailBlur() {  // email 输入框失去焦点
    this.setState({
      isEmailFocus: false
    });
  }

  onPasswordChange(event) {  // password 输入框
    this.setState({
      passwordValue: event.target.value.trim()
    });
  }

  onPasswordFocus() {  // password 输入框获取焦点
    this.setState({
      isPasswordFocus: true
    });
  }

  onPasswordBlur() {  // password 输入框失去焦点
    this.setState({
      isPasswordFocus: false
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
	      onFocus={() => this.onEmailFocus()}
	      onBlur={() => this.onEmailBlur()}
	      value={this.state.emailValue}
	      placeholder="Enter your email"
	      isFocus={this.state.isEmailFocus}
	    />
	  </div>
	  <div className="login-inputs-wrapper">
	    <Input 
	      onChange={(event) => this.onPasswordChange(event)}
	      onFocus={() => this.onPasswordFocus()}
	      onBlur={() => this.onPasswordBlur()}
	      value={this.state.passwordValue}
	      placeholder="Enter your password"
	      isFocus={this.state.isPasswordFocus}
	    />
	  </div>
	</div>
      </div>
    );
  }
}

export default Login;


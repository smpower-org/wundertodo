// file: input.js
// des: 登陆注册组件中的 input 输入框组件

import React from 'react';

import './input.css';

function Input(props) {
  return (
    <div className="login-inputs-wrapper">
      <input 
	onChange={props.onChange}
	onFocus={props.onFocus}
	onBlur={props.onBlur}
	value={props.value}
      />
      <span className={props.isFocus ? "login-input-placeholder active" : "login-input-placeholder"}>{props.placeholder}</span>
      <span className={props.isFocus ? "login-input-line active" : "login-input-line"}></span>
    </div>
  );
}

export default Input;


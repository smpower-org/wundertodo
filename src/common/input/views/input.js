// file: input.js
// des: 登陆注册组件中的 input 输入框组件

import React from 'react';

import './input.css';

function Input(props) {
  return (
    <div className="login-inputs-wrapper">
      <input 
	onChange={props.onChange}
	value={props.value}
      />
      <span className="login-input-placeholder">{props.placeholder}</span>
      <span className="login-input-line"></span>
    </div>
  );
}

export default Input;


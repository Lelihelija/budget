import React from 'react';

export default function Login() {
  return(
    <div className="login-wrapper">
      <span className="login__title">Please Log In</span>
      <form>
        <label className="login__label">
          <p>Username - type username</p>
          <input type="text" className="my-input-default"/>
        </label>
        <label className="login__label">
          <p>Password - type password</p>
          <input type="password" className="my-input-default"/>
        </label>
        <div>
          <button type="submit" className="my-button-default login__button my-button-big">Login</button>
        </div>
      </form>
    </div>
  )
};

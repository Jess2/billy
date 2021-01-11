import React from 'react';
import Style from './Login.module.scss';
import cn from 'classnames';
import LoginForm from "../component/LoginForm";

export default function Login() {
  return <div className={cn(Style.login)}>
    <LoginForm></LoginForm>
  </div>;
}
import React from 'react';
import Style from './Login.module.scss';
import cn from 'classnames';
import LoginForm from "../component/LoginForm";
import Dialog from "../../common/component/Dialog";

export default function Login() {
  return <div className={cn(Style.login)}>
    <LoginForm></LoginForm>
    <Dialog title="로그아웃" contents="로그아웃 하시겠습니까?"></Dialog>
  </div>;
}
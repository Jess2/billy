import React from 'react';
import GlobalStyles from './common/component/GlobalStyles';
import Header from "./common/container/Header";
import Login from "./login/container/Login";

export default function App() {
  return <>
    <Header />
    <Login />
    <GlobalStyles />
  </>;
}
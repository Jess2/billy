import React from 'react';
import GlobalStyles from './common/component/GlobalStyles';
import Header from "./common/container/Header";
import Main from "./main/container/Main";

export default function App() {
  return <>
    <Header />
    <Main />
    <GlobalStyles />
  </>;
}
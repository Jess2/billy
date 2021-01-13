import React from "react";
import { Route } from "react-router-dom";
import GlobalStyles from "./common/component/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Header from "./common/container/Header";
import Login from "./login/container/Login";
import List from "./list/container/List";
import Detail from "./detail/container/Detail";
import Create from "./create/container/Create";
import Edit from "./edit/container/Edit";

export default function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        }
      }}
    >
      <>
        <Header/>
        <Route path="/" exact component={Login} />
        <Route path="/list" component={List} />
        <Route path="/detail" component={Detail} />
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} />
        <GlobalStyles/>
      </>
    </ThemeProvider>
  );
}
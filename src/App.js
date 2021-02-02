import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import { EqpContext } from "./context/equipments";
import { getEquipments } from './api/equipments';
import Header from "./components/organisms/Header";
import Login from "./pages/Login";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

const StyledBody = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default function App() {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    getEquipments().then(data => setEquipments(data));
  }, []);

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#919191',
          pink: '#f06595',
          red: '#ff0000',
        }
      }}
    >
      <>
        <EqpContext.Provider value={equipments}>
          <Header/>
          <StyledBody>
            <Route path="/" exact component={Login}/>
            <Route path="/list" component={List}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/create" component={Create}/>
            <Route path="/edit/:id" component={Edit}/>
          </StyledBody>
          <GlobalStyles/>
        </EqpContext.Provider>
      </>
    </ThemeProvider>
  );
}
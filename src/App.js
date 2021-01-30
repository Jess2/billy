import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./common/component/GlobalStyles";
import {ThemeProvider} from "styled-components";
import { EqpContext, SetEqpContext } from "./common/context/equipments";
import { getEquipments } from './common/api/equipments';
import Header from "./common/container/Header";
import Login from "./login/container/Login";
import List from "./list/container/List";
import Detail from "./detail/container/Detail";
import Create from "./create/container/Create";
import Edit from "./edit/container/Edit";

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
        }
      }}
    >
      <>
        <SetEqpContext.Provider value={setEquipments}>
          <EqpContext.Provider value={equipments}>
            <Header/>
            <StyledBody>
              <Route path="/" exact component={Login}/>
              <Route path="/list" component={List}/>
              <Route path="/detail" component={Detail}/>
              <Route path="/create" component={Create}/>
              <Route path="/edit" component={Edit}/>
            </StyledBody>
            <GlobalStyles/>
          </EqpContext.Provider>
        </SetEqpContext.Provider>
      </>
    </ThemeProvider>
  );
}
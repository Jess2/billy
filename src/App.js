import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/atoms/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {EqpContext} from "./context/equipments";
import {MyInfoContext, MyInfoSetContext} from "./context/myInfo";
import {getEquipments} from './api/equipments';
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

  const myInfoInStorage = sessionStorage.getItem('myInfo') ? JSON.parse(sessionStorage.getItem('myInfo')) : null;
  const [myInfo, setMyInfo] = useState(myInfoInStorage);

  useEffect(() => {
    getEquipments().then(data => setEquipments(data));
  }, []);

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#919191',
          darkgray: '#737373',
          black: '#1f1f1f',
          pink: '#f06595',
          red: '#ff0000',
        }
      }}
    >
      <MyInfoSetContext.Provider value={setMyInfo}>
        <MyInfoContext.Provider value={myInfo}>
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
        </MyInfoContext.Provider>
      </MyInfoSetContext.Provider>
    </ThemeProvider>
  );
}
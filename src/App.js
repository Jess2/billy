import React, {useState} from "react";
import {Route} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./common/component/GlobalStyles";
import {ThemeProvider} from "styled-components";
import { EqpContext, SetEqpContext } from "./common/context/equipments";
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
  const [equipments, setEquipments] = useState([
    {
      id: 1,
      type: 'Smart Phone',
      purchaseDate: '2017-04-01', //구입년월
      createDT: '2018-03-27',
      UpdateDT: '2020-12-07',
      productCode: 'F4HSW3AGHG7K', // 제품번호
      productName: 'iPhone 7', // 제품명
      modelName: 'A1905', // 모델명
      manufacturer: 'APPLE', // 제조사
      regCode: 'MPH-1712-022(T)', // 관리 번호
      specification: '블랙,128GB,KT', // 규격/설명
      description: '', // 추가 정보
      relBusiness: '', // 관련 사업
      isBilly: true, // 대여 상태
      currentLocation: '', // 물품 위치
      billyUser: {
        id: '117',
        name: 'jessie',
        role: "u",
        email: 'test@g.com',
        createDT: "2020-02-26",
        updateDT: "2021-01-04",
      },
    }
  ]);

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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 3vw;
`;

const StyledList = styled.ul`
  width: 100%;
  padding: 1em 0;
  // border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  
  li {
    display: inline-block;
    width: calc((100% - 50px) / 12);
    padding: 0 0.5em;
    word-break: break-all;
    text-align: center;
    vertical-align: top;
    
    &:first-child {
      width: 50px;
    }
  }
`;

export default function List() {
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
  const id = '12345';
  return <StyledWrapper>
    <h1>List</h1>
    <Link to="/create">+ Add</Link>
    <br />
    <Link to={`/detail/${id}`}>Detail</Link>
    <StyledList>
      <li>No.</li>
      <li>분류</li>
      <li>구입년월</li>
      <li>관리번호</li>
      <li>제조사</li>
      <li>제품명</li>
      <li>모델명</li>
      <li>제품번호</li>
      <li>규격/설명</li>
      <li>추가정보</li>
      <li>물품 위치</li>
      <li>관련 사업</li>
      <li>대여 상태</li>
    </StyledList>
    {
      equipments.map(eqp => (
        <StyledList key={eqp.id}>
          <li>{eqp.id}</li>
          <li>{eqp.type}</li>
          <li>{eqp.purchaseDate || '-'}</li>
          <li>{eqp.regCode || '-'}</li>
          <li>{eqp.manufacturer || '-'}</li>
          <li>{eqp.productName || '-'}</li>
          <li>{eqp.modelName || '-'}</li>
          <li>{eqp.productCode || '-'}</li>
          <li>{eqp.specification || '-'}</li>
          <li>{eqp.description || '-'}</li>
          <li>{eqp.currentLocation || '-'}</li>
          <li>{eqp.relBusiness || '-'}</li>
          <li>{eqp.isBilly ? '대여 중' : '-'}</li>
        </StyledList>
      ))
    }
  </StyledWrapper>;
}
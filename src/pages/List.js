import React, { useContext } from "react";
import {Link, useHistory} from "react-router-dom";
import { EqpContext } from "../context/equipments";
import styled from 'styled-components';
import Button from "../components/atoms/Button";
import PageHeader from "../components/molecules/PageHeader";

const StyledWrapper = styled.div`
  padding: 3vw 0;
`;

const StyledList = styled.ul`
  width: 100%;
  padding: 1em 0;
  border-bottom: 1px solid #e9ecef;
  
  &:not(.list-header):hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
  
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
  const equipments = useContext(EqpContext);
  const history = useHistory();

  const onClickEqp = (eqp) => {
    history.push(`/detail/${eqp.id}`);
  };

  return (
    <StyledWrapper>
      <PageHeader title='장비 목록'>
        <Link to="/create">
          <Button size='small' color='blue' outline>+ Add</Button>
        </Link>
      </PageHeader>
      <StyledList className='list-header'>
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
      { equipments &&
        equipments.map(eqp => (
          <StyledList key={eqp.id} onClick={() => onClickEqp(eqp)}>
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
    </StyledWrapper>
  );
}
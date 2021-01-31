import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import PageHeader from "../components/molecules/PageHeader";
import Button from "../components/atoms/Button";
import {getEquipment} from "../api/equipments";

const StyledWrapper = styled.div`
  padding: 3vw 0;
`;

const StyledList = styled.ul`
  width: 100%;
  
  li {
    display: inline-block;
    width: 100%;
    padding: 1.2em 0;
    word-break: break-all;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid #e9ecef;
    
    span {
      display: inline-block;
     
      &:first-child {
        width: 20%;
      }
    }
  }
`;

export default function Detail({ match }) {
  const [eqp, setEqp] = useState([]);

  useEffect(() => {
    getEquipment(match.params.id).then(data => {
      setEqp(data)
    });
  }, []);

  return (
    <StyledWrapper>
      <PageHeader title='장비 상세'>
        <Link to="/create">
          <Button size='small' color='blue' outline>Edit</Button>
          <Button size='small' color='red' outline>Delete</Button>
        </Link>
      </PageHeader>
      <StyledList>
        <li>
          <span>No.</span>
          <span>{eqp.id}</span>
        </li>
        <li>
          <span>분류</span>
          <span>{eqp.type}</span>
        </li>
        <li>
          <span>구입년월</span>
          <span>{eqp.purchaseDate || '-'}</span>
        </li>
        <li>
          <span>관리번호</span>
          <span>{eqp.regCode || '-'}</span>
        </li>
        <li>
          <span>제조사</span>
          <span>{eqp.manufacturer || '-'}</span>
        </li>
        <li>
          <span>제품명</span>
          <span>{eqp.productName || '-'}</span>
        </li>
        <li>
          <span>모델명</span>
          <span>{eqp.modelName || '-'}</span>
        </li>
        <li>
          <span>제품번호</span>
          <span>{eqp.productCode || '-'}</span>
        </li>
        <li>
          <span>규격/설명</span>
          <span>{eqp.specification || '-'}</span>
        </li>
        <li>
          <span>추가정보</span>
          <span>{eqp.description || '-'}</span>
        </li>
        <li>
          <span>물품 위치</span>
          <span>{eqp.currentLocation || '-'}</span>
        </li>
        <li>
          <span>관련 사업</span>
          <span>{eqp.relBusiness || '-'}</span>
        </li>
        <li>
          <span>대여 상태</span>
          <span>{eqp.isBilly ? '대여 중' : '-'}</span>
        </li>
      </StyledList>
    </StyledWrapper>
  );
}
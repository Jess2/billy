import React from 'react';
import styled from "styled-components";
import eqpPropLabels from '../../assets/data/eqpPropLabels.json';

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

export default function EqpListRow({eqp}) {
  return (
    <StyledList>
      {
        Object.keys(eqpPropLabels).map((key) => (
          <li key={key}>
            <span>{eqpPropLabels[key]}</span>
            <span>
              {key === 'isBilly'
                ? (eqp[key] ? '대여 중' : '대여 가능')
                : eqp[key] || '-'}
            </span>
          </li>
        ))
      }
      {
        eqp.billyUser &&
        <li>
          <span>대여자</span>
          <span>{`${eqp.billyUser.name} (${eqp.billyUser.email})`}</span>
        </li>
      }
    </StyledList>
  );
}
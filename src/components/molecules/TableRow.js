import React from 'react';
import styled from "styled-components";
import eqpPropLabels from '../../assets/data/eqpPropLabels.json';

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

export default function TableRow({ isLabel, eqp, openEqpDetail }) {
  function onClickEqp(eqp) {
    openEqpDetail(eqp);
  }

  return (
    <>
      {isLabel
        ? <StyledList className='list-header'>
            {
              Object.keys(eqpPropLabels).map((key) => (
                <li key={key}>{eqpPropLabels[key]}</li>
              ))
            }
          </StyledList>
        : <StyledList onClick={() => onClickEqp(eqp)}>
            {
              Object.keys(eqpPropLabels).map((key) => (
                <li key={key}>{eqp[key] || '-'}</li>
              ))
            }
          </StyledList>
      }
    </>
  );
}

TableRow.defaultProps = {
  isLabel: false,
  eqp: {},
  openEqpDetail: null,
};
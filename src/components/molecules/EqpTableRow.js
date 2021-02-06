import React from 'react';
import styled from "styled-components";
import Moment from 'react-moment';
import eqpProps from '../../assets/data/eqpProps.json';

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
    width: calc((100% - 50px) / ${Object.keys(eqpProps).length - 2});
    padding: 0 0.5em;
    word-break: break-all;
    text-align: center;
    vertical-align: top;
    
    &:first-child {
      width: 50px;
    }
  }
`;

export default function EqpTableRow({isLabel, eqp, openEqpDetail}) {
  const onClickEqp = (eqp) => {
    openEqpDetail(eqp);
  }

  return (
    <>
      { isLabel &&
        <StyledList className='list-header'>
          { Object.keys(eqpProps).map((key) => (
            eqpProps[key].isSimpleData && (
              <li key={key}>{eqpProps[key].label}</li>
            )))
          }
        </StyledList>
      }
      { !isLabel &&
        <StyledList onClick={() => onClickEqp(eqp)}>
          { Object.keys(eqpProps).map((key) => (
            eqpProps[key].isSimpleData && (
              <li key={key}>
                { key === 'isBilly' &&
                  (eqp[key] ? '대여 중' : '대여 가능')
                }
                { eqpProps[key].type === 'Date' && eqp[key] &&
                  <Moment format={eqpProps[key].dateFormat}>
                    {eqp[key]}
                  </Moment>
                }
                { eqpProps[key].type !== 'Date' && key !== 'isBilly' &&
                  eqp[key]
                }
                { eqpProps[key].type !== 'Boolean' && !eqp[key] &&
                  '-'
                }
              </li>
            )))
          }
        </StyledList>
      }
    </>
  );
}

EqpTableRow.defaultProps = {
  isLabel: false,
  eqp: {},
  openEqpDetail: null,
};
import React, {useState} from 'react';
import styled from "styled-components";
import Moment from 'react-moment';
import eqpPropsObj from '../../assets/data/eqpProps.json';
import {TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted} from "react-icons/ti";

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
    width: calc((100% - 50px) / ${Object.keys(eqpPropsObj).length - 2});
    padding: 0 0.5em;
    word-break: break-all;
    text-align: center;
    vertical-align: top;
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    
    &:first-child {
      width: 50px;
    }
  }
`;

export default function EqpTableRow({isLabel, equipments, setEquipments, eqp, openEqpDetail}) {
  const [eqpProps, setEqpProps] = useState({...eqpPropsObj});
  const onClickEqp = (eqp) => {
    openEqpDetail(eqp);
  }

  const onClickHeadList = (key) => {
    for (let _key in eqpProps) {
      if (_key === key) {
        eqpProps[_key].isSorted = true;
        eqpProps[_key].isSortedDesc = !eqpProps[_key].isSortedDesc;
      } else {
        eqpProps[_key].isSorted = false;
        eqpProps[_key].isSortedDesc = false;
      }
    }

    setEqpProps(eqpProps);
    setEquipments([...sortEqp(key)]);
  }

  const sortEqp = (key) => {
    return equipments.sort((a, b) => {
      let x = a[key];
      let y = b[key];

      if (eqpProps[key].type === 'Date') {
        x = new Date(x).getTime();
        y = new Date(y).getTime();
      }

      if (eqpProps[key].isSortedDesc) {
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      } else {
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }
    });
  }

  return (
    <>
      {isLabel &&
        <StyledList className='list-header'>
          {Object.keys(eqpProps).map((key) => (
            eqpProps[key].isSimpleData && (
              <li key={key} onClick={() => onClickHeadList(key)}>
                <span>{eqpProps[key].label}</span>
                {!eqpProps[key].isSorted && <TiArrowUnsorted/>}
                {eqpProps[key].isSorted &&
                  (eqpProps[key].isSortedDesc
                    ? <TiArrowSortedDown/>
                    : <TiArrowSortedUp/>
                  )
                }
              </li>
            )))
          }
        </StyledList>
      }
      {!isLabel &&
        <StyledList onClick={() => onClickEqp(eqp)}>
          {Object.keys(eqpProps).map((key) => (
            eqpProps[key].isSimpleData && (
              <li key={key}>
                {key === 'isBilly' &&
                  (eqp[key] ? '대여 중' : '대여 가능')
                }
                {eqpProps[key].type === 'Date' && eqp[key] &&
                  <Moment format={eqpProps[key].dateFormat}>
                    {eqp[key]}
                  </Moment>
                }
                {eqpProps[key].type !== 'Date' && key !== 'isBilly' &&
                  eqp[key]
                }
                {eqpProps[key].type !== 'Boolean' && !eqp[key] &&
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
  equipments: null,
  setEquipments: null,
};
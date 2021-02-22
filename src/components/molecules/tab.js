import React, {useState} from 'react';
import styled from 'styled-components';

const StyledTab = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  
  li {
    background: white;
    border: 1px solid gray;
    border-bottom: none;
    padding: 8px 20px;
    border-radius: 5px 5px 0 0;
    margin-left: 10px;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:not(.selected):hover {
      background: lightgray;
      cursor: pointer;
    }
    
    &.selected {
      margin-bottom: -1px;
      cursor: default;
    }
  }
`;

export default function Tab({children, tabs, selectedTab, setSelectedTab}) {
  const onClickTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <StyledTab>
      { tabs.map((tab, index) => (
          <li key={index} className={tab === selectedTab ? 'selected' : null}
              onClick={() => onClickTab(tab)}>
            { tab }
          </li>
        ))
      }
    </StyledTab>
  );
}

Tab.defaultProps = {
  tabs: [],
}
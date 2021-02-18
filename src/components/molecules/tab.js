import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
  
  li {
    border: 1px solid gray;
    border-bottom: none;
    padding: 8px 20px;
    border-radius: 5px 5px 0 0;
    margin-left: 10px;
    cursor: pointer;
    
    &:first-child {
      margin-left: 0;
    }
    
    &:hover {
      background: lightgray;
    }
  }
`;

function Tab({children, title}) {
  return (
    <StyledTab>
      <li>Phone</li>
      <li>Laptop</li>
      <li>Tablet</li>
    </StyledTab>
  );
}

export default Tab;
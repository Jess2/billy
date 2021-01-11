import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  
  /* 크기 */
  height: 2.25rem;
  line-height: 2.1rem;
  font-size: 1rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:focus {
    background: #339af0;
  }
`;

export default function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}
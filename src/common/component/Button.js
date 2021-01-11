import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
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
  font-size: 1rem;

  
  /* 색상 */
  ${props => {
    const COLOR = props.theme.palette[props.color];
    return css`
      background: ${COLOR};
      &:hover {
        background: ${lighten(0.1, COLOR)};
      }
      &:active {
        background: ${darken(0.1, COLOR)};
      }
    `;
  }}
`;

export default function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}
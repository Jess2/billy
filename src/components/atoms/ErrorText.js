import React from 'react';
import styled from 'styled-components';
import { IoWarningSharp } from 'react-icons/io5';

const StyledErrorText = styled.p`
  display: flex;
  align-items: center;
  padding: 0.5em 0.2em;
  text-align: left;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette['red']};
  
  span {
    padding-left: 0.3em;
  }
`;

export default function ErrorText({children, size, fullWidth, ...rest}) {
  return (
    <StyledErrorText
      size={size}
      fullWidth={fullWidth}
      {...rest}
    >
      <IoWarningSharp />
      <span>{children}</span>
    </StyledErrorText>
  );
}
import React from 'react';
import styled, {css} from 'styled-components';

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
};

const sizeStyles = css`
  ${({size}) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props =>
  props.fullWidth &&
  css`
      width: 100%;
      justify-content: center;
  `}
`;

const StyledInput = styled.input`
  /* 공통 스타일 */
  display: inline-block;
  border-radius: 4px;
  padding: 1.2em 1em;
  
  /* 크기 */
  ${sizeStyles}
  
  /* 기타 */
  & + & {
    margin-top: 1em;
  }
  
  ${fullWidthStyle}
`;

export default function Input({children, size, fullWidth, inputRef, ...rest}) {
  return (
    <StyledInput
      size={size}
      fullWidth={fullWidth}
      ref={inputRef}
      {...rest}
    >
      {children}
    </StyledInput>
  );
}

Input.defaultProps = {
  size: 'medium',
};
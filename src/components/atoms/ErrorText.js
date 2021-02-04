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

const StyledErrorText = styled.p`
  /* 공통 스타일 */
  padding: 0.5em 0.2em;
  text-align: left;
  color: ${({ theme }) => theme.palette['red']};
  
  /* 크기 */
  ${sizeStyles}
  
  ${fullWidthStyle}
`;

export default function ErrorText({children, size, fullWidth, ...rest}) {
  return (
    <StyledErrorText
      size={size}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledErrorText>
  );
}

ErrorText.defaultProps = {
  size: 'small',
};
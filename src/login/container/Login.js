import React from 'react';
import styled from 'styled-components';
import LoginForm from "../component/LoginForm";

export default function Login() {
  const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 60px);
  `;
  const StyledLogin = styled.div`
    width: 350px;
    max-width: 80%;
    text-align: center;
  `;

  const StyledLogo = styled.h3`
      color: #919191;
      margin-bottom: 50px;
  `;

  return (
    <StyledWrapper>
      <StyledLogin>
        <StyledLogo>
          Billy
        </StyledLogo>
        <LoginForm></LoginForm>
      </StyledLogin>
    </StyledWrapper>
  );
}
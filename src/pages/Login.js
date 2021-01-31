import React from 'react';
import styled from 'styled-components';
import LoginForm from "../components/organisms/LoginForm";
import logoImage from '../assets/images/billy-logo-2.png';

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
      
      img {
        width: 60%;
      }
  `;

  return (
    <StyledWrapper>
      <StyledLogin>
        <StyledLogo>
          <img src={logoImage} alt='Logo Image' />
        </StyledLogo>
        <LoginForm></LoginForm>
      </StyledLogin>
    </StyledWrapper>
  );
}
import React from 'react';
import styled from 'styled-components';
import LoginForm from "../component/LoginForm";

export default function Login() {

  const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 60px);
  `;

  return (
    <StyledLogin>
      <LoginForm></LoginForm>
    </StyledLogin>
  );
}
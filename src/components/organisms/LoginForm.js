import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import {Link} from "react-router-dom";

const StyledForm = styled.form`
  width: 100%;
  align-items: center;
  padding: 50px 40px;
  text-align: center;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  
  input {
    margin: 10px 0;
  }
  
  button {
    margin-top: 30px;
    min-width: 50%;
    text-align: center;
    max-width: 100%;
  }
`;

export default function LoginForm() {
  return <>
    <StyledForm>
      <label htmlFor="user-id" />
      <input id="user-id" type="text" value='syjung@maxst.com' readOnly placeholder="Email ID"/>
      <label htmlFor="user-pw" />
      <input id="user-pw" type="password" value='maxst12!@' readOnly placeholder="Password"/>
      <Link to="/list">
        <Button type="submit">
          SIGN IN
        </Button>
      </Link>
    </StyledForm>
  </>;
}
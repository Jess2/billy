import React, {useState, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import {postLogin} from "../../api/users";
import Input from "../atoms/Input";
import ErrorText from "../atoms/ErrorText";
import validateEmail from "../../plugins/validateEmail";

const StyledForm = styled.div`
  width: 100%;
  align-items: center;
  padding: 50px 40px;
  text-align: center;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  
  input {
    margin: 5px 0;
  }
  
  button {
    margin-top: 50px;
    min-width: 50%;
    text-align: center;
    max-width: 100%;
  }
  
  .error-text {
    position: absolute;
  }
`;

export default function LoginForm() {
  const history = useHistory();
  const [user, setUser] = useState({email: 'user1@test.com', password: 'billy12!@'});
  const [errorText, setErrorText] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onClickSignIn = () => {
    if (!user.email && !user.password) {
      setErrorText('아이디 및 비밀번호를 입력하세요.');
    } else if (!user.email) {
      setErrorText('아이디를 입력하세요.');
    } else if (!user.password) {
      setErrorText('비밀번호를 입력하세요.');
    } else if (!validateEmail(user.email)) {
      setErrorText('아이디는 이메일 형식이어야 합니다.');
    } else {
      postLogin(user.email, user.password).then(data => {
        if (data) {
          history.push(`/list`);
        } else {
          setErrorText('아이디 또는 비밀번호를 확인해 주세요.');
        }
      });
    }
  }

  const onChangeInput = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'email') {
        passwordRef.current.focus();
      } else if (e.target.name === 'password') {
        onClickSignIn();
      }
    }
  }

  return <>
    <StyledForm>
      <label htmlFor="user-id"/>
      <Input
        id="user-id"
        type="text"
        name="email"
        placeholder="Email ID"
        inputRef={emailRef}
        value={user.email}
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      <label htmlFor="user-pw"/>
      <Input
        id="user-pw"
        type="password"
        name="password"
        placeholder="Password"
        inputRef={passwordRef}
        value={user.password}
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      {errorText && <ErrorText className='error-text'>{errorText}</ErrorText>}
      <Button onClick={onClickSignIn}>
        SIGN IN
      </Button>
    </StyledForm>
  </>;
}
import React from 'react';
import styled from 'styled-components';
import Button from '../../common/component/Button';

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 2vw;
  background-color: #ffffff;
  border-bottom: 1px solid #e9ecef;
`;

export default function LoginForm() {
    return <>
        <StyledForm>
            <label htmlFor={'user-id'}>
                <input id={'user-id'} type={'text'} placeholder={'Email ID'}/>
            </label>
            <label htmlFor={'user-pw'}>
                <input id={'user-pw'} type={'text'} placeholder={'Password'}/>
            </label>
            <Button type={'submit'} color={'pink'}>SIGN IN</Button>
        </StyledForm>
    </>;
}
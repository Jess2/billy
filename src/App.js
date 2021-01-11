import React, { useState } from 'react';
import GlobalStyles from './common/component/GlobalStyles';
import styled, {ThemeProvider} from 'styled-components';
import Header from "./common/container/Header";
import Login from "./login/container/Login";
import Dialog from "./common/component/Dialog";
import Button from "./common/component/Button";

export default function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인')
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소')
    setDialog(false);
  };
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        }
      }}
    >
      <>
        <Header/>
        {/*<Login/>*/}
        <Button onClick={onClick}>로그아웃</Button>
        <GlobalStyles/>
        <Dialog
          title="로그아웃"
          contents="로그아웃 하시겠습니까?"
          onConfirm={onConfirm}
          onCancel={onCancel}
          isVisible={dialog}
        >
        </Dialog>
      </>
    </ThemeProvider>
  );
}
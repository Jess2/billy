import React from 'react';
import GlobalStyles from './common/component/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import Header from "./common/container/Header";
import Login from "./login/container/Login";
import Button from "./common/component/Button";

export default function App() {
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
            <Header/>
            <Login/>
            <GlobalStyles/>
        </ThemeProvider>
    );
}
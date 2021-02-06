import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from "../atoms/Button";
import Modal from "./Modal";
import logoImage from '../../assets/images/billy-logo-2.png';
import {MyInfoContext, MyInfoSetContext} from '../../context/myInfo';

export default function Header() {
  const history = useHistory();
  const [dialog, setDialog] = useState(false);
  const [helpDialog, setHelpDialog] = useState(false);
  const myInfo = useContext(MyInfoContext);
  const setMyInfo = useContext(MyInfoSetContext);

  const onClickLogo = () => {
    if (history.location.pathname !== '/list') {
      if (myInfo) {
        history.push(`/list`);
      } else {
        history.push(`/`);
      }
    }
  };
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
    setMyInfo(null);
    history.push(`/`);
  };
  const onCancel = () => {
    setDialog(false);
  };
  const onClickHelp = () => {
    setHelpDialog(true);
  };
  const onCancelHelp = () => {
    setHelpDialog(false);
  };

  const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin: 0 auto;
    padding: 0 calc((100% - 1200px) / 2);
    background-color: #ffffff;
    border-bottom: 1px solid #e9ecef;
    
    > div:first-child {
      height: 100%;
      
      h5 {
        display: flex;
        align-items: center;
        height: 100%;
        cursor: pointer;
        
        img {
          height: 60%;
        }
      }
    }
  `;

  return (
    <StyledHeader>
      <div>
        <h5 role='button'>
          <img src={logoImage} alt='Logo' onClick={onClickLogo} />
        </h5>
      </div>
      <div>
        <Button size='small' outline onClick={onClickHelp}>Help</Button>
        { myInfo && <Button size='small' color='pink' outline onClick={onClick}>Sign Out</Button> }
      </div>
      <Modal
        title="로그아웃"
        contents="로그아웃 하시겠습니까?"
        onConfirm={onConfirm}
        onCancel={onCancel}
        isVisible={dialog}
      >
      </Modal>
      <Modal
        title="서비스 문의"
        contents="jess2.developer@gmail.com"
        cancelText="닫기"
        onCancel={onCancelHelp}
        isVisible={helpDialog}
      >
      </Modal>
    </StyledHeader>
  );
}
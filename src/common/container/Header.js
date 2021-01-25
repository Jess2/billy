import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from "../component/Button";
import Dialog from "../component/Dialog";

export default function Header() {
  const [dialog, setDialog] = useState(false);
  const [helpDialog, setHelpDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
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
    
    h5 {
      color: #919191;
    }
  `;

  return (
    <StyledHeader>
      <div>
        <h5>
          <Link to="/">Billy Rental</Link>
        </h5>
      </div>
      <div>
        <Button size='small' outline onClick={onClickHelp}>Help</Button>
        <Button size='small' color='pink' outline onClick={onClick}>Sign Out</Button>
      </div>
      <Dialog
        title="로그아웃"
        contents="로그아웃 하시겠습니까?"
        onConfirm={onConfirm}
        onCancel={onCancel}
        isVisible={dialog}
      >
      </Dialog>
      <Dialog
        title="서비스 문의"
        contents="jess2.developer@gmail.com"
        cancelText="닫기"
        onCancel={onCancelHelp}
        isVisible={helpDialog}
      >
      </Dialog>
    </StyledHeader>
  );
}
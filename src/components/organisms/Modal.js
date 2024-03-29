import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Button from "../atoms/Button";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
    
  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
    margin-top: 1rem;
  }
  
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
  
  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  margin-top: 2rem;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

function Modal({ title, contents, confirmText, cancelText, onConfirm, onCancel, isVisible }) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(isVisible);

  useEffect(() => {
    // isVisible 값이 true -> false 가 되는 것을 감지
    if (localVisible && !isVisible) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false)
      }, 250);
    }
    setLocalVisible(isVisible);
  }, [localVisible, isVisible]);

  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!isVisible}>
      <DialogBlock disappear={!isVisible}>
        <h3>{title}</h3>
        <p>{contents}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>{cancelText}</ShortMarginButton>
          { onConfirm && <ShortMarginButton color="blue" onClick={onConfirm}>{confirmText}</ShortMarginButton> }
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Modal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소'
};

export default Modal;
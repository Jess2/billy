import React from 'react';
import Style from './Header.module.scss';
import cn from 'classnames';

export default function Header() {
  return <div className={cn(Style.header)}>
    <div className={cn(Style.header__logo)}>
      <div className={cn(Style.logo)}>
        <h1>Billy Rental</h1>
      </div>
    </div>
    <div className={cn(Style.header__settings)}>
      <button>언어 선택</button>
      <button>계정</button>
      <button>서비스 문의</button>
    </div>
  </div>;
}
import { Menu, ChevronLeft } from '@styled-icons/material';
import {
  HeaderContainer,
  IconContainer,
  TitleContainer,
} from './Header.styles';
import Router from 'next/router';
import { getAccessToken } from '@constants/constants';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { rootState } from '@reducers/rootReducer';
import store from '@store';

type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  const userData = (state: rootState) => state.user.userData.firstName;

  const handleLogout = () => {
    if (getAccessToken) {
      localStorage.clear();
      Router.push('/login');
    }
  };

  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
      <TitleContainer>Header</TitleContainer>
      <span>
        Welcome, <b>{userData}</b>! &nbsp;&nbsp;
      </span>
      <button onClick={() => handleLogout()}>Logout</button>
    </HeaderContainer>
  );
}

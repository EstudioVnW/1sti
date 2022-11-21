import React, { useState } from "react";
import SocialNetworks from './SocialNetworks';

import {
  logo,
  open,
  close
} from '../../../assets';

import * as S from './styles';

function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const renderIconMenu = () => (
    <S.ButtonMenu onClick={handleMenu}>
      {isOpenMenu
        ? <S.IconClose src={close} alt='Fechar Menu' />
        : <img src={open} alt='Abrir Menu' />
      }
    </S.ButtonMenu>
  )

  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Logo src={logo} alt="Logo 1sti" />
        {renderIconMenu()}
      </S.ContainerLogo>
      <S.ContentMenu isOpenMenu={isOpenMenu}>
        <S.Ul isOpenMenu={isOpenMenu}>
          <S.List border> Home </S.List>
          <S.List> Serviço </S.List>
          <S.List> Insights </S.List>
          <S.List> Carreiras </S.List>
          <S.List> Ecossistema </S.List>
          <S.List> Contato </S.List>
          <S.List fontRegular> EN </S.List>
        </S.Ul>
        <SocialNetworks />
      </S.ContentMenu>
    </S.Container>
  );
}

export default Menu;

import React, { useState } from 'react';
import SocialNetworks from './SocialNetworks';

import {
  logo,
  open,
  close
} from '../../../assets';

import * as S from './styles';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  let location = useLocation();

  const listMenu = [
    {
      to: '/',
      nameRoute: 'Home',
    },
    {
      to: '/servico',
      nameRoute: 'Serviço',
    },
    {
      to: '/insights',
      nameRoute: 'Insights',
    },
    {
      to: '/carreiras',
      nameRoute: 'Carreiras',
    },
    {
      to: '/ecossistema',
      nameRoute: 'Ecossistema',
    },
    {
      to: '/contato',
      nameRoute: 'Contato',
    }
  ];

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
  );

  const renderLink = (item, idx) => {
    const { pathname } = location;
    const currentPage = pathname === item.to;

    return (
      <S.List border={currentPage} key={idx} >
        <Link to={item.to}>
          {item.nameRoute}
        </Link>
      </S.List>
    )
  }

  return (
    <S.Container isOpenMenu={isOpenMenu}>
      <S.ContainerLogo>
        <S.Logo src={logo} alt='Logo 1sti' />
        {renderIconMenu()}
      </S.ContainerLogo>
      <S.ContentMenu isOpenMenu={isOpenMenu}>
        <S.Ul isOpenMenu={isOpenMenu}>
          {listMenu.map((i, idx) => renderLink(i, idx))}
          <S.List fontRegular> EN </S.List>
        </S.Ul>
        <SocialNetworks />
      </S.ContentMenu>
    </S.Container>
  );
}

export default Menu;

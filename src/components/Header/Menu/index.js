import React, { useState } from 'react';
import SocialNetworks from './SocialNetworks';

import {
  logo,
  open,
  close,
  logo1sti
} from '../../../assets';

import * as S from './styles';
import { useLocation } from 'react-router-dom';

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
      to: 'https://1sti.solides.jobs/',
      nameRoute: 'Carreiras',
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
      <S.List border={currentPage} key={idx}>
        <a
          href={item.to}
          target={item.nameRoute === 'Carreiras' && "_blank"}
          rel="noreferrer"
        >
          {item.nameRoute}
        </a>
      </S.List>
    )
  }

  return (
    <S.Container isOpenMenu={isOpenMenu}>
      <S.Nav>
        <S.ContainerLogo>
          <S.Logo src={logo} alt='Logo 1sti' />
          <S.Figure>
            <img full src={logo1sti} alt='Logo 1sti' />
          </S.Figure>
          {renderIconMenu()}
        </S.ContainerLogo>
        <S.ContentMenu isOpenMenu={isOpenMenu}>
          <S.Ul isOpenMenu={isOpenMenu}>
            {listMenu.map((i, idx) => renderLink(i, idx))}
            <S.List fontRegular> EN </S.List>
          </S.Ul>
          <SocialNetworks />
        </S.ContentMenu>
      </S.Nav>
    </S.Container>
  );
}

export default Menu;

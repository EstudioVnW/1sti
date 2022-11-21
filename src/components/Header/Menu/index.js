import SocialNetworks from './SocialNetworks';

import { logo } from '../../../assets';

import * as S from './styles';

function Menu() {
  return (
    <S.Container>
      <S.ContainerLogo>
        <S.Logo src={logo} alt="Logo 1sti" />
        <S.Close>X</S.Close>  
      </S.ContainerLogo>
      <S.Ul>
        <S.List border> Home </S.List>
        <S.List> Serviço </S.List>
        <S.List> Insights </S.List>
        <S.List> Carreiras </S.List>
        <S.List> Ecossistema </S.List>
        <S.List> Contato </S.List>
        <S.List fontRegular> EN </S.List>
      </S.Ul>
      <SocialNetworks />
    </S.Container>
  );
}

export default Menu;

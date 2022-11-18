import {logo} from '../../assets';

import * as S from './styles';

function Menu() {
    return (
      <S.Container>
        <S.Logo src={logo} alt="Logo 1sti" />
        <S.Ul>
            <S.List> Home </S.List>
            <S.List> Serviço </S.List>
            <S.List> Insights </S.List>
            <S.List> Carreiras </S.List>
            <S.List> Ecossistema </S.List>
            <S.List> Contato </S.List>
            <S.List> EN </S.List>
        </S.Ul>
      </S.Container>
    );
  }
  
  export default Menu;
  
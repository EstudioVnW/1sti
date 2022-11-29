import * as S from './styles';

import { iconMore } from '../../../assets';

function Card({ firstTitle, secondTitle, subtitle }) {
  return (
    <S.Container>
      <>
        <S.Title> {firstTitle} </S.Title>
        <S.Title> {secondTitle} </S.Title>
      </>
      <S.Text> {subtitle} </S.Text>
      <S.Button>
        <S.ButtonText>Saiba mais</S.ButtonText>
        <img src={iconMore} alt='Icone de de saiba mais' />
      </S.Button>
    </S.Container>
  );
}

export default Card;

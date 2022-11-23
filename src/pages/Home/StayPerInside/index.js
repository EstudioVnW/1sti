import * as S from './styles';

import { redArrow } from '../../../assets';

function StayPerInside() {
  return (
    <S.Container>
      <S.Box>
        <S.Title> Fique por dentro </S.Title>
        <S.Text>
          Assine nossa newsletter e acompanhe insights
          e tendências de tecnologia e mercado com abordagem Deep Tech.
        </S.Text>
        <S.ContentRegister>
          <S.TextRegister>Cadastre-se</S.TextRegister>
          <S.Img src={redArrow} alt='Seta para prosseguir' />
        </S.ContentRegister>
      </S.Box>
    </S.Container>
  );
}

export default StayPerInside;

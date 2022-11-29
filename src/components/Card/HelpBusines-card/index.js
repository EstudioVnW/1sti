import Cards from '../index';

import * as S from './styles';

function HelpBusiness({ screen }) {
  return (
    <S.Container>
      <Cards
        smallCard
        width='100vw'
        service
        buttonText='Fale conosco'
        screen={screen}
      >
        <S.Text>
          Como podemos ajudar a jornada digital do seu negócio?
        </S.Text>
      </Cards>
    </S.Container>
  );
}

export default HelpBusiness;

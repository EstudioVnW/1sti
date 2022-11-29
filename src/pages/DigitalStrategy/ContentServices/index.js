import Cards from '../../../components/Card';

import * as S from './styles';

function ServicesScreen() {
  return (
    <S.Container>
      <Cards full width='100vw' service buttonText='Fale conosco'>
        <S.Text>
          Como podemos ajudar a jornada digital do seu negócio?
        </S.Text>
      </Cards>
    </S.Container>
  );
}

export default ServicesScreen;

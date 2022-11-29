import Cards from '../../../components/Card';

import * as S from './styles';

function ServicesScreen() {
  return (
    <S.Container>
      <Cards
        smallCard
        width='100vw'
        service
        buttonText='Fale conosco'
        screen='Plataformas'
      >
        <S.Text>
          Como podemos ajudar a jornada digital do seu negócio?
        </S.Text>
      </Cards>
    </S.Container>
  );
}

export default ServicesScreen;

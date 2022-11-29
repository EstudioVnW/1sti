import * as S from './styles';

import ServiceBox from '../../../components/Card';
import SubTitle from '../../../components/SubTitle';

function Services() {
  return (
    <S.Container>
      <ServiceBox
        service
        title='Serviços'
      >
        <SubTitle>
          O que podemos fazer para elevar propostas de valor,
          escalar soluções com agilidade aumentada e amplificar
          resultados com tecnologias emergentes e inovação profunda:'
        </SubTitle>
      </ServiceBox>
    </S.Container>
  );
}

export default Services;

import * as S from './styles';

import ServiceBox from '../../../components/Card';

function Services({ children }) {

  return (
    <S.Container>
      <ServiceBox
        service
        title='Serviços'
      >
        <p>
          O que podemos fazer para elevar propostas de valor,
          escalar soluções com agilidade aumentada e amplificar
          resultados com tecnologias emergentes e inovação profunda:'
        </p>
      </ServiceBox>
    </S.Container>
  );
}

export default Services;

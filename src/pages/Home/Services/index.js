import * as S from './styles';

import ServiceBox from '../../../components/Card';
// import SideBox from '../../../components/SideBox';

function Services() {

  return (
    <S.Container>
      {/* <SideBox
        full
        Service
        paddingTopShort
        title='Serviços'
        subTitle='O que podemos fazer para elevar propostas de valor,
          escalar soluções com agilidade aumentada e amplificar
          resultados com tecnologias emergentes e inovação profunda:'
      /> */}
      <ServiceBox service/>
    </S.Container>
  );
}

export default Services;

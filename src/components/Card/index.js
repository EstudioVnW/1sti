import * as S from './styles';

import Card from './Style';
import ServiceBox from './ServiceBox';

function Services({ service }) {

  return (
    <S.Container>
     {service && <ServiceBox
        full
        paddingTopShort
        title='Serviços'
        subTitle='O que podemos fazer para elevar propostas de valor,
          escalar soluções com agilidade aumentada e amplificar
          resultados com tecnologias emergentes e inovação profunda:'
      />}
      <Card
        firstTitle='Estratégia'
        secondTitle='Digital'
        subtitle='A tecnologia como meio para transformações profundas'
      />
      <Card
        firstTitle='Backbones'
        secondTitle='Digitais'
        subtitle='Acelerando inovações com agilidade aumentada'
      />
      <Card
        firstTitle='Plataformas'
        secondTitle='Digitais'
        subtitle='O caminho para o presente e o futuro dos negócios'
      />
      <Card
        firstTitle='Inovação'
        secondTitle='Deep Tech'
        subtitle='Tecnologias visionárias para inovação de alto impacto'
      />
      <Card
        firstTitle='Deep'
        secondTitle='Analytics'
        subtitle='Amplificando análise de dados para multiplicar oportunidades'
      />
    </S.Container>
  );
}

export default Services;
